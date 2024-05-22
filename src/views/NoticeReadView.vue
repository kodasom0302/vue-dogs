<template>
    <div>

        <AppHeader/>



        <div>
            
            <h1>읽기 페이지</h1>

            <div>
                <p id="noticeReadTitle">제목</p>
                
                <span id="noticeWriter">작성자</span>
                <span id="noticeReadWriter">고다솜</span>

                <span id="noticeRegDate">작성일</span>
                <span id="noticeReadRegDate">2024-05-22</span>

                <span id="noticeHit">조회</span>
                <span id="noticeReadHit">506회</span>

                <!-- <span>댓글</span> -->
                <!-- <span>건</span> -->
            </div>

            <p>내용</p>

            <button onclick="location.href='/'">목록</button>
        
        </div>


        
        <AppFooter/>

    </div>
</template>


<script>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import '@/assets/css/notice/NoticeReadView.css';
//import axios from 'axios';

export default {
    name: "NoticeReadView",
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