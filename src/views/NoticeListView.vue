<template>
    <div>

        <AppHeader/>



        <div>

            <h1 id="noticeTitle">공지사항</h1>
            
            <ul id="noticeLocationInformation">
                <li>홈</li>
                <li>공지사항</li>
            </ul>

            <span id="totalNotice">전체 2건</span>

            <button id="btnAdd" @click="goToWritePage()">등록</button>
<!-- 
            <span>정렬</span>
            <span>검색</span>
 -->
            <table id="noticeTable">
                <thead>
                    <tr>
                        <th id="firstTable">번호</th>
                        <th id="secondTable">제목</th>
                        <th id="thirdTable">작성자</th>
                        <!--
                        <th>작성일</th>
                        <th>조회수</th>
                        -->
                    </tr>
                </thead>

                <tbody>
                    <tr id="tr" v-bind:key="i" v-for="noticeVo, i in nList">
                        <td id="firstTable" @click="goToReadPage(noticeVo.no)">{{ noticeVo.no }}</td>
                        <td id="secondTable" @click="goToReadPage(noticeVo.no)">{{ noticeVo.title }}</td>
                        <td id="thirdTable" @click="goToReadPage(noticeVo.no)">{{ noticeVo.name }}</td>
                    </tr>
                </tbody>
            </table>

            <p id="noticePaging">- 1 2 3 4 5 -</p>
            
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
    name: "NoticeListView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {
            nList:[],
            noticeVo:{
                no: "",
                title: "",
                name: "",
                regDate: ""
            }
        };
    },
    methods: {
        getList() {
            console.log("리스트 불러오기");

            axios({
                method: 'get', // put, post, delete                   
                url: 'http://localhost:9010/api/notice/list',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                //data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타

                this.nList=response.data;

            }).catch(error => {
                console.log(error);
            });
        },
        goToReadPage(no){
            console.log(no+"번 글의 읽기 페이지로 이동");

            location.href="/notice/read/"+no;
        },
        goToWritePage(){
            location.href="/notice/write";
        }
    },
    created() {
        this.getList();
    }
};
</script>

<style></style>