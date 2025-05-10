import { create } from 'zustand'

interface UpdateStore {
  woodsIsUpdated: boolean
  ourWorkIsUpdated: boolean
  questionsIsUpdated: boolean
  triggerUpdateWoods: () => void
  triggerUpdateOurWork: () => void
  triggerUpdateQuestions: () => void
}

const useUpdateStore = create<UpdateStore>((set) => ({
  woodsIsUpdated: false,
  ourWorkIsUpdated: false,
  questionsIsUpdated: false,

  triggerUpdateWoods: () =>
    set((state) => ({ woodsIsUpdated: !state.woodsIsUpdated })),

  triggerUpdateOurWork: () =>
    set((state) => ({ ourWorkIsUpdated: !state.ourWorkIsUpdated })),

  triggerUpdateQuestions: () =>
    set((state) => ({ questionsIsUpdated: !state.questionsIsUpdated })),
}))

export default useUpdateStore
