import { computed } from 'vue'
import oui from '../oui'

import {
  NAffix,
  NAlert,
  NAnchor,
  NAnchorLink,
  NAutoComplete,
  NAvatar,
  NAvatarGroup,
  NBackTop,
  NBadge,
  NBreadcrumb,
  NBreadcrumbItem,
  NButton,
  NxButton,
  NButtonGroup,
  NCard,
  NCascader,
  NCheckbox,
  NCheckboxGroup,
  NCollapse,
  NCollapseItem,
  NCollapseTransition,
  NConfigProvider,
  NDataTable,
  NDatePicker,
  NDescriptions,
  NDescriptionsItem,
  NDialog,
  NDivider,
  NDrawer,
  NDrawerContent,
  NDropdown,
  NDynamicTags,
  NElement,
  NEl,
  NEllipsis,
  NForm,
  NFormItem,
  NFormItemGridItem,
  NFormItemGi,
  NFormItemCol,
  NFormItemRow,
  NGlobalStyle,
  NGrid,
  NGridItem,
  NGi,
  NH1,
  NH2,
  NH3,
  NH4,
  NH5,
  NH6,
  NA,
  NP,
  NBlockquote,
  NHr,
  NUl,
  NOl,
  NLi,
  NText,
  NIcon,
  NIconWrapper,
  NInput,
  NInputGroup,
  NInputGroupLabel,
  NInputNumber,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NLayoutFooter,
  NLayoutSider,
  NList,
  NListItem,
  NMenu,
  NModal,
  NPagination,
  NPopconfirm,
  NPopover,
  NPopselect,
  NProgress,
  NRadio,
  NRadioGroup,
  NRadioButton,
  NScrollbar,
  NSelect,
  NSlider,
  NSpace,
  NSpin,
  NStatistic,
  NSteps,
  NStep,
  NSwitch,
  NTable,
  NTh,
  NTr,
  NTd,
  NThead,
  NTbody,
  NTabs,
  NTabPane,
  NTab,
  NTag,
  NTime,
  NTimePicker,
  NTooltip,
  NUpload,
  NUploadDragger,
  NUploadTrigger,
  NUploadFileList,
  create,
  darkTheme,
  createDiscreteApi
} from 'naive-ui'

const naive = create({
  components: [
    NAffix,
    NAlert,
    NAnchor,
    NAnchorLink,
    NAutoComplete,
    NAvatar,
    NAvatarGroup,
    NBackTop,
    NBadge,
    NBreadcrumb,
    NBreadcrumbItem,
    NButton,
    NxButton,
    NButtonGroup,
    NCard,
    NCascader,
    NCheckbox,
    NCheckboxGroup,
    NCollapse,
    NCollapseItem,
    NCollapseTransition,
    NConfigProvider,
    NDataTable,
    NDatePicker,
    NDescriptions,
    NDescriptionsItem,
    NDialog,
    NDivider,
    NDrawer,
    NDrawerContent,
    NDropdown,
    NDynamicTags,
    NElement,
    NEl,
    NEllipsis,
    NForm,
    NFormItem,
    NFormItemGridItem,
    NFormItemGi,
    NFormItemCol,
    NFormItemRow,
    NGlobalStyle,
    NGrid,
    NGridItem,
    NGi,
    NH1,
    NH2,
    NH3,
    NH4,
    NH5,
    NH6,
    NA,
    NP,
    NBlockquote,
    NHr,
    NUl,
    NOl,
    NLi,
    NText,
    NIcon,
    NIconWrapper,
    NInput,
    NInputGroup,
    NInputGroupLabel,
    NInputNumber,
    NLayout,
    NLayoutContent,
    NLayoutHeader,
    NLayoutFooter,
    NLayoutSider,
    NList,
    NListItem,
    NMenu,
    NModal,
    NPagination,
    NPopconfirm,
    NPopover,
    NPopselect,
    NProgress,
    NRadio,
    NRadioGroup,
    NRadioButton,
    NScrollbar,
    NSelect,
    NSlider,
    NSpace,
    NSpin,
    NStatistic,
    NSteps,
    NStep,
    NSwitch,
    NTable,
    NTh,
    NTr,
    NTd,
    NThead,
    NTbody,
    NTabs,
    NTabPane,
    NTab,
    NTag,
    NTime,
    NTimePicker,
    NTooltip,
    NUpload,
    NUploadDragger,
    NUploadTrigger,
    NUploadFileList
  ]
})

const { message, notification, dialog, loadingBar } = createDiscreteApi(
  ['message', 'dialog', 'notification', 'loadingBar'],
  {
    configProviderProps: computed(() => ({
      theme: oui.state.theme === 'light' ? undefined : darkTheme
    }))
  }
)

export default {
  install(app) {
    app.config.globalProperties.$message = message
    app.config.globalProperties.$notification = notification
    app.config.globalProperties.$dialog = dialog
    app.config.globalProperties.$loadingBar = loadingBar
    app.use(naive)
  }
}