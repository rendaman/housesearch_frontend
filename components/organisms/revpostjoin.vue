<template>
    <div class="revpostjoin">
        <SelectBox  :pholder="pholder"
                    :options="statuskeys"
                    :title="`現在のご状況`"
                    :req="true"
                    @statusUpdate="Statused"
        >
        </SelectBox>
        <div v-for="revkey in revkeys" :key="revkey.name">
            <RevPost    class="mx-auto py-2"   
                        :revkey="revkey"
                        :resbody="resbody"
                        @rateUpdate="Stared"
                        @commentUpdate="Texted">
            </RevPost>
        </div>
        <GeneralButton  class="my-5 mx-auto text-center" 
                        :title="title"
                        @sendButtonPush="submit">
        </GeneralButton>
    </div>
</template>

<script>
import RevPost from '~/components/molecules/revpost'
import GeneralButton from '~/components/atoms/generalbutton'
import SelectBox from '~/components/atoms/selectbox'
export default {
    data () {
        return {
            revkeys: {
                cost: {
                    name: "cost",
                    namekana: "費用",
                    rate:"costrate",
                    comment:"costcomment"
                },
                design: {
                    name: "design",
                    namekana: "デザイン",
                    rate:"designrate",
                    comment:"designcomment"
                },
                layout: {
                    name: "layout",
                    namekana: "間取り",
                    rate:"layoutrate",
                    comment:"layoutcomment"
                },
                spec: {
                    name: "spec",
                    namekana: "性能",
                    rate:"specrate",
                    comment:"speccomment"
                },
                guarantee: {
                    name: "guarantee",
                    namekana: "保証",
                    rate:"guaranteerate",
                    comment:"guaranteecomment"
                },
                sales: {
                    name: "sales",
                    namekana: "営業",
                    rate:"salesrate",
                    comment:"salescomment"
                },
            } ,
            statuskeys: ["見積中", "完成"],
            title: "",
            pholder: "現在のご状況を教えてください",
            resbody: {
                status:"",
                costrate:0,
                costcomment:"",
                designrate:0,
                designcomment:"",
                layoutrate:0,
                layoutcomment:"",
                specrate:0,
                speccomment:"",
                guaranteerate:0,
                guaranteecomment:"",
                salesrate:0,
                salescomment:"",
            },
        }
    },
    components: {
        RevPost, GeneralButton, SelectBox
    },
    props:['maker', 'pk', 'review'],
    methods: {
        Stared:function (resbody) {
            this.resbody = resbody
        },
        Texted:function (resbody) {
            this.resbody = resbody
        },
        Statused:function (value) {
            this.resbody.status = value
        },
        submit: async function () {
            let formdata = new FormData
            const total = this.resbody.costrate + this.resbody.designrate + this.resbody.layoutrate + this.resbody.specrate
                                     + this.resbody.guaranteerate + this.resbody.salesrate
            formdata.append('author', this.$auth.user)
            formdata.append('maker_name', this.maker.name_eng)
            formdata.append('status', this.resbody.status)
            formdata.append('costrate', this.resbody.costrate)
            formdata.append('costcomment', this.resbody.costcomment)
            formdata.append('designrate', this.resbody.designrate)
            formdata.append('designcomment', this.resbody.designcomment)
            formdata.append('layoutrate', this.resbody.layoutrate)
            formdata.append('layoutcomment', this.resbody.layoutcomment)
            formdata.append('specrate', this.resbody.specrate)
            formdata.append('speccomment', this.resbody.speccomment)
            formdata.append('guaranteerate', this.resbody.guaranteerate)
            formdata.append('guaranteecomment', this.resbody.guaranteecomment)
            formdata.append('salesrate', this.resbody.salesrate)
            formdata.append('salescomment', this.resbody.salescomment)
            formdata.append('avgrate', parseFloat(total/6).toFixed(2))

            if (this.pk == ""){
                const response = await this.$axios.$post(this.$REVIEW_URL, formdata)
                .then(
                    response => this.$router.push('/review/' + response.maker_name)
                )
                .catch(
                    error => alert("入力項目に誤りがあります")
                )
            } else {
                const response = await this.$axios.$put(this.$REVIEW_URL + this.pk + '/', formdata)
                .then(
                    response => this.$router.push('/review/' + response.maker_name)
                )
                .catch(
                    error => alert("入力項目に誤りがあります")
                )
            }
        }
    },
    mounted() {
        if (this.pk == ""){
            this.title="投稿"
        } else {
            this.title="修正"
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.revpostjoin {
    margin-right: 16px;
    margin-left: 16px;
}
</style>