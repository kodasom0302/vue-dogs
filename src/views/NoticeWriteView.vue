<template>
    <div>

        <AppHeader/>



        <div id="noticeWriteContentAll">

            <form action="" method="" v-on:submit.prevent="writeNotice">

                <table>

                    <thead>
                        <tr>
                            <th id="noticeWriteTitle">제목</th>
                            <th id="noticeWriteContent">내용</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><input id="writeTitle" type="text" placeholder="제목을 입력해 주세요" v-model="noticeVo.title"></td>
                            <td><textarea id="writeContent" placeholder="내용을 입력해 주세요" v-model="noticeVo.content"></textarea></td>
                        </tr>
                    </tbody>

                </table>

                <button id="btnWrite" @click="goToList">취소</button>
                <button id="btnWrite" type="submit">등록</button>

            </form>

        </div>


        
        <AppFooter/>

    </div>
</template>


<script>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import '@/assets/css/notice/NoticeWriteView.css';
import axios from 'axios';

export default {
    name: "NoticeWriteView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {
            noticeVo:{
                title:"",
                content:"",
                uNo:1
            }
        };
    },
    methods: {
        writeNotice(){
            console.log("등록 버튼 클릭");

            console.log("---------"+this.noticeVo.title)
            console.log("---------"+this.noticeVo.content)

            axios({
                method: 'put', // put, post, delete                   
                url: 'http://localhost:9010/api/notice/write',
                headers: { "Content-Type": "application/json; charset=utf-8" 
                , "Authorization": "Bearer "
                }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.noticeVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
/*
                if(response.data.result=="success"){
                    this.$router.push("/announcements");
                }else{
                    alert("로그인이 필요합니다.");

                    this.$router.push("#");
                }
*/
                if(response.data>0){
                    this.$router.push("/announcements");
                }else{
                    console.log("fail")
                }

            }).catch(error => {
                console.log(error);
            });
        },
        goToList(){
            location.href="/announcements";
        }
    },
    created() {}
};
</script>

<style></style>