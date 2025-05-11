import { create } from 'zustand'

interface UpdateStore {
  isUpdating: boolean
  woodsIsUpdated: boolean
  ourWorkIsUpdated: boolean
  questionsIsUpdated: boolean
  triggerUpdateWoods: () => void
  triggerUpdateOurWork: () => void
  triggerUpdateQuestions: () => void
  setIsUpdating:(value:boolean) => void
}

const useUpdateStore = create<UpdateStore>((set) => ({
  woodsIsUpdated: false,
  ourWorkIsUpdated: false,
  questionsIsUpdated: false,
  isUpdating:false,

  triggerUpdateWoods: () =>
    set((state) => ({ woodsIsUpdated: !state.woodsIsUpdated })),
  setIsUpdating:(value) => set((state) => ({isUpdating: value})),
  triggerUpdateOurWork: () =>
    set((state) => ({ ourWorkIsUpdated: !state.ourWorkIsUpdated })),

  triggerUpdateQuestions: () =>
    set((state) => ({ questionsIsUpdated: !state.questionsIsUpdated })),
}))

export default useUpdateStore
