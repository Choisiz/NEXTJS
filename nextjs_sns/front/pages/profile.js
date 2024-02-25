import Head from "next/head";
import AppLayout from "../component/AppLayout";
import FollowingList from "../component/FollowingList";
import FollowList from "../component/FollowList";
import NickNameEditForm from "../component/NickNameEditForm";

const Profile = () => {
  //더미데이터
  const followingList = [
    { nickname: "choisiz" },
    { nickname: "messi" },
    { nickname: "faker" },
  ];
  const followList = [
    { nickname: "choisiz" },
    { nickname: "messi" },
    { nickname: "faker" },
  ];
  return (
    <>
      <Head>
        <title>프로필 | Next SNS</title>
      </Head>
      <AppLayout>
        <NickNameEditForm />
        <FollowingList header="팔로잉목록" data={followingList} />
        <FollowList header="팔로워목록" data={followList} />
      </AppLayout>
    </>
  );
};

export default Profile;
