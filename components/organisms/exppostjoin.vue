<template>
    <div class="exppostjoin">
        <div class="mx-auto">
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
        <div class="uploadbtn mx-auto py-2">
            <input multiple type="file" v-on:change="select_expfile"/>
            <input multiple type="file" v-on:change="select_layoutfile"/>
        </div>
        <GeneralButton  class="my-5 mx-auto text-center" 
                        :title="buttonlabel"
                        @sendButtonPush="submit">
        </GeneralButton>
    </div>
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
                status:"",
                cost:0,
                landarea:0,
                gradecomment:"",
                costupcomment:"",
                costdowncomment:"",
                expimage: null,
                layoutimage: null,
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
        select_expfile:function(e){
            this.resbody.expimage = e.target.files[0]
        },
        select_layoutfile:function(e){
            this.resbody.layoutimage = e.target.files[0]
        },
        submit: async function () {
            let formdata = new FormData
            formdata.append('author', this.$auth.user)
            formdata.append('status', this.resbody.status)
            formdata.append('maker_name', this.maker.name_eng)
            formdata.append('cost', this.resbody.cost)
            formdata.append('landarea', this.resbody.landarea)
            formdata.append('gradecomment', this.resbody.gradecomment)
            formdata.append('costupcomment', this.resbody.costupcomment)
            formdata.append('costdowncomment', this.resbody.costdowncomment)
            formdata.append('expimage', this.resbody.expimage)
            formdata.append('layoutimage', this.resbody.layoutimage)
            
            if (this.pk == ""){
                const response = await this.$axios.$post(this.$EXPENSE_URL, formdata)
                .then(
                    response => this.$router.push('/expense/' + response.maker_name)
                )
                .catch(
                    error => alert("入力項目に誤りがあります")
                )
            } else {
                const response = await this.$axios.$put(this.$EXPENSE_URL + this.pk + '/', formdata)
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

<style lang="scss" >
@import "@/assets/css/mixin.scss";
.exppostjoin{
    margin-right: 16px;
    margin-left: 16px;
}
.uploadbtn {
    max-width: 840px;
}
</style>