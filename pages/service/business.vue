<template>
    <span style="min-height: 86.5vh;">
        <div class="text-container">
            <el-row>
                <el-col class="title t-a-center">
                    Business Registration
                </el-col>
            </el-row>

            <el-row class="m-t-md">
                <img class="image" style="width: 100%" src="@/static/business.jpg" />
            </el-row>

             <el-row class="m-l-lg m-t-md">
                <el-col style="font-size: 20px;" class="title">
                    BOI License
                </el-col>
                <ul>
                    <li>BOI License Acquisition</li>
                    <li>Full Operation Start-up</li>
                    <li>Changing Details of BOI Project</li>
                    <li>Submit of Operation Monitoring Report (6months,12months,24months)</li>
                    <li>BOI License Cancellation</li>
                </ul>
            </el-row>

            <el-row class="m-l-lg m-t-md">
                <el-col style="font-size: 20px;" class="title">
                    Company Registration
                </el-col>
                <ul>
                    <li>New company registration</li>
                    <li>Shareholder Changing</li>
                    <li>Capital Increase</li>
                    <li>Director Changing</li>
                    <li>Company Tax I.D. Acquisition</li>
                    <li>Social Security Welfare Registration</li>
                    <li>Closing Company</li>
                </ul>
            </el-row>

            <el-row class="m-l-lg m-t-md">
                <el-col style="font-size: 20px;" class="title">
                    Representative Office License
                </el-col>
                <ul>
                    <li>Representative Office Registration</li>
                    <li>Rep Office Manager Changing</li>
                    <li>Technology Transfer and Market Research Report</li>
                    <li>Closing Rep Office</li>
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
