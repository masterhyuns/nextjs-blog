import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Profile</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <img src="/images/pppp.png" alt="pppp" />

      <Image
        src="/images/pppp.png" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />

    </>
  )
}

export default Profile
