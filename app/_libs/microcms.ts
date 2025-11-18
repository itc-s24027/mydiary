import { createClient } from "microcms-js-sdk";

import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

// 日記データの型定義
export type Diary = {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: MicroCMSImage[];
};

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("Missing MICROCMS_SERVICE_DOMAIN is requireed");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("Missing MICROCMS_API_KEY is requireed");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// 日記の一覧を取得する
export const getDiaryesList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Diary>({
    endpoint: "diary",
    queries: queries, //queriesを渡すとフィルタリングできる
  });
  return listData;
};


// 日記の詳細を取得する
export const getDiaryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Diary>({
    endpoint: "diary",
    contentId,
    queries,
  });
  return detailData;
};