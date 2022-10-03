import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface Header {
  header1: string
  header2: string
}

interface Description {
  description1: string
  description2: string
  description3: string
}

interface Input {
  input1: string
  input2: string
  input3: string
  input4?: string
  input5?: string
  input6?: string
}

interface Button {
  button1: string
  button2: string
}

export  interface ModalState {
  modal: number
  size: string
  position: number
  color: string
  textColor: string
  areaSize: number[]
  area: {
    header: string
    description: Description
    input: Input
    button: Button
  }
  isLogoExist: boolean
  logoUrl: string
  isImageExist: boolean
  imageUrl: string
  isOpenVisitorDevice: boolean
  desktop: boolean
  mobile: boolean
  isOpenXSeconds: boolean
  afterXSeconds: number 
  isOpenXScroll: boolean
  afterXScroll: number 
  isOpenTrafficSource: boolean
  trafficSource: string
  isOpenBrowserLanguage: boolean
  selectedLanguages: string[]
  isOpenExitIntent: boolean
  webhookUrl: string
  isSendFromSubmission: boolean
  isSendClickData: boolean
  baseUrl: string
}

// Define the initial state using that type
const initialState: ModalState = {
  modal: 0,
  size: 'Small',
  position: 22,
  color: '#F37C34',
  textColor: '#FFFFFF',
  areaSize: [2, 2, 1],
  area: {
    header: 'Sign Up',
    description: {
      description1: 'Join new adventure',
      description2: 'By signing up, you agree to  Privacy Policy',
      description3: '',
    },
    input: {
      input1: 'Enter full name',
      input2: 'Enter your email',
      input3: '',
    },
    button: {
      button1: 'Sign up',
      button2: '',
    },
  },
  isLogoExist: false,
  logoUrl: '',
  isImageExist: true,
  imageUrl : '',
  isOpenVisitorDevice: false,
  desktop: false,
  mobile: false,
  isOpenXSeconds: false,
  afterXSeconds: -1,
  isOpenXScroll: false,
  afterXScroll: -1,
  isOpenTrafficSource: false,
  trafficSource: '',
  isOpenBrowserLanguage: false,
  selectedLanguages: [],
  isOpenExitIntent: false,
  webhookUrl: '',
  isSendFromSubmission: false,
  isSendClickData: false,
  baseUrl : process.env.BASE_URL!
}

export const modalSlice = createSlice({
  name: 'modal',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<number>) => {
      state.modal = action.payload
    },
    setSize: (state, action: PayloadAction<string>) => {
      state.size = action.payload
    },
    setPosition: (state, action: PayloadAction<number>) => {
      state.position = action.payload
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload
      if (
        state.color === '#000000' ||
        state.color === '#F37C34' ||
        state.color === '#777777'
      ) {
        state.textColor = '#FFFFFF'
      } else {
        state.textColor = '#000000'
      }
    },
    setAreaSize: (state, action: PayloadAction<number[]>) => {
      state.areaSize = action.payload
    },
    setArea: (
      state,
      action: PayloadAction<{
        header: string
        description: Description
        input: Input
        button: Button
      }>
    ) => {
      state.area = action.payload
    },
    setHeader: (state, action: PayloadAction<string>) => {
      state.area.header = action.payload
    },
    setInput1: (state, action: PayloadAction<string>) => {
      state.area.input.input1 = action.payload
    },
    setInput2: (state, action: PayloadAction<string>) => {
      state.area.input.input2 = action.payload
    },
    setInput3: (state, action: PayloadAction<string>) => {
      state.area.input.input3 = action.payload
    },
    setDescription1: (state, action: PayloadAction<string>) => {
      state.area.description.description1 = action.payload
    },
    setDescription2: (state, action: PayloadAction<string>) => {
      state.area.description.description2 = action.payload
    },
    setDescription3: (state, action: PayloadAction<string>) => {
      state.area.description.description3 = action.payload
    },
    setButton1: (state, action: PayloadAction<string>) => {
      state.area.button.button1 = action.payload
    },
    setButton2: (state, action: PayloadAction<string>) => {
      state.area.button.button2 = action.payload
    },
    setIsLogoExist: (state, action: PayloadAction<boolean>) => {
      state.isLogoExist = action.payload
    },
    setIsImageExist: (state, action: PayloadAction<boolean>) => {
      state.isImageExist = action.payload
    },
    setIsOpenVisitorDevice: (state, action: PayloadAction<boolean>) => {
      state.isOpenVisitorDevice = action.payload
    },
    setDesktop: (state, action: PayloadAction<boolean>) => {
      state.desktop = action.payload
    },
    setMobile: (state, action: PayloadAction<boolean>) => {
      state.mobile = action.payload
    },
    setIsOpenXSeconds: (state, action: PayloadAction<boolean>) => {
      state.isOpenXSeconds = action.payload
    },
    setAfterXSeconds: (state, action: PayloadAction<number>) => {
      state.afterXSeconds = action.payload
    },
    setIsOpenXScroll: (state, action: PayloadAction<boolean>) => {
      state.isOpenXScroll = action.payload
    },
    setAfterXScroll: (state, action: PayloadAction<number>) => {
      state.afterXScroll = action.payload
    },
    setIsOpenTrafficSource: (state, action: PayloadAction<boolean>) => {
      state.isOpenTrafficSource = action.payload
    },
    setTrafficSource: (state, action: PayloadAction<string>) => {
      state.trafficSource = action.payload
    },
    setIsOpenBrowserLanguage: (state, action: PayloadAction<boolean>) => {
      state.isOpenBrowserLanguage = action.payload
    },
    setSelectedLanguages: (state, action: PayloadAction<string[]>) => {
      state.selectedLanguages = action.payload
    },
    setIsOpenExitIntent: (state, action: PayloadAction<boolean>) => {
      state.isOpenExitIntent = action.payload
    },
    setWebhookUrl: (state, action: PayloadAction<string>) => {
      state.webhookUrl = action.payload
    },
    setIsSendFromSubmission: (state, action: PayloadAction<boolean>) => {
      state.isSendFromSubmission = action.payload
    },
    setIsSendClickData: (state, action: PayloadAction<boolean>) => {
      state.isSendClickData = action.payload
    },
    setImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload
    },
    setLogoUrl: (state, action: PayloadAction<string>) => {
      state.logoUrl = action.payload
    },
  },
})

export const {
  setSize,
  setPosition,
  setColor,
  setModal,
  setHeader,
  setArea,
  setAreaSize,
  setDescription1,
  setDescription2,
  setDescription3,
  setInput1,
  setInput2,
  setInput3,
  setButton1,
  setButton2,
  setIsLogoExist,
  setIsImageExist,
  setIsOpenVisitorDevice,
  setDesktop,
  setMobile,
  setIsOpenXSeconds,
  setAfterXSeconds,
  setIsOpenXScroll,
  setAfterXScroll,
  setIsOpenTrafficSource,
  setTrafficSource,
  setIsOpenBrowserLanguage,
  setSelectedLanguages,
  setIsOpenExitIntent,
  setWebhookUrl,
  setIsSendFromSubmission,
  setIsSendClickData,
  setImageUrl,
  setLogoUrl
} = modalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAllModal = (state: RootState) => state.modal
export const selectModal = (state: RootState) => state.modal.modal
export const selectSize = (state: RootState) => state.modal.size
export const selectPosition = (state: RootState) => state.modal.position
export const selectColor = (state: RootState) => state.modal.color
export const selectHeader = (state: RootState) => state.modal.area.header
export const selectDescription = (state: RootState) => state.modal.area.description
export const selectInput = (state: RootState) => state.modal.area.input
export const selectButton = (state: RootState) => state.modal.area.button
export const selectIsLogoExist = (state: RootState) => state.modal.isLogoExist
export const selectIsImageExist = (state: RootState) => state.modal.isImageExist
export const selectIsOpenVisitorDevice = (state: RootState) =>
  state.modal.isOpenVisitorDevice
export const selectDesktop = (state: RootState) => state.modal.desktop
export const selectMobile = (state: RootState) => state.modal.mobile
export const selectIsOpenXSeconds = (state: RootState) => state.modal.isOpenXSeconds
export const selectAfterXSeconds = (state: RootState) => state.modal.afterXSeconds
export const selectIsOpenXScroll = (state: RootState) => state.modal.isOpenXScroll
export const selectAfterXScroll = (state: RootState) => state.modal.afterXScroll
export const selectIsOpenTrafficSource = (state: RootState) =>
  state.modal.isOpenTrafficSource
export const selectTrafficSource = (state: RootState) => state.modal.trafficSource
export const selectIsOpenBrowserLanguage = (state: RootState) =>
  state.modal.isOpenBrowserLanguage
export const selectSelectedLanguages = (state: RootState) =>
  state.modal.selectedLanguages
export const selectIsOpenExitIntent = (state: RootState) =>
  state.modal.isOpenExitIntent
export const selectWebhookUrl = (state: RootState) => state.modal.webhookUrl
export const selectIsSendFromSubmission = (state: RootState) =>
  state.modal.isSendFromSubmission
export const selectIsSendClickData = (state: RootState) =>
  state.modal.isSendClickData
export const selectImageUrl = (state: RootState) =>
state.modal.imageUrl
export const selectLogoUrl = (state: RootState) =>
state.modal.logoUrl

export default modalSlice.reducer
