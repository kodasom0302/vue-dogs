<template>
    <div>

        <AppHeader />



        <div id="listContentAll">

            <h1 id="noticeTitle">공지사항</h1>

            <ul id="noticeLocationInformation">
                <li>홈</li>
                <li>공지사항</li>
            </ul>

            <div> <!-- v-bind:key="i" v-for="noticeVo, i in nList"-->

                <div id="topContentGroup">

                    <span id="totalNotice">전체 {{ totalCnt }}건</span>

                    <button id="btnAdd" @click="goToWritePage()">등록</button>
                    <!-- 
                    <span>정렬</span>
                    -->
                    <input id="searchBox" type="text" placeholder="검색" v-model="noticeVo.keyword" v-on:keyup.enter="search">
                    <!-- 검색 버튼 -->
                </div>

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

                    <tbody v-bind:key="i" v-for="noticeVo, i in nList">
                        <tr id="tr">
                            <td id="firstTable" @click="goToReadPage(noticeVo.no)">{{ noticeVo.no }}</td>
                            <td id="secondTable" @click="goToReadPage(noticeVo.no)">{{ noticeVo.title }}</td>
                            <td id="thirdTable" @click="goToReadPage(noticeVo.no)">{{ noticeVo.uName }}</td>
                        </tr>
                    </tbody>
                </table>

                <span id="noticePaging" v-if="prev!=false" v-on:click="prevPage">이전</span>

                <span id="noticePaging" v-bind:key="index" v-for="i, index in endPageBtnNo-startPageBtnNo+1">
                    <a v-on:click.prevent="list(startPageBtnNo+i)" href="">{{ startPageBtnNo+i-1 }}</a>
                </span>

                <span id="noticePaging" v-if="next!=false" v-on:click="nextPage">다음</span>

            </div>

        </div>



        <AppFooter />

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
            nList: [],
            noticeVo:{
                crtPage:1,
                keyword:""
            },
            startPageBtnNo:0,
            endPageBtnNo:0,
            totalCnt:0,
            next:"",
            prev:"",
            keyword:""
        };
    },
    methods: {
        getList(list) {
            console.log("리스트 불러오기");

            if(this.noticeVo.crtPage<=1){
                this.noticeVo.crtPage=1;
            }else{
                this.noticeVo.crtPage=list-1;
            }

            axios({
                method: 'post', // put, post, delete                   
                url: 'http://localhost:9010/api/notice/list2',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.noticeVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타

                this.nList = response.data.nList;

                this.startPageBtnNo=response.data.startPageBtnNo;

                this.endPageBtnNo=response.data.endPageBtnNo;

                this.prev=response.data.prev;

                this.next=response.data.next;

                this.totalCnt=response.data.totalCnt;

            }).catch(error => {
                console.log(error);
            });
        },
        list(page) {
            this.noticeVo.crtPage=page;
            
            this.getList(this.noticeVo.crtPage);
        },
        prevPage() {
            if(this.prev==false){
                console.log(this.noticeVo.crtPage);

                this.getList(this.noticeVo.crtPage);
            }
        },
        nextPage() {
            if(this.next==true) {
                this.noticeVo.crtPage=this.noticeVo.crtPage+6;
                
                this.getList(this.noticeVo.crtPage);
            }
        },
        goToReadPage(no) {
            console.log(no + "번 글의 읽기 페이지로 이동");

            location.href = "/noticeRead/" + no;
        },
        goToWritePage() {
            location.href = "/noticeWrite";
        },
        search() {
            this.noticeVo.crtPage=1;

            this.getList();
        }
    },
    created() {
        this.getList();
    }
};
</script>

<style></style>