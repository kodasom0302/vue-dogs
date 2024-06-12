<template>
    <div>

        <AppHeader />



        <div id="modifyFormContentAll">

            <form action="" method="" v-on:submit.prevent="modifyNotice">

                <input id="noticeModifyTitle" type="text" name="title" placeholder="수정할 제목을 입력해 주세요" v-model="noticeVo.title">

                <div id="notModifyPart">
                    <div class="writerGroup">
                        <span id="keepWriter">작성자</span>
                        <span id="keepRealWriter">고다솜{{ noticeVo.uname }}</span>
                    </div>

                    <div class="dateGroup">
                        <span id="keepDate">작성일</span>
                        <span id="keepRealDate">2024-06-11{{ noticeVo.regDate }}</span>
                    </div>
                </div>

                <textarea id="noticeModifyContent" name="content" placeholder="수정할 내용을 입력해 주세요" v-model="noticeVo.content"></textarea>

                <div id="btnGroup">
                    <button id="cancelBtn" type="button" @click="goToRead">취소</button>
                    <button id="modifyBtn" type="submit">수정</button>
                </div>

            </form>

        </div>



        <AppFooter />

    </div>
</template>


<script>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import '@/assets/css/notice/0NoticeModifyView.css';
import axios from 'axios';

export default {
    name: "NoticeModifyView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {
            noticeVo: {
                no: this.$route.params.no,
                title: "",
                uname: "",
                regDate: "",
                content: ""
            }
        };
    },
    methods: {
        readOneNotice() {
            console.log("공지 하나 불러오기");

            axios({
                method: 'get', // put, post, delete                   
                url: 'http://localhost:9010/api/notice/modify' + this.noticeVo.no,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타

                this.noticeVo = response.data.apiData;

            }).catch(error => {
                console.log(error);
            });
        },
        modifyNotice() {
            console.log("수정하기");

            axios({
                method: 'put', // put, post, delete                   
                url: `${this.$store.state.apiBaseUrl}/api/notice/modify`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.noticeVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타

                if (response.data.result == "success") {
                    console.log("성공");

                    this.$router.push("/noticeRead/" + this.$route.params.no);
                } else {
                    console.log(response.data.message);

                    this.$router.push("/announcements");
                }

            }).catch(error => {
                console.log(error);
            });
        },
        goToRead() {
            location.href = "/noticeRead/" + this.noticeVo.no;
        }
    },
    created() {
        this.readOneNotice();
    }
};
</script>

<style></style>