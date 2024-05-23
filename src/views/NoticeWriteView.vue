<template>
    <div>

        <AppHeader/>



        <div id="noticeWriteContentAll">

            <form action="" method="">

                <table>

                    <thead>
                        <tr>
                            <th id="noticeWriteTitle">제목</th>
                            <th id="noticeWriteContent">내용</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><input id="writeTitle" type="text" placeholder="제목을 입력해 주세요" v-model="title"></td>
                            <td><textarea id="writeContent" placeholder="내용을 입력해 주세요" v-model="content"></textarea></td>
                        </tr>
                    </tbody>

                </table>

                <button type="submit">등록</button>

            </form>

        </div>


        
        <AppFooter/>

    </div>
</template>


<script>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import '@/assets/css/notice/NoticeWriteView.css';

export default {
    name: "NoticeWriteView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {};
    },
    methods: {},
    created() {}
};
</script>

<style></style>