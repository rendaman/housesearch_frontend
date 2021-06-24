<template>
    <div class="exppostjoin mx-auto">
        <SelectBox  :pholder="'現在のご状況を教えてください'"
                    :options="['見積中', '完成']"
                    :title="`現在のご状況`"
                    :req="true"
                    @statusUpdate="Statused"
        >
        </SelectBox>
        <CostAndLandArea    class="mx-auto"
                            :resbody="resbody"
                            @commentUpdate="Texted">                            
        >
        </CostAndLandArea>
        <div v-for="revkey in revkeys" :key="revkey.name">
            <ExpPost    class="mx-auto py-2"   
                        :revkey="revkey"
                        :resbody="resbody"
                        @commentUpdate="Texted">
            </ExpPost>
        </div>
        <input type="file" v-on:change="select_file" class="py-2"/>
        <GeneralButton  class="my-5 mx-auto text-center" 
                        :title="buttonlabel"
                        @sendButtonPush="Pushed">
        </GeneralButton>
    </div>
</template>

<script>
import GeneralButton from '~/components/atoms/generalbutton'
import SelectBox from '~/components/atoms/selectbox'
import ExpPost from '~/components/molecules/exppost'
import CostAndLandArea from '~/components/molecules/costandlandarea'
export default {
    components: {
        ExpPost, GeneralButton, SelectBox, CostAndLandArea
    },
    data () {
        return {
            buttonlabel: "",
            revkeys: {
                gradecomment: {
                    name: "gradecomment",
                    namekana: "設備グレード",
                },                
                costupcomment: {
                    name: "costupcomment",
                    namekana: "費用が上がるポイント",
                },
                costdowncomment: {
                    name: "costdowncomment",
                    namekana: "費用が下がるポイント",
                },
            } ,
            resbody: {
                author:"",
                status:"",
                hid: "True",
                cost:0,
                landarea:0,
                gradecomment:"",
                costupcomment:"",
                costdowncomment:"",
                maker_name:"",
                image: null,
            },
        }
    },
    props:['maker', 'pk', 'expense'],
    methods: {
        Texted:function (resbody) {
            this.resbody = resbody
        },
        Statused:function (value) {
            this.resbody.status = value
        },
        Pushed:function () {
            this.resbody.author = this.$auth.user
            this.resbody.maker_name = this.maker.name_eng
            this.submit()
        },
        select_file:function(e){
            this.resbody.image = e.target.files[0]
        },
        submit: async function () {
            if (this.pk == ""){
                const response = await this.$axios.$post(this.$EXPENSE_URL, this.resbody)
                    .then(
                        response => this.$router.push('/expense/' + response.maker_name)
                    )
                    .catch(
                        error => alert("入力項目に誤りがあります")
                    )
            } else {
                const response = await this.$axios.$put(this.$EXPENSE_URL + this.pk + '/', this.resbody)
                    .then(
                        response => this.$router.push('/expense/' + response.maker_name)
                    )
                    .catch(
                        error => alert("入力項目に誤りがあります")
                    )
            }
        }
    },
    mounted() {
        if (this.pk == ""){
            this.buttonlabel="投稿"
        } else {
            this.buttonlabel="修正"
        }
    }
}
</script>

<style lang="scss">
.exppostjoin{
    max-width: 840px;
}
</style>