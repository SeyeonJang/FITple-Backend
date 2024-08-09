import express from "express";
import asyncHandler from 'express-async-handler';
import { searchPreview, clothView, searchView, brandView } from "../domains/search/search.controller.js";

export const searchRouter = express.Router({mergeParams: true});

//검색-메인화면
searchRouter.get('/main', asyncHandler(searchPreview));

//검색-아이템 상세정보
searchRouter.get('/:clothId', asyncHandler(clothView));

//검색-통합 검색
searchRouter.get('', asyncHandler(searchView));

//검색-브랜드
searchRouter.get('/brand/:brandId', asyncHandler(brandView));