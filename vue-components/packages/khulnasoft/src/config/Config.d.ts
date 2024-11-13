import type { DefaultPassThrough, PassThrough } from '@khulnasoft/core';
import type { PrimeVueCSPOptions, PrimeVueLocaleOptions, PrimeVueZIndexOptions } from '@khulnasoft/core/config';
import type { AccordionPassThroughOptions } from 'khulnasoft/accordion';
import type { AccordionContentPassThroughOptions } from 'khulnasoft/accordioncontent';
import type { AccordionHeaderPassThroughOptions } from 'khulnasoft/accordionheader';
import type { AccordionPanelPassThroughOptions } from 'khulnasoft/accordionpanel';
import type { AccordionTabPassThroughOptions } from 'khulnasoft/accordiontab';
import type { AnimateOnScrollDirectivePassThroughOptions } from 'khulnasoft/animateonscroll';
import type { AutoCompletePassThroughOptions } from 'khulnasoft/autocomplete';
import type { AvatarPassThroughOptions } from 'khulnasoft/avatar';
import type { AvatarGroupPassThroughOptions } from 'khulnasoft/avatargroup';
import type { BadgePassThroughOptions } from 'khulnasoft/badge';
import type { BadgeDirectivePassThroughOptions } from 'khulnasoft/badgedirective';
import type { BlockUIPassThroughOptions } from 'khulnasoft/blockui';
import type { BreadcrumbPassThroughOptions } from 'khulnasoft/breadcrumb';
import type { ButtonPassThroughOptions } from 'khulnasoft/button';
import type { ButtonGroupPassThroughOptions } from 'khulnasoft/buttongroup';
import type { CalendarPassThroughOptions } from 'khulnasoft/calendar';
import type { CardPassThroughOptions } from 'khulnasoft/card';
import type { CarouselPassThroughOptions } from 'khulnasoft/carousel';
import type { CascadeSelectPassThroughOptions } from 'khulnasoft/cascadeselect';
import type { ChartPassThroughOptions } from 'khulnasoft/chart';
import type { CheckboxPassThroughOptions } from 'khulnasoft/checkbox';
import type { CheckboxGroupPassThroughOptions } from 'khulnasoft/checkboxgroup';
import type { ChipPassThroughOptions } from 'khulnasoft/chip';
import type { ChipsPassThroughOptions } from 'khulnasoft/chips';
import type { ColorPickerPassThroughOptions } from 'khulnasoft/colorpicker';
import type { ColumnPassThroughOptions } from 'khulnasoft/column';
import type { ColumnGroupPassThroughOptions } from 'khulnasoft/columngroup';
import type { ConfirmDialogPassThroughOptions } from 'khulnasoft/confirmdialog';
import type { ConfirmPopupPassThroughOptions } from 'khulnasoft/confirmpopup';
import type { ContextMenuPassThroughOptions } from 'khulnasoft/contextmenu';
import type { DataTablePassThroughOptions } from 'khulnasoft/datatable';
import type { DataViewPassThroughOptions } from 'khulnasoft/dataview';
import type { DatePickerPassThroughOptions } from 'khulnasoft/datepicker';
import type { DeferredContentPassThroughOptions } from 'khulnasoft/deferredcontent';
import type { DialogPassThroughOptions } from 'khulnasoft/dialog';
import type { DividerPassThroughOptions } from 'khulnasoft/divider';
import type { DockPassThroughOptions } from 'khulnasoft/dock';
import type { DrawerPassThroughOptions } from 'khulnasoft/drawer';
import type { DropdownPassThroughOptions } from 'khulnasoft/dropdown';
import type { EditorPassThroughOptions } from 'khulnasoft/editor';
import type { FieldsetPassThroughOptions } from 'khulnasoft/fieldset';
import type { FileUploadPassThroughOptions } from 'khulnasoft/fileupload';
import type { FloatLabelPassThroughOptions } from 'khulnasoft/floatlabel';
import type { FluidPassThroughOptions } from 'khulnasoft/fluid';
import type { FocusTrapDirectivePassThroughOptions } from 'khulnasoft/focustrap';
import type { GalleriaPassThroughOptions } from 'khulnasoft/galleria';
import type { IconFieldPassThroughOptions } from 'khulnasoft/iconfield';
import type { IftaLabelPassThroughOptions } from 'khulnasoft/iftalabel';
import type { ImagePassThroughOptions } from 'khulnasoft/image';
import type { ImageComparePassThroughOptions } from 'khulnasoft/imagecompare';
import type { InlineMessagePassThroughOptions } from 'khulnasoft/inlinemessage';
import type { InplacePassThroughOptions } from 'khulnasoft/inplace';
import type { InputChipsPassThroughOptions } from 'khulnasoft/inputchips';
import type { InputGroupPassThroughOptions } from 'khulnasoft/inputgroup';
import type { InputGroupAddonPassThroughOptions } from 'khulnasoft/inputgroupaddon';
import type { InputIconPassThroughOptions } from 'khulnasoft/inputicon';
import type { InputMaskPassThroughOptions } from 'khulnasoft/inputmask';
import type { InputNumberPassThroughOptions } from 'khulnasoft/inputnumber';
import type { InputOtpPassThroughOptions } from 'khulnasoft/inputotp';
import type { InputSwitchPassThroughOptions } from 'khulnasoft/inputswitch';
import type { InputTextPassThroughOptions } from 'khulnasoft/inputtext';
import type { KeyFilterDirectivePassThroughOptions } from 'khulnasoft/keyfilter';
import type { KnobPassThroughOptions } from 'khulnasoft/knob';
import type { ListboxPassThroughOptions } from 'khulnasoft/listbox';
import type { MegaMenuPassThroughOptions } from 'khulnasoft/megamenu';
import type { MenuPassThroughOptions } from 'khulnasoft/menu';
import type { MenubarPassThroughOptions } from 'khulnasoft/menubar';
import type { MessagePassThroughOptions } from 'khulnasoft/message';
import type { MeterGroupPassThroughOptions } from 'khulnasoft/metergroup';
import type { MultiSelectPassThroughOptions } from 'khulnasoft/multiselect';
import type { OrderListPassThroughOptions } from 'khulnasoft/orderlist';
import type { OrganizationChartPassThroughOptions } from 'khulnasoft/organizationchart';
import type { OverlayBadgePassThroughOptions } from 'khulnasoft/overlaybadge';
import type { OverlayPanelPassThroughOptions } from 'khulnasoft/overlaypanel';
import type { PaginatorPassThroughOptions } from 'khulnasoft/paginator';
import type { PanelPassThroughOptions } from 'khulnasoft/panel';
import type { PanelMenuPassThroughOptions } from 'khulnasoft/panelmenu';
import type { PassThroughOptions } from 'khulnasoft/passthrough';
import type { PasswordPassThroughOptions } from 'khulnasoft/password';
import type { PickListPassThroughOptions } from 'khulnasoft/picklist';
import type { PopoverPassThroughOptions } from 'khulnasoft/popover';
import type { ProgressBarPassThroughOptions } from 'khulnasoft/progressbar';
import type { ProgressSpinnerPassThroughOptions } from 'khulnasoft/progressspinner';
import type { RadioButtonPassThroughOptions } from 'khulnasoft/radiobutton';
import type { RadioButtonGroupPassThroughOptions } from 'khulnasoft/radiobuttongroup';
import type { RatingPassThroughOptions } from 'khulnasoft/rating';
import type { RippleDirectivePassThroughOptions } from 'khulnasoft/ripple';
import type { RowPassThroughOptions } from 'khulnasoft/row';
import type { ScrollPanelPassThroughOptions } from 'khulnasoft/scrollpanel';
import type { ScrollTopPassThroughOptions } from 'khulnasoft/scrolltop';
import type { SelectPassThroughOptions } from 'khulnasoft/select';
import type { SelectButtonPassThroughOptions } from 'khulnasoft/selectbutton';
import type { SidebarPassThroughOptions } from 'khulnasoft/sidebar';
import type { SkeletonPassThroughOptions } from 'khulnasoft/skeleton';
import type { SliderPassThroughOptions } from 'khulnasoft/slider';
import type { SpeedDialPassThroughOptions } from 'khulnasoft/speeddial';
import type { SplitButtonPassThroughOptions } from 'khulnasoft/splitbutton';
import type { SplitterPassThroughOptions } from 'khulnasoft/splitter';
import type { SplitterPanelPassThroughOptions } from 'khulnasoft/splitterpanel';
import type { StepPassThroughOptions } from 'khulnasoft/step';
import type { StepItemPassThroughOptions } from 'khulnasoft/stepitem';
import type { StepListPassThroughOptions } from 'khulnasoft/steplist';
import type { StepPanelPassThroughOptions } from 'khulnasoft/steppanel';
import type { StepPanelsPassThroughOptions } from 'khulnasoft/steppanels';
import type { StepperPassThroughOptions } from 'khulnasoft/stepper';
import type { StepsPassThroughOptions } from 'khulnasoft/steps';
import type { StyleClassDirectivePassThroughOptions } from 'khulnasoft/styleclass';
import type { TabPassThroughOptions } from 'khulnasoft/tab';
import type { TabListPassThroughOptions } from 'khulnasoft/tablist';
import type { TabMenuPassThroughOptions } from 'khulnasoft/tabmenu';
import type { TabPanelPassThroughOptions } from 'khulnasoft/tabpanel';
import type { TabPanelsPassThroughOptions } from 'khulnasoft/tabpanels';
import type { TabsPassThroughOptions } from 'khulnasoft/tabs';
import type { TabViewPassThroughOptions } from 'khulnasoft/tabview';
import type { TagPassThroughOptions } from 'khulnasoft/tag';
import type { TerminalPassThroughOptions } from 'khulnasoft/terminal';
import type { TextareaPassThroughOptions } from 'khulnasoft/textarea';
import type { TieredMenuPassThroughOptions } from 'khulnasoft/tieredmenu';
import type { TimelinePassThroughOptions } from 'khulnasoft/timeline';
import type { ToastPassThroughOptions } from 'khulnasoft/toast';
import type { ToggleButtonPassThroughOptions } from 'khulnasoft/togglebutton';
import type { ToggleSwitchPassThroughOptions } from 'khulnasoft/toggleswitch';
import type { ToolbarPassThroughOptions } from 'khulnasoft/toolbar';
import type { TooltipDirectivePassThroughOptions } from 'khulnasoft/tooltip';
import type { TreePassThroughOptions } from 'khulnasoft/tree';
import type { TreeSelectPassThroughOptions } from 'khulnasoft/treeselect';
import type { TreeTablePassThroughOptions } from 'khulnasoft/treetable';
import type { VirtualScrollerPassThroughOptions } from 'khulnasoft/virtualscroller';

export * from '@khulnasoft/core/config';
export { default } from '@khulnasoft/core/config';

export interface PrimeVueConfiguration {
    ripple?: boolean;
    /**
     * @deprecated since v4.0. Use 'inputVariant' instead.
     */
    inputStyle?: 'filled' | 'outlined' | undefined;
    inputVariant?: 'filled' | 'outlined' | undefined;
    locale?: PrimeVueLocaleOptions;
    filterMatchModeOptions?: any;
    zIndex?: PrimeVueZIndexOptions;
    theme?: any;
    unstyled?: boolean;
    pt?: PassThrough<PrimeVuePTOptions>;
    ptOptions?: PassThroughOptions;
    csp?: PrimeVueCSPOptions;
}

export interface PrimeVuePTOptions {
    accordion?: DefaultPassThrough<AccordionPassThroughOptions>;
    accordionpanel?: DefaultPassThrough<AccordionPanelPassThroughOptions>;
    accordionheader?: DefaultPassThrough<AccordionHeaderPassThroughOptions>;
    accordioncontent?: DefaultPassThrough<AccordionContentPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Accordion instead.
     */
    accordiontab?: DefaultPassThrough<AccordionTabPassThroughOptions>;
    autocomplete?: DefaultPassThrough<AutoCompletePassThroughOptions>;
    avatar?: DefaultPassThrough<AvatarPassThroughOptions>;
    avatargroup?: DefaultPassThrough<AvatarGroupPassThroughOptions>;
    badge?: DefaultPassThrough<BadgePassThroughOptions>;
    blockui?: DefaultPassThrough<BlockUIPassThroughOptions>;
    breadcrumb?: DefaultPassThrough<BreadcrumbPassThroughOptions>;
    button?: DefaultPassThrough<ButtonPassThroughOptions>;
    buttongroup?: DefaultPassThrough<ButtonGroupPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of DatePicker instead.
     */
    calendar?: DefaultPassThrough<CalendarPassThroughOptions>;
    card?: DefaultPassThrough<CardPassThroughOptions>;
    carousel?: DefaultPassThrough<CarouselPassThroughOptions>;
    cascadeselect?: DefaultPassThrough<CascadeSelectPassThroughOptions>;
    chart?: DefaultPassThrough<ChartPassThroughOptions>;
    checkbox?: DefaultPassThrough<CheckboxPassThroughOptions>;
    checkboxgroup?: DefaultPassThrough<CheckboxGroupPassThroughOptions>;
    chip?: DefaultPassThrough<ChipPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of InputChips instead.
     */
    chips?: DefaultPassThrough<ChipsPassThroughOptions>;
    colorpicker?: DefaultPassThrough<ColorPickerPassThroughOptions>;
    column?: DefaultPassThrough<ColumnPassThroughOptions>;
    columngroup?: DefaultPassThrough<ColumnGroupPassThroughOptions>;
    confirmdialog?: DefaultPassThrough<ConfirmDialogPassThroughOptions>;
    confirmpopup?: DefaultPassThrough<ConfirmPopupPassThroughOptions>;
    contextmenu?: DefaultPassThrough<ContextMenuPassThroughOptions>;
    datatable?: DefaultPassThrough<DataTablePassThroughOptions>;
    dataview?: DefaultPassThrough<DataViewPassThroughOptions>;
    datepicker?: DefaultPassThrough<DatePickerPassThroughOptions>;
    deferredcontent?: DefaultPassThrough<DeferredContentPassThroughOptions>;
    divider?: DefaultPassThrough<DividerPassThroughOptions>;
    dialog?: DefaultPassThrough<DialogPassThroughOptions>;
    dock?: DefaultPassThrough<DockPassThroughOptions>;
    drawer?: DefaultPassThrough<DrawerPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Select instead.
     */
    dropdown?: DefaultPassThrough<DropdownPassThroughOptions>;
    dynamicdialog?: DefaultPassThrough<DialogPassThroughOptions>;
    editor?: DefaultPassThrough<EditorPassThroughOptions>;
    fieldset?: DefaultPassThrough<FieldsetPassThroughOptions>;
    fileupload?: DefaultPassThrough<FileUploadPassThroughOptions>;
    floatlabel?: DefaultPassThrough<FloatLabelPassThroughOptions>;
    fluid?: DefaultPassThrough<FluidPassThroughOptions>;
    galleria?: DefaultPassThrough<GalleriaPassThroughOptions>;
    iconfield?: DefaultPassThrough<IconFieldPassThroughOptions>;
    iftalabel?: DefaultPassThrough<IftaLabelPassThroughOptions>;
    image?: DefaultPassThrough<ImagePassThroughOptions>;
    imagecompare?: DefaultPassThrough<ImageComparePassThroughOptions>;
    inlinemessage?: DefaultPassThrough<InlineMessagePassThroughOptions>;
    inplace?: DefaultPassThrough<InplacePassThroughOptions>;
    inputchips?: DefaultPassThrough<InputChipsPassThroughOptions>;
    inputgroup?: DefaultPassThrough<InputGroupPassThroughOptions>;
    inputgroupaddon?: DefaultPassThrough<InputGroupAddonPassThroughOptions>;
    inputicon?: DefaultPassThrough<InputIconPassThroughOptions>;
    inputmask?: DefaultPassThrough<InputMaskPassThroughOptions>;
    inputnumber?: DefaultPassThrough<InputNumberPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of ToggleSwitch instead.
     */
    inputotp?: DefaultPassThrough<InputOtpPassThroughOptions>;
    inputswitch?: DefaultPassThrough<InputSwitchPassThroughOptions>;
    inputtext?: DefaultPassThrough<InputTextPassThroughOptions>;
    knob?: DefaultPassThrough<KnobPassThroughOptions>;
    listbox?: DefaultPassThrough<ListboxPassThroughOptions>;
    megamenu?: DefaultPassThrough<MegaMenuPassThroughOptions>;
    menu?: DefaultPassThrough<MenuPassThroughOptions>;
    menubar?: DefaultPassThrough<MenubarPassThroughOptions>;
    message?: DefaultPassThrough<MessagePassThroughOptions>;
    metergroup?: DefaultPassThrough<MeterGroupPassThroughOptions>;
    multiselect?: DefaultPassThrough<MultiSelectPassThroughOptions>;
    orderlist?: DefaultPassThrough<OrderListPassThroughOptions>;
    organizationchart?: DefaultPassThrough<OrganizationChartPassThroughOptions>;
    overlaybadge?: DefaultPassThrough<OverlayBadgePassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Popover instead.
     */
    overlaypanel?: DefaultPassThrough<OverlayPanelPassThroughOptions>;
    paginator?: DefaultPassThrough<PaginatorPassThroughOptions>;
    panel?: DefaultPassThrough<PanelPassThroughOptions>;
    panelmenu?: DefaultPassThrough<PanelMenuPassThroughOptions>;
    password?: DefaultPassThrough<PasswordPassThroughOptions>;
    picklist?: DefaultPassThrough<PickListPassThroughOptions>;
    popover?: DefaultPassThrough<PopoverPassThroughOptions>;
    progressbar?: DefaultPassThrough<ProgressBarPassThroughOptions>;
    progressspinner?: DefaultPassThrough<ProgressSpinnerPassThroughOptions>;
    radiobutton?: DefaultPassThrough<RadioButtonPassThroughOptions>;
    radiobuttongroup?: DefaultPassThrough<RadioButtonGroupPassThroughOptions>;
    rating?: DefaultPassThrough<RatingPassThroughOptions>;
    row?: DefaultPassThrough<RowPassThroughOptions>;
    scrollpanel?: DefaultPassThrough<ScrollPanelPassThroughOptions>;
    scrolltop?: DefaultPassThrough<ScrollTopPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Drawer instead.
     */
    sidebar?: DefaultPassThrough<SidebarPassThroughOptions>;
    skeleton?: DefaultPassThrough<SkeletonPassThroughOptions>;
    slider?: DefaultPassThrough<SliderPassThroughOptions>;
    speeddial?: DefaultPassThrough<SpeedDialPassThroughOptions>;
    selectbutton?: DefaultPassThrough<SelectButtonPassThroughOptions>;
    select?: DefaultPassThrough<SelectPassThroughOptions>;
    splitbutton?: DefaultPassThrough<SplitButtonPassThroughOptions>;
    splitter?: DefaultPassThrough<SplitterPassThroughOptions>;
    splitterpanel?: DefaultPassThrough<SplitterPanelPassThroughOptions>;
    step?: DefaultPassThrough<StepPassThroughOptions>;
    stepitem?: DefaultPassThrough<StepItemPassThroughOptions>;
    steplist?: DefaultPassThrough<StepListPassThroughOptions>;
    steppanel?: DefaultPassThrough<StepPanelPassThroughOptions>;
    steppanels?: DefaultPassThrough<StepPanelsPassThroughOptions>;
    stepper?: DefaultPassThrough<StepperPassThroughOptions>;
    steps?: DefaultPassThrough<StepsPassThroughOptions>;
    tabmenu?: DefaultPassThrough<TabMenuPassThroughOptions>;
    tabs?: DefaultPassThrough<TabsPassThroughOptions>;
    tablist?: DefaultPassThrough<TabListPassThroughOptions>;
    tab?: DefaultPassThrough<TabPassThroughOptions>;
    tabpanels?: DefaultPassThrough<TabPanelsPassThroughOptions>;
    tabpanel?: DefaultPassThrough<TabPanelPassThroughOptions>;
    /**
     * @deprecated since v4. Use tabs instead.
     */
    tabview?: DefaultPassThrough<TabViewPassThroughOptions>;
    tag?: DefaultPassThrough<TagPassThroughOptions>;
    terminal?: DefaultPassThrough<TerminalPassThroughOptions>;
    textarea?: DefaultPassThrough<TextareaPassThroughOptions>;
    tieredmenu?: DefaultPassThrough<TieredMenuPassThroughOptions>;
    timeline?: DefaultPassThrough<TimelinePassThroughOptions>;
    toast?: DefaultPassThrough<ToastPassThroughOptions>;
    togglebutton?: DefaultPassThrough<ToggleButtonPassThroughOptions>;
    toggleswitch?: DefaultPassThrough<ToggleSwitchPassThroughOptions>;
    toolbar?: DefaultPassThrough<ToolbarPassThroughOptions>;
    tree?: DefaultPassThrough<TreePassThroughOptions>;
    treeselect?: DefaultPassThrough<TreeSelectPassThroughOptions>;
    treetable?: DefaultPassThrough<TreeTablePassThroughOptions>;
    virtualscroller?: DefaultPassThrough<VirtualScrollerPassThroughOptions>;
    directives?: {
        animate?: AnimateOnScrollDirectivePassThroughOptions;
        badge?: BadgeDirectivePassThroughOptions;
        focustrap?: FocusTrapDirectivePassThroughOptions;
        keyfilter?: KeyFilterDirectivePassThroughOptions;
        ripple?: RippleDirectivePassThroughOptions;
        styleclass?: StyleClassDirectivePassThroughOptions;
        tooltip?: TooltipDirectivePassThroughOptions;
    };
    global?: {
        css?: ((options: any) => string | undefined) | string | undefined;
    };
}
