<template>
    <div>

        <AppHeader/>



        <div>

            <form action="" method="" v-on:submit.prevent="modifyNotice">

                <div id="formGroup">
                    <label for="noticeModifyTitle">제목</label>
                    <input id="noticeModifyTitle" type="text" name="title" placeholder="제목을 입력해 주세요" v-model="noticeVo.title">
                </div>

                <div id="formGroup">
                    <span>작성자</span>
                    <span>{{ noticeVo.uname }}</span>
                </div>

                <div id="formGroup">
                    <span>작성일</span>
                    <span>{{ noticeVo.regDate }}</span>
                </div>

                <div id="formGroup">
                    <label for="noticeModifyContent">내용</label>
                    <textarea id="noticeModifyContent" name="content" placeholder="내용을 입력해 주세요" v-model="noticeVo.content"></textarea>
                </div>

                <button type="button" @click="goToRead">취소</button>

                <button type="submit">수정</button>
                
            </form>

        </div>


        
        <AppFooter/>

    </div>
</template>


<script>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import '@/assets/css/notice/NoticeListView.css';
import axios from 'axios';

export default {
    name: "NoticeModifyView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {
            noticeVo:{
                no:this.$route.params.no,
                title:"",
                uname:"",
                regDate:"",
                content:""
            }
        };
    },
    methods: {
        readOneNotice(){
            console.log("공지 하나 불러오기");

            axios({
                method: 'get', // put, post, delete                   
                url: 'http://localhost:9010/api/notice/read/'+this.noticeVo.no,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타

                this.noticeVo=response.data.apiData;

            }).catch(error => {
                console.log(error);
            });
        },
        modifyNotice(){
            console.log("수정하기");

            axios({
                method: 'put', // put, post, delete                   
                url: 'http://localhost:9010/api/notice/modify',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.noticeVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타

                 if(response.data.result=="success"){
                     console.log("성공");

                     this.$router.push("/noticeRead/"+this.$route.params.no);
                 }else{
                     console.log(response.data.message);

                     this.$router.push("/announcements");
                 }
                
            }).catch(error => {
                console.log(error);
            });
        },
        goToRead(){
            location.href="/noticeRead/"+this.noticeVo.no;
        }
    },
    created() {
        this.readOneNotice();
    }
};
</script>

<style></style>