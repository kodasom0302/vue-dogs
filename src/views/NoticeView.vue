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
                    <tr>
                        <td id="firstTable">2</td>
                        <td id="secondTable">안녕하세요</td>
                        <td id="thirdTable">고다솜</td>
                    </tr>
                    <tr>
                        <td id="firstTable">1</td>
                        <td id="secondTable">공지사항 테스트</td>
                        <td id="thirdTable">관리인</td>
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
import '@/assets/css/notice/NoticeView.css';

export default {
    name: "NoticeView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style></style>