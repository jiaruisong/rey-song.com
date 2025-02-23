import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile,
    job,
    project,
    post,
    author,
    heroe,
  
    // Reference types
    blockContent,
    youtube,
    table,
    quiz,],
}

import job from "./job";
import profile from "./profile";
import project from "./project";
import post from "./post";
import author from "./author";
import heroe from "./heroe";
import { youtube } from "./youtube";
import { table } from "./table";
import blockContent from "./blockContent";
import quiz from "./quiz";

export const schemaTypes = [
  
];
