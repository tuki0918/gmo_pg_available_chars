import React from "react";
import { useForm } from "react-hook-form";

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { convert } from '../util/GMOStringUtils';

export default function Home() {
  const { register, watch, formState: { errors }, handleSubmit } = useForm();
  const inputTxt = watch("txt", '');
  const outputTxt = convert(inputTxt);

  return (
    <div className={styles.container}>
      <Head>
        <title>GMO-PG利用可能文字変換</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          GMO-PG利用可能 <span>文字変換</span>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>変換前</code>
        </p>

        <div className={styles.form}>
          <form>
            <div>
              <textarea {...register("txt", {})} />
            </div>
          </form>
        </div>

        <p className={styles.description}>
          <code className={styles.code}>変換後</code>
        </p>

        <div className={styles.form}>
          <form>
            <div>
              <textarea defaultValue={outputTxt} />
            </div>
          </form>
        </div>

        <p>
          ※ 一部文字は自動的に削除・変換されます。
        </p>
      </main>

      <footer className={styles.footer}>
        via @tuki0918
      </footer>
    </div>
  )
}
