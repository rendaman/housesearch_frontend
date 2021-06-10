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
                        @sendButtonPush="Pushed">
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
                    namekana: "住宅の性能",
                    rate:"specrate",
                    comment:"speccomment"
                },
                attach: {
                    name: "attach",
                    namekana: "付帯設備",
                    rate:"attachrate",
                    comment:"attachcomment"
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
            title: "投稿",
            pholder: "現在のご状況を教えてください",
            resbody: {
                author:"",
                status:"",
                costrate:0,
                costcomment:"",
                designrate:0,
                designcomment:"",
                layoutrate:0,
                layoutcomment:"",
                specrate:0,
                speccomment:"",
                attachrate:0,
                attachcomment:"",
                guaranteerate:0,
                guaranteecomment:"",
                salesrate:0,
                salescomment:"",
                maker_name:"",
                avgrate:0.00
            },
        }
    },
    components: {
        RevPost, GeneralButton, SelectBox
    },
    props:['maker', 'isposted'],
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
        Pushed:function () {
            var total = this.resbody.costrate + this.resbody.designrate + this.resbody.layoutrate + this.resbody.specrate
                                     + this.resbody.attachrate + this.resbody.guaranteerate + this.resbody.salesrate
            this.resbody.avgrate = parseFloat(total/7).toFixed(2)
            this.resbody.author = this.$auth.user
            this.resbody.maker_name = this.maker.name_eng
            this.submit()
        },
        submit: async function () {
            const url = 'api/reviews/'
            const res = await this.$axios.$post(url, this.resbody)
        }
    },
    mounted() {
        this.title="arunde"
    }
}
</script>

<style lang="scss">
</style>