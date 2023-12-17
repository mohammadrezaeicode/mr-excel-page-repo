<template>
    <v-container>
        <div class="d-flex">
            <v-btn data-hint="1" data-message="With click on button, you Can add header to Table(Excel)"
                data-message-dir="b" icon="mdi-plus" @click="click" variant="text"></v-btn>
            <v-btn data-hint="5" data-message="Show hint" data-message-dir="b" icon="mdi-comment-question-outline"
                @click="displayHint" variant="text"></v-btn>
        </div>

        <div class="d-flex mr-auto">
            <div class="d-flex" data-hint="3" data-message="show number of shift left" data-message-dir="b">

                <span class="text-center shift-num">{{ shiftLeft }}</span>
                <v-icon>mdi-chevron-double-right</v-icon>
            </div>
        </div>
        <!-- <div class="d-flex">
            <table v-if="shiftTop > 0">
                <tr v-for="head in shiftTop" :key="head + 'test-range-v-for' + shiftTop">
                    <td class="text-center text-black" v-for="head in shiftLeft + 1"
                        :key="head + 'test-range-v-for' + shiftLeft">
                        <v-icon>mdi-chevron-down</v-icon>
                    </td>

                </tr> -->
        <!-- <tr>
                    <td class="text-center text-black" v-for="head in shiftLeft + 1"
                        :key="head + 'test-range-v-for' + shiftLeft">
                        <v-icon>mdi-chevron-down</v-icon>
                    </td>
                </tr> -->
        <!-- </table>
        </div> -->
        <v-row no-gutters class="overflow-auto flex-nowrap">
            <div class="d-flex  flex-column" data-hint="4" data-message="show number of shift top" data-message-dir="b">
                <span class="text-center shift-num">{{ shiftTop }}</span>
                <v-icon>mdi-chevron-double-down</v-icon>
            </div>
            <!-- <table v-if="shiftLeft > 0">
                <tr>
                    <th class="text-center text-black" v-for="head in shiftLeft"
                        :key="head + 'test-range-v-for' + shiftLeft">
                        <v-icon>mdi-chevron-right</v-icon>
                    </th> -->
            <!-- <th class="text-center text-black" >
                        <v-icon>mdi-chevron-right</v-icon>
                    </th> -->
            <!-- </tr>
            </table> -->
            <table id="play">
                <tr :style="(playG.headBackgroundColor.length > 0 ? { backgroundColor: playG.headBackgroundColor } : '')">
                    <th v-bind="hintHead(index)" :style="(playG.headColor.length > 0 ? { color: playG.headColor } : '')"
                        v-for="(head, index) in headers" :key="index + head + 'pl'" @click="thClick(index)">
                        <v-text-field v-model="head.text" variant="underlined"></v-text-field>
                    </th>
                    <!-- <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th> -->
                </tr>
                <tr>
                    <td v-for="(head, index) in headers" :key="index + head + 'row1'">Test{{ index + 1 }}
                    </td>
                </tr>
            </table>

        </v-row>
        <div class="d-flex w-100">
            <CodeSection data-hint="6" data-message="result of playground" data-message-dir="in" :forceDownload="true"
                class="w-100" :stringCode="result" :type="'javascript'" :notShowHiddien="true"></CodeSection>
            <!-- <code><pre v-text="result"></pre></code> -->
        </div>
    </v-container>
</template>
<script setup>
import { nextTick, onDeactivated, onMounted, ref } from "vue";
import { playgroundStore } from "../../stores/playG"
import { formatString } from "../../utils/generate"
import CodeSection from '@/components/code/codeSection.vue'
import { showHint, clearHint } from "../../utils/hint"
let playG = playgroundStore()
function hintHead(index) {
    if (index == 0) {
        return {
            "data-hint": "7",
            "data-message": "Text field change header text and with click on cell option will apper on right navbar.",
            "data-message-dir": "b", "class": "position-relative"
        }
    } else {
        return {}
    }
}
let ind = 1
let hintOpend = true
function displayHint() {
    playG.reset()
    clearHint()
    hintOpend = true
    const hitMap = {}
    let nodes = document.querySelectorAll("[data-hint]")
    let counter = 0
    nodes.forEach(v => {
        counter++
        console.log(v, v.getAttribute("data-hint"))
        hitMap[v.getAttribute("data-hint")] = {
            node: v,
            dir: v.getAttribute("data-message-dir"),
            message: v.getAttribute("data-message"),
        }
    })
    function shHint() {
        let element = hitMap[ind + ""]
        showHint(element.node, element.message, element.dir, ind == 1, ind == counter, () => {
            ind++
            clearHint()
            shHint()
        }, () => {
            ind--
            clearHint()
            shHint()
        }, () => {
            ind = 1
            clearHint()
            hintOpend = false
        })
    }
    if (nodes.length > 0) {
        shHint()
    }

}
function refreshHint() {
    if (hintOpend) {
        displayHint()
    }
}
window.addEventListener("scroll", refreshHint, false)
window.addEventListener("resize", refreshHint, false)
onDeactivated(() => {
    window.removeEventListener("scroll", refreshHint, false)
    window.removeEventListener("resize", refreshHint, false)
})
onMounted(() => {
    let seen = localStorage.getItem("hint-seen");
    if (seen == "1") {
        playG.reset()
    } else {
        displayHint()
    }
    localStorage.setItem("hint-seen", "1")

})
let shiftLeft = ref(0)
let shiftTop = ref(0)
let headers = ref(playG.headers)
let result = ref("{}")
function click() {
    playG.addHeader({
        label: "head" + (headers.value.length + 1),
        text: "",
        comment: ""
    })
    if (hintOpend) {
        nextTick(() => {
            displayHint()
        })
    }
}
function thClick(index) {
    console.log(index, headers.value[index])
    playG.changeSelectedItem(index)
}
// function shiftLeftUpdate(num) {
//     shiftLeft.value = num
// }
// setInterval(_=>{

// },1000)
playG.$subscribe(() => {
    console.log("changr")
    if (playG.shiftTop > 0) {
        for (let index = 0; index < playG.shiftTop; index++) {
            shiftTop.value = index + 1
        }
    } else {
        shiftTop.value = 0
    }
    if (playG.shiftLeft > 0) {
        for (let index = 0; index < playG.shiftLeft; index++) {
            shiftLeft.value = index + 1
        }
    } else {
        shiftLeft.value = 0
    }
    let headStyle = {}
    let dataStyle = {}
    let styles = {}
    let setHeaderStyle = false
    let setConditinalStyle = false
    if (playG.headColor.length > 0) {
        setHeaderStyle = true
        headStyle.color = playG.headColor
    }
    if (playG.headBackgroundColor.length > 0) {
        setHeaderStyle = true
        headStyle.backgroundColor = playG.headBackgroundColor
    }
    if (playG.dataColor.length > 0) {
        setConditinalStyle = true
        styles["dataStyle"] = dataStyle
        dataStyle.color = playG.dataColor
    }
    if (playG.dataBackgroundColor.length > 0) {
        setConditinalStyle = true
        styles["dataStyle"] = dataStyle
        dataStyle.backgroundColor = playG.dataBackgroundColor
    }
    if (setHeaderStyle) {
        styles["head"] = headStyle
    }
    let resultV = `
    const data=${JSON.stringify({
        styles,
        sheet: [
            {
                ...(setHeaderStyle ? { headerStyleKey: "head" } : {}),
                ...(playG.shiftLeft > 0 ? { shiftLeft: playG.shiftLeft * 1 } : {}),
                ...(playG.shiftTop ? { shiftTop: (playG.shiftTop * 1) + 1 } : {}),
                headers: headers.value,
                data: [headers.value.reduce((res, curr, index) => {
                    return {
                        ...res,
                        [curr.label]: "Test" + (index + 1)
                    }
                }, {})]
            }
        ]
    })};
    ExcelTable.generateExcel(data);
    `

    if (setConditinalStyle) {
        let styleFunc = `styleCellCondition: function (data, fullData, colIndex, rowIndex, fromHeader) {
            if (fromHeader) {
                return null
            } else {
                return "dataStyle"
            }
        },`
        resultV = resultV.replace("sheet\":[{", "sheet\":[{" + styleFunc)
    }
    console.log(resultV)
    formatString(resultV).then(res => {
        result.value = res
    })
})
</script>
<style scoped>
table#play th,
table#play td {
    color: black;
    border: 0.5px solid rgba(108, 108, 108, 0.498);
    padding: 0 20px;
}

.shift-num {
    width: 22.5px;
    height: 24px;
}
</style>