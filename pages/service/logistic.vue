<template>
    <span style="min-height: 86.5vh;">
        <div class="text-container">
            <el-row>
                <el-col class="title t-a-center">
                    Logistics & Warehouse
                </el-col>
            </el-row>

            <el-row class="m-t-md">
                <img class="image" style="width: 100%" src="@/static/logistic.jpg" />
            </el-row>

            <el-row class="m-l-lg m-t-md">
                <p>
                    We are one stop service provider of inbound and outbound offering client customized solution
                    and ensure your shipment from original to destination both air and sea shipment.To help your
                    shipment cost effective and most efficient, our knowledgeable support team is the specialist
                    and professional in logistic to ensure our customer’s satisfaction to the highest level and
                    the best in convenience of total logistic solution.All related services would provide to optimize
                    your shipment and best fit to your requirement.
                </p>
            </el-row>

            <el-row class="m-l-lg m-t-md">
                <el-col style="font-size: 20px;" class="title">
                    Our offered service
                </el-col>
                <el-row :gutter="24">
                    <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="list-tag">Air and Sea Freight Service</el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="list-tag">Customs service</el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="list-tag">Obtained License/ Certification from government departments</el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="list-tag">Transportation</el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="list-tag">Free zone warehouse</el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="list-tag">Packaging / Re-package</el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="list-tag">BOI (stock of material)</el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" class="list-tag">Consultancy for fundamental logistics planner</el-col>
                </el-row>
            </el-row>
        </div>
    </span>
</template>

<script>
    import ComingSoon from "@/components/ComingSoon"
    export default {
        components: {
            ComingSoon
        }
    }
</script>
