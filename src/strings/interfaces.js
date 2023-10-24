export const interfaceData = `
<span id="ExcelTable"></span>export interface ExcelTable extends <a href="#ExcelTableOption">ExcelTableOption</a> {
  sheet: <a href="#Sheet">Sheet[]</a>;
}
========================
<span id="ExcelTableOption"></span>export interface ExcelTableOption {
  notSave?: boolean;
  creator?: string;
  backend?: boolean;
  activateConditinalFormating?: boolean;
  fileName?: string;
  generateType?: "nodebuffer" | "array" | "binarystring" | "base64";
  addDefaultTitleStyle?: boolean;
  created?: string;
  modified?: string;
  numberOfColumn?: number;
  createType?: string;
  mapSheetDataOption?: any;
  styles?: <a href="#Styles">Styles</a>
}
========================
<span id="SheetOption"></span>export interface SheetOption {
  withoutHeader?: boolean;
  conditinalFormating?: <a href="#ConditinalFormating">ConditinalFormating[]</a>;
  multiStyleConditin?: <a href="#MultiStyleConditinFunction">MultiStyleConditinFunction</a>
  useSplitBaseOnMatch?: boolean;
  convertStringToNumber?: boolean;
  images?: <a href="#ImageTypes">ImageTypes[]</a>;
  formula?: <a href="#Formula">Formula</a>;
  name?: string;
  title?: <a href="#Title">Title</a>
  shiftTop?: number;
  shiftLeft?: number;
  selected?: boolean;
  tabColor?: string;
  merges?: string[];
  headerStyleKey?: string;
  mergeRowDataCondition?: <a href="#MergeRowDataConditionFunction">MergeRowDataConditionFunction</a>
  styleCellCondition?: <a href="#StyleCellConditionFunction">StyleCellConditionFunction</a>
  commentCodition?: <a href="#CommentConditionFunction">CommentConditionFunction</a>
  sortAndfilter?: <a href="#SortAndFilter">SortAndFilter</a>
  state?: "hidden" | "visible";
  headerRowOption?: any;
  protectionOption?: <a href="#ProtectionOption">ProtectionOption</a>
  headerHeight?: number;
}
========================
<span id="Sheet"></span>export interface Sheet extends <a href="#SheetOption">SheetOption</a> {
  headers: <a href="#Header">Header[]</a>;
  data: <a href="#Data">Data[]</a>;
}
========================
<span id="Header"></span>export interface Header {
  label: string;
  text: string;
  size?: number;
  multiStyleValue?: <a href="#MultiStyleValue">MultiStyleValue</a>
  comment?: Comment | string;
  conditinalFormating?: <a href="#ConditinalFormating">ConditinalFormating</a>
  formula?: {
    type: <a href="#FormulaType">FormulaType</a>
    styleId?: string;
  };
}
========================
<span id="Data"></span>export interface Data extends <a href="#DataOptions">DataOptions</a> {
  [key: string]: string | number | any | undefined;
}
========================
<span id="DataOptions"></span>export interface DataOptions {
  [key: string]:
    | "0"
    | "1"
    | number
    | string
    | undefined
    | MapComment
    | MapMultiStyleValue;
  outlineLevel?: number;
  hidden?: "0" | "1" | number;
  rowStyle?: string;
  height?: number;
  multiStyleValue?: <a href="#MapMultiStyleValue">MapMultiStyleValue</a>
  comment?: <a href="#MapComment">MapComment</a>
}
<span id="ProtectionOption"></span>========================
<span id="ProtectionOption"></span>export type ProtectionOption = {
  [key in ProtectionOptionKey]: "0" | "1" | 0 | 1;
};
========================
<span id="ConditinalFormating"></span>export interface ConditinalFormating {
  type: "cells" | "dataBar" | "iconSet" | "colorScale" | "top";
  start: string;
  end: string;
  operator?: string;
  value?: number | string;
  priority?: number;
  colors?: string[];
  bottom?: boolean;
  styleId?: string;
  percent?: number;
}
========================
<span id="ImageTypes"></span>export interface ImageTypes {
  url: string;
  from: string;
  to?: string;
  type?: "one" | "two";
  extent?: {
    cx: number;
    cy: number;
  };
  margin?: {
    all?: number;
    right?: number;
    left?: number;
    bottom?: number;
    top?: number;
  };
}
========================
<span id="SideBySide"></span>export interface SideBySide {
  sheetName?: string;
  spaceX?: number;
  spaceY?: number;
  headers: { label: string; text: string }[];
  data: <a href="#Data">Data[]</a>;
  headerIndex?: number;
}
========================
<span id="ProtectionOptionKey"></span>export type ProtectionOptionKey =
  | "sheet"
  | "formatCells"
  | "formatColumns"
  | "formatRows"
  | "insertColumns"
  | "insertRows"
  | "insertHyperlinks"
  | "deleteColumns"
  | "deleteRows"
  | "sort"
  | "autoFilter"
  | "pivotTables";

========================
<span id="AlignmentOptionKey"></span>export type AlignmentOptionKey =
  | "horizontal"
  | "vertical"
  | "wrapText"
  | "shrinkToFit"
  | "readingOrder"
  | "textRotation"
  | "indent";
========================
<span id="AlignmentOption"></span>export interface AlignmentOption {
  horizontal?: "center" | "left" | "right";
  vertical?: "center" | "top" | "bottom";
  wrapText?: "0" | "1" | 2 | 1;
  shrinkToFit?: "0" | "1" | 2 | 1;
  readingOrder?: "1" | "2" | 2 | 1;
  textRotation?: number;
  indent?: number;
  rtl?: boolean;
  ltr?: boolean;
}
========================
<span id="BorderDirection"></span>export type BorderDirection = "full" | "top" | "left" | "right" | "bottom";
========================
<span id="BorderOption"></span>export type BorderOption = {
  [key in BorderDirection]?: {
    color: string;
    style:
      | "slantDashDot"
      | "dotted"
      | "thick"
      | "hair"
      | "dashDot"
      | "dashDotDot"
      | "dashed"
      | "thin"
      | "mediumDashDot"
      | "medium"
      | "double"
      | "mediumDashed";
  };
};
========================
<span id="MultiStyleRexValue"></span>export interface MultiStyleRexValue {
  reg: RegExp | string;
  styleId: string;
}
========================
<span id="Comment"></span>export interface Comment {
  comment?: string;
  styleId?: string;
  author?: string;
}
========================
<span id="MultiStyleValue"></span>export interface MultiStyleValue {
  [key: string]: string | undefined | MultiStyleRexValue[];
  reg?: <a href="#MultiStyleRexValue">MultiStyleRexValue[]</a>;
}
========================
<span id="MapMultiStyleValue"></span>export interface MapMultiStyleValue {
  [key: string]: <a href="#MultiStyleValue">MultiStyleValue</a>
}
========================
<span id="MapComment"></span>export interface MapComment {
  [key: string]: Comment | string;
}
========================
<span id="MergeRowConditionMap"></span>export interface MergeRowConditionMap {
  [columnKey: string]: {
    inProgress: boolean;
    start: number;
  };
}
========================
<span id="MultiStyleConditinFunction"></span>export type MultiStyleConditinFunction = (
  data: Header | string | number | undefined,
  object: null | Data,
  headerKey: string,
  rowIndex: number,
  colIndex: number,
  fromHeader: boolean
) => MultiStyleValue | null;

========================
<span id="CommentConditionFunction"></span>export type CommentConditionFunction = (
  data: Header | string | number | undefined,
  object: null | Data,
  headerKey: string,
  rowIndex: number,
  colIndex: number,
  fromHeader: boolean
) => Comment | string | false | undefined | null;
========================
<span id="StyleCellConditionFunction"></span>export type StyleCellConditionFunction = (
  data: Header | string | number | undefined,
  object: Header | Data,
  colIndex: number,
  rowIndex: number,
  fromHeader: boolean,
  stylekeys: string[]
) => string | null;
========================
<span id="MergeRowDataConditionFunction"></span>export type MergeRowDataConditionFunction = (
  data: Header | string | number | undefined,
  key: string | null,
  index: number,
  fromHeader: boolean
) => boolean;
========================
<span id="SortAndFilter"></span>export interface SortAndFilter {
  mode: "all" | "ref";
  ref?: string;
}
========================
<span id="Title"></span>export interface Title {
  shiftTop?: number;
  shiftLeft?: number;
  consommeRow?: number;
  consommeCol?: number;
  height?: number;
  styleId?: string;
  text?: string;
  multiStyleValue?: <a href="#MultiStyleValue">MultiStyleValue</a>
  comment?: Comment | string;
}
========================
<span id="HeaderRowOption"></span>export interface HeaderRowOption {
  outlineLevel: "string";
}
========================
<span id="StyleMapper"></span>export interface StyleMapper {
  conditinalFormating: {
    count: number;
    value: string;
  };
  commentSintax: {
    value: {
      [key: string]: string;
    };
  };
  format: {
    count: number;
    value: string;
  };
  border: {
    count: number;
    value: string;
  };
  fill: {
    count: number;
    value: string;
  };
  font: {
    count: number;
    value: string;
  };
  cell: {
    count: number;
    value: string;
  };
}
========================
<span id="FormulaType"></span>export type FormulaType = "AVERAGE" | "SUM" | "COUNT" | "MAX" | "MIN";
========================
<span id="StyleBody"></span>export interface StyleBody {
  fontFamily?: string;
  type?: string;
  size?: number;
  index?: number;
  alignment?: <a href="#AlignmentOption">AlignmentOption</a>
  border?: <a href="#BorderOption">BorderOption</a>
  format?: string;
  bold?: boolean;
  underline?: boolean;
  italic?: boolean;
  doubleUnderline?: boolean;
  color?: string;
  backgroundColor?: string;
}
========================
<span id="Styles"></span>export interface Styles {
  [key: string]: <a href="#StyleBody">StyleBody</a>
}
========================
<span id="FormatMap"></span>export interface FormatMap {
  [format: string]: {
    key: number;
    value?: string;
  };
}
========================
<span id="FormulaSetting"></span>export interface FormulaSetting {
  type: <a href="#FormulaType">FormulaType</a>
  start: string;
  end: string;
  styleId?: string;
}
========================
<span id="Formula"></span>export interface Formula {
  [insertCell: string]: <a href="#FormulaSetting">FormulaSetting</a>
}
========================
<span id="Theme"></span>export interface Theme extends <a href="#ExcelTableOption">ExcelTableOption</a> {
  sheet: <a href="#SheetOption">SheetOption[]</a>;
}`
