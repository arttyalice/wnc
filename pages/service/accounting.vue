<template>
    <span style="min-height: 86.5vh;">
        <div class="text-container">
            <el-row>
                <el-col class="title t-a-center">
                    Accounting & Tax consulting
                </el-col>
            </el-row>

            <el-row class="m-t-md">
                <img class="image" style="width: 100%" src="@/static/accounting.jpg" />
            </el-row>

            <el-row class="m-l-lg m-t-md">
                <el-col style="font-size: 20px;" class="title">
                    Monthly Service
                </el-col>
                <ul>
                    <li>Book-keeping and Financial Statement preparation</li>
                    <li>Payroll and Issue of pay statement：Declare PND1(Withholding personal income tax),Calculate social security and make payment</li>
                    <li>Monthly tax declaration：Declare PND53,54(Withholding Tax) and PP30,36(Value added tax)</li>
                    <li>Review of Monthly accounting data</li>
                </ul>
            </el-row>

            <el-row class="m-l-lg m-t-md">
                <el-col style="font-size: 20px;" class="title">
                    Annual Service
                </el-col>
                <ul>
                    <li>Annual settlement of accounts processing： Report to The Department of Business Development</li>
                    <li>Annual, Half Yearly tax declaration：Declare PND50(Annual tax) and PND51(Half Yearly tax)</li>
                    <li>Annual Auditing：Correspond and cooperate with the auditing work</li>
                </ul>
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
