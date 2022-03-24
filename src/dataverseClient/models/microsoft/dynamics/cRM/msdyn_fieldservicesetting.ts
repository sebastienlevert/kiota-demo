import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookingstatusFromDiscriminatorValue} from './createBookingstatusFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_resourcepaytypeFromDiscriminatorValue} from './createMsdyn_resourcepaytypeFromDiscriminatorValue';
import {createMsdyn_warehouseFromDiscriminatorValue} from './createMsdyn_warehouseFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bookingstatus, Bulkdeletefailure, Businessunit, Crmbaseentity, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_resourcepaytype, Msdyn_warehouse, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Product, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_fieldservicesetting extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_breakpaytype_value?: string | undefined;
    private __msdyn_businessclosurepaytype_value?: string | undefined;
    private __msdyn_defaultcanceledbookingstatus_value?: string | undefined;
    private __msdyn_defaultscheduledbookingstatus_value?: string | undefined;
    private __msdyn_defaultwarehouse_value?: string | undefined;
    private __msdyn_overtimepaytype_value?: string | undefined;
    private __msdyn_travelchargeitemid_value?: string | undefined;
    private __msdyn_travelpaytype_value?: string | undefined;
    private __msdyn_workpaytype_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_advancedsettings?: string | undefined;
    private _msdyn_agreementprefix?: string | undefined;
    private _msdyn_agreementrecordgeneration?: Date | undefined;
    private _msdyn_agreementstartingnumber?: number | undefined;
    private _msdyn_analyticsingestdatainxdays?: number | undefined;
    private _msdyn_analyticspostponeingestionuntil?: Date | undefined;
    private _msdyn_analyticsspreadoutpostponeingestionuntil?: Date | undefined;
    private _msdyn_autoallocateestimatedproducts?: boolean | undefined;
    private _msdyn_autogeneratewoforagreementbooking?: boolean | undefined;
    private _msdyn_autogeocodeaddresses?: boolean | undefined;
    private _msdyn_autonumberingoptin?: boolean | undefined;
    private _msdyn_bookingalerttemplate?: string | undefined;
    private _msdyn_breakpaytype?: Msdyn_resourcepaytype | undefined;
    private _msdyn_businessclosurepaytype?: Msdyn_resourcepaytype | undefined;
    private _msdyn_calculateprice?: boolean | undefined;
    private _msdyn_calculatetax?: boolean | undefined;
    private _msdyn_cancelcurrentslotswhenmoving?: boolean | undefined;
    private _msdyn_customgpsdata?: boolean | undefined;
    private _msdyn_customgpslatitudefield?: string | undefined;
    private _msdyn_customgpslocationentity?: string | undefined;
    private _msdyn_customgpslongitudefield?: string | undefined;
    private _msdyn_customgpsresourcefield?: string | undefined;
    private _msdyn_customgpstimestampfield?: string | undefined;
    private _msdyn_databaseversion?: number | undefined;
    private _msdyn_datepopulationtype?: boolean | undefined;
    private _msdyn_deactivatebookingwhencanceled?: boolean | undefined;
    private _msdyn_deactivatebookingwhencompleted?: boolean | undefined;
    private _msdyn_deactivateworkorderwhencanceled?: boolean | undefined;
    private _msdyn_deactivateworkorderwhenposted?: boolean | undefined;
    private _msdyn_defaultbookingduration?: number | undefined;
    private _msdyn_defaultcanceledbookingstatus?: Bookingstatus | undefined;
    private _msdyn_defaultcrewstrategy?: number | undefined;
    private _msdyn_defaultradiusunit?: boolean | undefined;
    private _msdyn_defaultradiusvalue?: number | undefined;
    private _msdyn_defaultscheduledbookingstatus?: Bookingstatus | undefined;
    private _msdyn_defaultwarehouse?: Msdyn_warehouse | undefined;
    private _msdyn_defaultworkordercompletedstatus?: number | undefined;
    private _msdyn_disablecustomerassetvalidation?: boolean | undefined;
    private _msdyn_disableremoteassistbookingstatuschanges?: boolean | undefined;
    private _msdyn_enableaddresssuggestions?: boolean | undefined;
    private _msdyn_enableincidenttyperecommendation?: boolean | undefined;
    private _msdyn_enablelegacyscheduleassistant?: boolean | undefined;
    private _msdyn_enablemainformdialogforsubgrids?: boolean | undefined;
    private _msdyn_enablesuggestedduration?: boolean | undefined;
    private _msdyn_enhancedbackgroundprocessing?: boolean | undefined;
    private _msdyn_entitynumberlength?: number | undefined;
    private _msdyn_fieldservicesetting_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_fieldservicesetting_Annotations?: Annotation[] | undefined;
    private _msdyn_fieldservicesetting_Appointments?: Appointment[] | undefined;
    private _msdyn_fieldservicesetting_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_fieldservicesetting_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_fieldservicesetting_Emails?: Email[] | undefined;
    private _msdyn_fieldservicesetting_Faxes?: Fax[] | undefined;
    private _msdyn_fieldservicesetting_Letters?: Letter[] | undefined;
    private _msdyn_fieldservicesetting_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_fieldservicesetting_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_fieldservicesetting_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_fieldservicesetting_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_fieldservicesetting_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_fieldservicesetting_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_fieldservicesetting_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_fieldservicesetting_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_fieldservicesetting_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_fieldservicesetting_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_fieldservicesetting_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_fieldservicesetting_ProcessSession?: Processsession[] | undefined;
    private _msdyn_fieldservicesetting_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_fieldservicesetting_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_fieldservicesetting_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_fieldservicesetting_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_fieldservicesetting_Tasks?: Task[] | undefined;
    private _msdyn_fieldservicesettingid?: string | undefined;
    private _msdyn_generateactuals?: boolean | undefined;
    private _msdyn_generateagreementinvoicesxdaysinadvance?: number | undefined;
    private _msdyn_generateagreementwoxdaysinadvance?: number | undefined;
    private _msdyn_generatebookingdatesxmonthsinadvance?: number | undefined;
    private _msdyn_generateinvoicedatesxmonthsinadvance?: number | undefined;
    private _msdyn_gpslocationexpiresafterxminutes?: number | undefined;
    private _msdyn_historicaldatafilter?: number | undefined;
    private _msdyn_inspectionanalyticsenabled?: boolean | undefined;
    private _msdyn_inspectionanalyticsenabledon?: Date | undefined;
    private _msdyn_inspectionanalyticsfrequency?: number | undefined;
    private _msdyn_inspectionanalyticsrecommendedtime?: Date | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_inventoryadjustmentprefix?: string | undefined;
    private _msdyn_inventoryadjustmentstartingnumber?: number | undefined;
    private _msdyn_inventorytransferprefix?: string | undefined;
    private _msdyn_inventorytransferstartingnumber?: number | undefined;
    private _msdyn_lastrunofincidenttyperecommendation?: Date | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_notificationtimeout?: number | undefined;
    private _msdyn_overtimepaytype?: Msdyn_resourcepaytype | undefined;
    private _msdyn_postponenumbercleanupuntil?: Date | undefined;
    private _msdyn_productcostorder?: number | undefined;
    private _msdyn_purchaseorderapprovalrequired?: boolean | undefined;
    private _msdyn_purchaseorderprefix?: string | undefined;
    private _msdyn_purchaseorderstartingnumber?: number | undefined;
    private _msdyn_resourcessynchronizationtimeout?: number | undefined;
    private _msdyn_returntopxrecommendations?: number | undefined;
    private _msdyn_rmaprefix?: string | undefined;
    private _msdyn_rmastartingnumber?: number | undefined;
    private _msdyn_rtvprefix?: string | undefined;
    private _msdyn_rtvstartingnumber?: number | undefined;
    private _msdyn_runfrequencyofincidenttyperecommendation?: number | undefined;
    private _msdyn_saautofilterserviceterritory?: boolean | undefined;
    private _msdyn_schedulerbusinessunitdetailsview?: string | undefined;
    private _msdyn_schedulerbusinessunittooltipview?: string | undefined;
    private _msdyn_schedulercoredetailsview?: string | undefined;
    private _msdyn_schedulercoreslottexttemplate?: string | undefined;
    private _msdyn_schedulercoretooltipview?: string | undefined;
    private _msdyn_schedulerfieldservicedetailsview?: string | undefined;
    private _msdyn_schedulerfieldserviceslottexttemplate?: string | undefined;
    private _msdyn_schedulerfieldservicetooltipview?: string | undefined;
    private _msdyn_schedulerresourcedetailsview?: string | undefined;
    private _msdyn_schedulerresourcetooltipview?: string | undefined;
    private _msdyn_schedulerunscheduledview?: string | undefined;
    private _msdyn_sdkapimapkey?: string | undefined;
    private _msdyn_showsimplifiedworkordercommands?: boolean | undefined;
    private _msdyn_suggestreparentingcustomerassets?: boolean | undefined;
    private _msdyn_timecostactualssource?: number | undefined;
    private _msdyn_timeentrygenerationstrategy?: number | undefined;
    private _msdyn_timestampfrequency?: number | undefined;
    private _msdyn_travelchargeitemid?: Product | undefined;
    private _msdyn_travelpaytype?: Msdyn_resourcepaytype | undefined;
    private _msdyn_traveltimerescheduling?: boolean | undefined;
    private _msdyn_undefinedbookinglocation?: number | undefined;
    private _msdyn_unscheduledwotooltipsviewid?: string | undefined;
    private _msdyn_useofproductsoutofstock?: number | undefined;
    private _msdyn_workorderinvoicecreation?: number | undefined;
    private _msdyn_workorderprefix?: string | undefined;
    private _msdyn_workorderstartingnumber?: number | undefined;
    private _msdyn_workpaytype?: Msdyn_resourcepaytype | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _msdyn_breakpaytype_value property value. 
     * @returns a string
     */
    public get _msdyn_breakpaytype_value() {
        return this.__msdyn_breakpaytype_value;
    };
    /**
     * Sets the _msdyn_breakpaytype_value property value. 
     * @param value Value to set for the _msdyn_breakpaytype_value property.
     */
    public set _msdyn_breakpaytype_value(value: string | undefined) {
        this.__msdyn_breakpaytype_value = value;
    };
    /**
     * Gets the _msdyn_businessclosurepaytype_value property value. 
     * @returns a string
     */
    public get _msdyn_businessclosurepaytype_value() {
        return this.__msdyn_businessclosurepaytype_value;
    };
    /**
     * Sets the _msdyn_businessclosurepaytype_value property value. 
     * @param value Value to set for the _msdyn_businessclosurepaytype_value property.
     */
    public set _msdyn_businessclosurepaytype_value(value: string | undefined) {
        this.__msdyn_businessclosurepaytype_value = value;
    };
    /**
     * Gets the _msdyn_defaultcanceledbookingstatus_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultcanceledbookingstatus_value() {
        return this.__msdyn_defaultcanceledbookingstatus_value;
    };
    /**
     * Sets the _msdyn_defaultcanceledbookingstatus_value property value. 
     * @param value Value to set for the _msdyn_defaultcanceledbookingstatus_value property.
     */
    public set _msdyn_defaultcanceledbookingstatus_value(value: string | undefined) {
        this.__msdyn_defaultcanceledbookingstatus_value = value;
    };
    /**
     * Gets the _msdyn_defaultscheduledbookingstatus_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultscheduledbookingstatus_value() {
        return this.__msdyn_defaultscheduledbookingstatus_value;
    };
    /**
     * Sets the _msdyn_defaultscheduledbookingstatus_value property value. 
     * @param value Value to set for the _msdyn_defaultscheduledbookingstatus_value property.
     */
    public set _msdyn_defaultscheduledbookingstatus_value(value: string | undefined) {
        this.__msdyn_defaultscheduledbookingstatus_value = value;
    };
    /**
     * Gets the _msdyn_defaultwarehouse_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultwarehouse_value() {
        return this.__msdyn_defaultwarehouse_value;
    };
    /**
     * Sets the _msdyn_defaultwarehouse_value property value. 
     * @param value Value to set for the _msdyn_defaultwarehouse_value property.
     */
    public set _msdyn_defaultwarehouse_value(value: string | undefined) {
        this.__msdyn_defaultwarehouse_value = value;
    };
    /**
     * Gets the _msdyn_overtimepaytype_value property value. 
     * @returns a string
     */
    public get _msdyn_overtimepaytype_value() {
        return this.__msdyn_overtimepaytype_value;
    };
    /**
     * Sets the _msdyn_overtimepaytype_value property value. 
     * @param value Value to set for the _msdyn_overtimepaytype_value property.
     */
    public set _msdyn_overtimepaytype_value(value: string | undefined) {
        this.__msdyn_overtimepaytype_value = value;
    };
    /**
     * Gets the _msdyn_travelchargeitemid_value property value. 
     * @returns a string
     */
    public get _msdyn_travelchargeitemid_value() {
        return this.__msdyn_travelchargeitemid_value;
    };
    /**
     * Sets the _msdyn_travelchargeitemid_value property value. 
     * @param value Value to set for the _msdyn_travelchargeitemid_value property.
     */
    public set _msdyn_travelchargeitemid_value(value: string | undefined) {
        this.__msdyn_travelchargeitemid_value = value;
    };
    /**
     * Gets the _msdyn_travelpaytype_value property value. 
     * @returns a string
     */
    public get _msdyn_travelpaytype_value() {
        return this.__msdyn_travelpaytype_value;
    };
    /**
     * Sets the _msdyn_travelpaytype_value property value. 
     * @param value Value to set for the _msdyn_travelpaytype_value property.
     */
    public set _msdyn_travelpaytype_value(value: string | undefined) {
        this.__msdyn_travelpaytype_value = value;
    };
    /**
     * Gets the _msdyn_workpaytype_value property value. 
     * @returns a string
     */
    public get _msdyn_workpaytype_value() {
        return this.__msdyn_workpaytype_value;
    };
    /**
     * Sets the _msdyn_workpaytype_value property value. 
     * @param value Value to set for the _msdyn_workpaytype_value property.
     */
    public set _msdyn_workpaytype_value(value: string | undefined) {
        this.__msdyn_workpaytype_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Instantiates a new msdyn_fieldservicesetting and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_breakpaytype_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._msdyn_breakpaytype_value = n.getStringValue(); },
            "_msdyn_businessclosurepaytype_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._msdyn_businessclosurepaytype_value = n.getStringValue(); },
            "_msdyn_defaultcanceledbookingstatus_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._msdyn_defaultcanceledbookingstatus_value = n.getStringValue(); },
            "_msdyn_defaultscheduledbookingstatus_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._msdyn_defaultscheduledbookingstatus_value = n.getStringValue(); },
            "_msdyn_defaultwarehouse_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._msdyn_defaultwarehouse_value = n.getStringValue(); },
            "_msdyn_overtimepaytype_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._msdyn_overtimepaytype_value = n.getStringValue(); },
            "_msdyn_travelchargeitemid_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._msdyn_travelchargeitemid_value = n.getStringValue(); },
            "_msdyn_travelpaytype_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._msdyn_travelpaytype_value = n.getStringValue(); },
            "_msdyn_workpaytype_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._msdyn_workpaytype_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_fieldservicesetting)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_advancedsettings": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_advancedsettings = n.getStringValue(); },
            "msdyn_agreementprefix": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_agreementprefix = n.getStringValue(); },
            "msdyn_agreementrecordgeneration": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_agreementrecordgeneration = n.getDateValue(); },
            "msdyn_agreementstartingnumber": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_agreementstartingnumber = n.getNumberValue(); },
            "msdyn_analyticsingestdatainxdays": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_analyticsingestdatainxdays = n.getNumberValue(); },
            "msdyn_analyticspostponeingestionuntil": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_analyticspostponeingestionuntil = n.getDateValue(); },
            "msdyn_analyticsspreadoutpostponeingestionuntil": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_analyticsspreadoutpostponeingestionuntil = n.getDateValue(); },
            "msdyn_autoallocateestimatedproducts": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_autoallocateestimatedproducts = n.getBooleanValue(); },
            "msdyn_autogeneratewoforagreementbooking": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_autogeneratewoforagreementbooking = n.getBooleanValue(); },
            "msdyn_autogeocodeaddresses": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_autogeocodeaddresses = n.getBooleanValue(); },
            "msdyn_autonumberingoptin": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_autonumberingoptin = n.getBooleanValue(); },
            "msdyn_bookingalerttemplate": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_bookingalerttemplate = n.getStringValue(); },
            "msdyn_breakpaytype": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_breakpaytype = n.getObjectValue<Msdyn_resourcepaytype>(createMsdyn_resourcepaytypeFromDiscriminatorValue); },
            "msdyn_businessclosurepaytype": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_businessclosurepaytype = n.getObjectValue<Msdyn_resourcepaytype>(createMsdyn_resourcepaytypeFromDiscriminatorValue); },
            "msdyn_calculateprice": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_calculateprice = n.getBooleanValue(); },
            "msdyn_calculatetax": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_calculatetax = n.getBooleanValue(); },
            "msdyn_cancelcurrentslotswhenmoving": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_cancelcurrentslotswhenmoving = n.getBooleanValue(); },
            "msdyn_customgpsdata": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_customgpsdata = n.getBooleanValue(); },
            "msdyn_customgpslatitudefield": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_customgpslatitudefield = n.getStringValue(); },
            "msdyn_customgpslocationentity": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_customgpslocationentity = n.getStringValue(); },
            "msdyn_customgpslongitudefield": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_customgpslongitudefield = n.getStringValue(); },
            "msdyn_customgpsresourcefield": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_customgpsresourcefield = n.getStringValue(); },
            "msdyn_customgpstimestampfield": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_customgpstimestampfield = n.getStringValue(); },
            "msdyn_databaseversion": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_databaseversion = n.getNumberValue(); },
            "msdyn_datepopulationtype": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_datepopulationtype = n.getBooleanValue(); },
            "msdyn_deactivatebookingwhencanceled": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_deactivatebookingwhencanceled = n.getBooleanValue(); },
            "msdyn_deactivatebookingwhencompleted": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_deactivatebookingwhencompleted = n.getBooleanValue(); },
            "msdyn_deactivateworkorderwhencanceled": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_deactivateworkorderwhencanceled = n.getBooleanValue(); },
            "msdyn_deactivateworkorderwhenposted": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_deactivateworkorderwhenposted = n.getBooleanValue(); },
            "msdyn_defaultbookingduration": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_defaultbookingduration = n.getNumberValue(); },
            "msdyn_defaultcanceledbookingstatus": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_defaultcanceledbookingstatus = n.getObjectValue<Bookingstatus>(createBookingstatusFromDiscriminatorValue); },
            "msdyn_defaultcrewstrategy": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_defaultcrewstrategy = n.getNumberValue(); },
            "msdyn_defaultradiusunit": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_defaultradiusunit = n.getBooleanValue(); },
            "msdyn_defaultradiusvalue": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_defaultradiusvalue = n.getNumberValue(); },
            "msdyn_defaultscheduledbookingstatus": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_defaultscheduledbookingstatus = n.getObjectValue<Bookingstatus>(createBookingstatusFromDiscriminatorValue); },
            "msdyn_defaultwarehouse": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_defaultwarehouse = n.getObjectValue<Msdyn_warehouse>(createMsdyn_warehouseFromDiscriminatorValue); },
            "msdyn_defaultworkordercompletedstatus": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_defaultworkordercompletedstatus = n.getNumberValue(); },
            "msdyn_disablecustomerassetvalidation": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_disablecustomerassetvalidation = n.getBooleanValue(); },
            "msdyn_disableremoteassistbookingstatuschanges": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_disableremoteassistbookingstatuschanges = n.getBooleanValue(); },
            "msdyn_enableaddresssuggestions": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_enableaddresssuggestions = n.getBooleanValue(); },
            "msdyn_enableincidenttyperecommendation": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_enableincidenttyperecommendation = n.getBooleanValue(); },
            "msdyn_enablelegacyscheduleassistant": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_enablelegacyscheduleassistant = n.getBooleanValue(); },
            "msdyn_enablemainformdialogforsubgrids": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_enablemainformdialogforsubgrids = n.getBooleanValue(); },
            "msdyn_enablesuggestedduration": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_enablesuggestedduration = n.getBooleanValue(); },
            "msdyn_enhancedbackgroundprocessing": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_enhancedbackgroundprocessing = n.getBooleanValue(); },
            "msdyn_entitynumberlength": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_entitynumberlength = n.getNumberValue(); },
            "msdyn_fieldservicesetting_ActivityPointers": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_Annotations": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_Appointments": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_AsyncOperations": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_Emails": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_Faxes": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_Letters": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_msfp_alerts": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_PhoneCalls": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_ProcessSession": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_SocialActivities": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_SyncErrors": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_fieldservicesetting_Tasks": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesetting_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_fieldservicesettingid": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_fieldservicesettingid = n.getStringValue(); },
            "msdyn_generateactuals": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_generateactuals = n.getBooleanValue(); },
            "msdyn_generateagreementinvoicesxdaysinadvance": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_generateagreementinvoicesxdaysinadvance = n.getNumberValue(); },
            "msdyn_generateagreementwoxdaysinadvance": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_generateagreementwoxdaysinadvance = n.getNumberValue(); },
            "msdyn_generatebookingdatesxmonthsinadvance": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_generatebookingdatesxmonthsinadvance = n.getNumberValue(); },
            "msdyn_generateinvoicedatesxmonthsinadvance": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_generateinvoicedatesxmonthsinadvance = n.getNumberValue(); },
            "msdyn_gpslocationexpiresafterxminutes": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_gpslocationexpiresafterxminutes = n.getNumberValue(); },
            "msdyn_historicaldatafilter": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_historicaldatafilter = n.getNumberValue(); },
            "msdyn_inspectionanalyticsenabled": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_inspectionanalyticsenabled = n.getBooleanValue(); },
            "msdyn_inspectionanalyticsenabledon": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_inspectionanalyticsenabledon = n.getDateValue(); },
            "msdyn_inspectionanalyticsfrequency": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_inspectionanalyticsfrequency = n.getNumberValue(); },
            "msdyn_inspectionanalyticsrecommendedtime": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_inspectionanalyticsrecommendedtime = n.getDateValue(); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_internalflags = n.getStringValue(); },
            "msdyn_inventoryadjustmentprefix": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_inventoryadjustmentprefix = n.getStringValue(); },
            "msdyn_inventoryadjustmentstartingnumber": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_inventoryadjustmentstartingnumber = n.getNumberValue(); },
            "msdyn_inventorytransferprefix": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_inventorytransferprefix = n.getStringValue(); },
            "msdyn_inventorytransferstartingnumber": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_inventorytransferstartingnumber = n.getNumberValue(); },
            "msdyn_lastrunofincidenttyperecommendation": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_lastrunofincidenttyperecommendation = n.getDateValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_name = n.getStringValue(); },
            "msdyn_notificationtimeout": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_notificationtimeout = n.getNumberValue(); },
            "msdyn_overtimepaytype": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_overtimepaytype = n.getObjectValue<Msdyn_resourcepaytype>(createMsdyn_resourcepaytypeFromDiscriminatorValue); },
            "msdyn_postponenumbercleanupuntil": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_postponenumbercleanupuntil = n.getDateValue(); },
            "msdyn_productcostorder": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_productcostorder = n.getNumberValue(); },
            "msdyn_purchaseorderapprovalrequired": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_purchaseorderapprovalrequired = n.getBooleanValue(); },
            "msdyn_purchaseorderprefix": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_purchaseorderprefix = n.getStringValue(); },
            "msdyn_purchaseorderstartingnumber": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_purchaseorderstartingnumber = n.getNumberValue(); },
            "msdyn_resourcessynchronizationtimeout": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_resourcessynchronizationtimeout = n.getNumberValue(); },
            "msdyn_returntopxrecommendations": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_returntopxrecommendations = n.getNumberValue(); },
            "msdyn_rmaprefix": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_rmaprefix = n.getStringValue(); },
            "msdyn_rmastartingnumber": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_rmastartingnumber = n.getNumberValue(); },
            "msdyn_rtvprefix": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_rtvprefix = n.getStringValue(); },
            "msdyn_rtvstartingnumber": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_rtvstartingnumber = n.getNumberValue(); },
            "msdyn_runfrequencyofincidenttyperecommendation": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_runfrequencyofincidenttyperecommendation = n.getNumberValue(); },
            "msdyn_saautofilterserviceterritory": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_saautofilterserviceterritory = n.getBooleanValue(); },
            "msdyn_schedulerbusinessunitdetailsview": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_schedulerbusinessunitdetailsview = n.getStringValue(); },
            "msdyn_schedulerbusinessunittooltipview": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_schedulerbusinessunittooltipview = n.getStringValue(); },
            "msdyn_schedulercoredetailsview": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_schedulercoredetailsview = n.getStringValue(); },
            "msdyn_schedulercoreslottexttemplate": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_schedulercoreslottexttemplate = n.getStringValue(); },
            "msdyn_schedulercoretooltipview": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_schedulercoretooltipview = n.getStringValue(); },
            "msdyn_schedulerfieldservicedetailsview": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_schedulerfieldservicedetailsview = n.getStringValue(); },
            "msdyn_schedulerfieldserviceslottexttemplate": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_schedulerfieldserviceslottexttemplate = n.getStringValue(); },
            "msdyn_schedulerfieldservicetooltipview": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_schedulerfieldservicetooltipview = n.getStringValue(); },
            "msdyn_schedulerresourcedetailsview": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_schedulerresourcedetailsview = n.getStringValue(); },
            "msdyn_schedulerresourcetooltipview": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_schedulerresourcetooltipview = n.getStringValue(); },
            "msdyn_schedulerunscheduledview": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_schedulerunscheduledview = n.getStringValue(); },
            "msdyn_sdkapimapkey": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_sdkapimapkey = n.getStringValue(); },
            "msdyn_showsimplifiedworkordercommands": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_showsimplifiedworkordercommands = n.getBooleanValue(); },
            "msdyn_suggestreparentingcustomerassets": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_suggestreparentingcustomerassets = n.getBooleanValue(); },
            "msdyn_timecostactualssource": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_timecostactualssource = n.getNumberValue(); },
            "msdyn_timeentrygenerationstrategy": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_timeentrygenerationstrategy = n.getNumberValue(); },
            "msdyn_timestampfrequency": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_timestampfrequency = n.getNumberValue(); },
            "msdyn_travelchargeitemid": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_travelchargeitemid = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "msdyn_travelpaytype": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_travelpaytype = n.getObjectValue<Msdyn_resourcepaytype>(createMsdyn_resourcepaytypeFromDiscriminatorValue); },
            "msdyn_traveltimerescheduling": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_traveltimerescheduling = n.getBooleanValue(); },
            "msdyn_undefinedbookinglocation": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_undefinedbookinglocation = n.getNumberValue(); },
            "msdyn_unscheduledwotooltipsviewid": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_unscheduledwotooltipsviewid = n.getStringValue(); },
            "msdyn_useofproductsoutofstock": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_useofproductsoutofstock = n.getNumberValue(); },
            "msdyn_workorderinvoicecreation": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_workorderinvoicecreation = n.getNumberValue(); },
            "msdyn_workorderprefix": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_workorderprefix = n.getStringValue(); },
            "msdyn_workorderstartingnumber": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_workorderstartingnumber = n.getNumberValue(); },
            "msdyn_workpaytype": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).msdyn_workpaytype = n.getObjectValue<Msdyn_resourcepaytype>(createMsdyn_resourcepaytypeFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_fieldservicesetting).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the msdyn_advancedsettings property value. 
     * @returns a string
     */
    public get msdyn_advancedsettings() {
        return this._msdyn_advancedsettings;
    };
    /**
     * Sets the msdyn_advancedsettings property value. 
     * @param value Value to set for the msdyn_advancedsettings property.
     */
    public set msdyn_advancedsettings(value: string | undefined) {
        this._msdyn_advancedsettings = value;
    };
    /**
     * Gets the msdyn_agreementprefix property value. 
     * @returns a string
     */
    public get msdyn_agreementprefix() {
        return this._msdyn_agreementprefix;
    };
    /**
     * Sets the msdyn_agreementprefix property value. 
     * @param value Value to set for the msdyn_agreementprefix property.
     */
    public set msdyn_agreementprefix(value: string | undefined) {
        this._msdyn_agreementprefix = value;
    };
    /**
     * Gets the msdyn_agreementrecordgeneration property value. 
     * @returns a Date
     */
    public get msdyn_agreementrecordgeneration() {
        return this._msdyn_agreementrecordgeneration;
    };
    /**
     * Sets the msdyn_agreementrecordgeneration property value. 
     * @param value Value to set for the msdyn_agreementrecordgeneration property.
     */
    public set msdyn_agreementrecordgeneration(value: Date | undefined) {
        this._msdyn_agreementrecordgeneration = value;
    };
    /**
     * Gets the msdyn_agreementstartingnumber property value. 
     * @returns a integer
     */
    public get msdyn_agreementstartingnumber() {
        return this._msdyn_agreementstartingnumber;
    };
    /**
     * Sets the msdyn_agreementstartingnumber property value. 
     * @param value Value to set for the msdyn_agreementstartingnumber property.
     */
    public set msdyn_agreementstartingnumber(value: number | undefined) {
        this._msdyn_agreementstartingnumber = value;
    };
    /**
     * Gets the msdyn_analyticsingestdatainxdays property value. 
     * @returns a integer
     */
    public get msdyn_analyticsingestdatainxdays() {
        return this._msdyn_analyticsingestdatainxdays;
    };
    /**
     * Sets the msdyn_analyticsingestdatainxdays property value. 
     * @param value Value to set for the msdyn_analyticsingestdatainxdays property.
     */
    public set msdyn_analyticsingestdatainxdays(value: number | undefined) {
        this._msdyn_analyticsingestdatainxdays = value;
    };
    /**
     * Gets the msdyn_analyticspostponeingestionuntil property value. 
     * @returns a Date
     */
    public get msdyn_analyticspostponeingestionuntil() {
        return this._msdyn_analyticspostponeingestionuntil;
    };
    /**
     * Sets the msdyn_analyticspostponeingestionuntil property value. 
     * @param value Value to set for the msdyn_analyticspostponeingestionuntil property.
     */
    public set msdyn_analyticspostponeingestionuntil(value: Date | undefined) {
        this._msdyn_analyticspostponeingestionuntil = value;
    };
    /**
     * Gets the msdyn_analyticsspreadoutpostponeingestionuntil property value. 
     * @returns a Date
     */
    public get msdyn_analyticsspreadoutpostponeingestionuntil() {
        return this._msdyn_analyticsspreadoutpostponeingestionuntil;
    };
    /**
     * Sets the msdyn_analyticsspreadoutpostponeingestionuntil property value. 
     * @param value Value to set for the msdyn_analyticsspreadoutpostponeingestionuntil property.
     */
    public set msdyn_analyticsspreadoutpostponeingestionuntil(value: Date | undefined) {
        this._msdyn_analyticsspreadoutpostponeingestionuntil = value;
    };
    /**
     * Gets the msdyn_autoallocateestimatedproducts property value. 
     * @returns a boolean
     */
    public get msdyn_autoallocateestimatedproducts() {
        return this._msdyn_autoallocateestimatedproducts;
    };
    /**
     * Sets the msdyn_autoallocateestimatedproducts property value. 
     * @param value Value to set for the msdyn_autoallocateestimatedproducts property.
     */
    public set msdyn_autoallocateestimatedproducts(value: boolean | undefined) {
        this._msdyn_autoallocateestimatedproducts = value;
    };
    /**
     * Gets the msdyn_autogeneratewoforagreementbooking property value. 
     * @returns a boolean
     */
    public get msdyn_autogeneratewoforagreementbooking() {
        return this._msdyn_autogeneratewoforagreementbooking;
    };
    /**
     * Sets the msdyn_autogeneratewoforagreementbooking property value. 
     * @param value Value to set for the msdyn_autogeneratewoforagreementbooking property.
     */
    public set msdyn_autogeneratewoforagreementbooking(value: boolean | undefined) {
        this._msdyn_autogeneratewoforagreementbooking = value;
    };
    /**
     * Gets the msdyn_autogeocodeaddresses property value. 
     * @returns a boolean
     */
    public get msdyn_autogeocodeaddresses() {
        return this._msdyn_autogeocodeaddresses;
    };
    /**
     * Sets the msdyn_autogeocodeaddresses property value. 
     * @param value Value to set for the msdyn_autogeocodeaddresses property.
     */
    public set msdyn_autogeocodeaddresses(value: boolean | undefined) {
        this._msdyn_autogeocodeaddresses = value;
    };
    /**
     * Gets the msdyn_autonumberingoptin property value. 
     * @returns a boolean
     */
    public get msdyn_autonumberingoptin() {
        return this._msdyn_autonumberingoptin;
    };
    /**
     * Sets the msdyn_autonumberingoptin property value. 
     * @param value Value to set for the msdyn_autonumberingoptin property.
     */
    public set msdyn_autonumberingoptin(value: boolean | undefined) {
        this._msdyn_autonumberingoptin = value;
    };
    /**
     * Gets the msdyn_bookingalerttemplate property value. 
     * @returns a string
     */
    public get msdyn_bookingalerttemplate() {
        return this._msdyn_bookingalerttemplate;
    };
    /**
     * Sets the msdyn_bookingalerttemplate property value. 
     * @param value Value to set for the msdyn_bookingalerttemplate property.
     */
    public set msdyn_bookingalerttemplate(value: string | undefined) {
        this._msdyn_bookingalerttemplate = value;
    };
    /**
     * Gets the msdyn_breakpaytype property value. 
     * @returns a msdyn_resourcepaytype
     */
    public get msdyn_breakpaytype() {
        return this._msdyn_breakpaytype;
    };
    /**
     * Sets the msdyn_breakpaytype property value. 
     * @param value Value to set for the msdyn_breakpaytype property.
     */
    public set msdyn_breakpaytype(value: Msdyn_resourcepaytype | undefined) {
        this._msdyn_breakpaytype = value;
    };
    /**
     * Gets the msdyn_businessclosurepaytype property value. 
     * @returns a msdyn_resourcepaytype
     */
    public get msdyn_businessclosurepaytype() {
        return this._msdyn_businessclosurepaytype;
    };
    /**
     * Sets the msdyn_businessclosurepaytype property value. 
     * @param value Value to set for the msdyn_businessclosurepaytype property.
     */
    public set msdyn_businessclosurepaytype(value: Msdyn_resourcepaytype | undefined) {
        this._msdyn_businessclosurepaytype = value;
    };
    /**
     * Gets the msdyn_calculateprice property value. 
     * @returns a boolean
     */
    public get msdyn_calculateprice() {
        return this._msdyn_calculateprice;
    };
    /**
     * Sets the msdyn_calculateprice property value. 
     * @param value Value to set for the msdyn_calculateprice property.
     */
    public set msdyn_calculateprice(value: boolean | undefined) {
        this._msdyn_calculateprice = value;
    };
    /**
     * Gets the msdyn_calculatetax property value. 
     * @returns a boolean
     */
    public get msdyn_calculatetax() {
        return this._msdyn_calculatetax;
    };
    /**
     * Sets the msdyn_calculatetax property value. 
     * @param value Value to set for the msdyn_calculatetax property.
     */
    public set msdyn_calculatetax(value: boolean | undefined) {
        this._msdyn_calculatetax = value;
    };
    /**
     * Gets the msdyn_cancelcurrentslotswhenmoving property value. 
     * @returns a boolean
     */
    public get msdyn_cancelcurrentslotswhenmoving() {
        return this._msdyn_cancelcurrentslotswhenmoving;
    };
    /**
     * Sets the msdyn_cancelcurrentslotswhenmoving property value. 
     * @param value Value to set for the msdyn_cancelcurrentslotswhenmoving property.
     */
    public set msdyn_cancelcurrentslotswhenmoving(value: boolean | undefined) {
        this._msdyn_cancelcurrentslotswhenmoving = value;
    };
    /**
     * Gets the msdyn_customgpsdata property value. 
     * @returns a boolean
     */
    public get msdyn_customgpsdata() {
        return this._msdyn_customgpsdata;
    };
    /**
     * Sets the msdyn_customgpsdata property value. 
     * @param value Value to set for the msdyn_customgpsdata property.
     */
    public set msdyn_customgpsdata(value: boolean | undefined) {
        this._msdyn_customgpsdata = value;
    };
    /**
     * Gets the msdyn_customgpslatitudefield property value. 
     * @returns a string
     */
    public get msdyn_customgpslatitudefield() {
        return this._msdyn_customgpslatitudefield;
    };
    /**
     * Sets the msdyn_customgpslatitudefield property value. 
     * @param value Value to set for the msdyn_customgpslatitudefield property.
     */
    public set msdyn_customgpslatitudefield(value: string | undefined) {
        this._msdyn_customgpslatitudefield = value;
    };
    /**
     * Gets the msdyn_customgpslocationentity property value. 
     * @returns a string
     */
    public get msdyn_customgpslocationentity() {
        return this._msdyn_customgpslocationentity;
    };
    /**
     * Sets the msdyn_customgpslocationentity property value. 
     * @param value Value to set for the msdyn_customgpslocationentity property.
     */
    public set msdyn_customgpslocationentity(value: string | undefined) {
        this._msdyn_customgpslocationentity = value;
    };
    /**
     * Gets the msdyn_customgpslongitudefield property value. 
     * @returns a string
     */
    public get msdyn_customgpslongitudefield() {
        return this._msdyn_customgpslongitudefield;
    };
    /**
     * Sets the msdyn_customgpslongitudefield property value. 
     * @param value Value to set for the msdyn_customgpslongitudefield property.
     */
    public set msdyn_customgpslongitudefield(value: string | undefined) {
        this._msdyn_customgpslongitudefield = value;
    };
    /**
     * Gets the msdyn_customgpsresourcefield property value. 
     * @returns a string
     */
    public get msdyn_customgpsresourcefield() {
        return this._msdyn_customgpsresourcefield;
    };
    /**
     * Sets the msdyn_customgpsresourcefield property value. 
     * @param value Value to set for the msdyn_customgpsresourcefield property.
     */
    public set msdyn_customgpsresourcefield(value: string | undefined) {
        this._msdyn_customgpsresourcefield = value;
    };
    /**
     * Gets the msdyn_customgpstimestampfield property value. 
     * @returns a string
     */
    public get msdyn_customgpstimestampfield() {
        return this._msdyn_customgpstimestampfield;
    };
    /**
     * Sets the msdyn_customgpstimestampfield property value. 
     * @param value Value to set for the msdyn_customgpstimestampfield property.
     */
    public set msdyn_customgpstimestampfield(value: string | undefined) {
        this._msdyn_customgpstimestampfield = value;
    };
    /**
     * Gets the msdyn_databaseversion property value. 
     * @returns a integer
     */
    public get msdyn_databaseversion() {
        return this._msdyn_databaseversion;
    };
    /**
     * Sets the msdyn_databaseversion property value. 
     * @param value Value to set for the msdyn_databaseversion property.
     */
    public set msdyn_databaseversion(value: number | undefined) {
        this._msdyn_databaseversion = value;
    };
    /**
     * Gets the msdyn_datepopulationtype property value. 
     * @returns a boolean
     */
    public get msdyn_datepopulationtype() {
        return this._msdyn_datepopulationtype;
    };
    /**
     * Sets the msdyn_datepopulationtype property value. 
     * @param value Value to set for the msdyn_datepopulationtype property.
     */
    public set msdyn_datepopulationtype(value: boolean | undefined) {
        this._msdyn_datepopulationtype = value;
    };
    /**
     * Gets the msdyn_deactivatebookingwhencanceled property value. 
     * @returns a boolean
     */
    public get msdyn_deactivatebookingwhencanceled() {
        return this._msdyn_deactivatebookingwhencanceled;
    };
    /**
     * Sets the msdyn_deactivatebookingwhencanceled property value. 
     * @param value Value to set for the msdyn_deactivatebookingwhencanceled property.
     */
    public set msdyn_deactivatebookingwhencanceled(value: boolean | undefined) {
        this._msdyn_deactivatebookingwhencanceled = value;
    };
    /**
     * Gets the msdyn_deactivatebookingwhencompleted property value. 
     * @returns a boolean
     */
    public get msdyn_deactivatebookingwhencompleted() {
        return this._msdyn_deactivatebookingwhencompleted;
    };
    /**
     * Sets the msdyn_deactivatebookingwhencompleted property value. 
     * @param value Value to set for the msdyn_deactivatebookingwhencompleted property.
     */
    public set msdyn_deactivatebookingwhencompleted(value: boolean | undefined) {
        this._msdyn_deactivatebookingwhencompleted = value;
    };
    /**
     * Gets the msdyn_deactivateworkorderwhencanceled property value. 
     * @returns a boolean
     */
    public get msdyn_deactivateworkorderwhencanceled() {
        return this._msdyn_deactivateworkorderwhencanceled;
    };
    /**
     * Sets the msdyn_deactivateworkorderwhencanceled property value. 
     * @param value Value to set for the msdyn_deactivateworkorderwhencanceled property.
     */
    public set msdyn_deactivateworkorderwhencanceled(value: boolean | undefined) {
        this._msdyn_deactivateworkorderwhencanceled = value;
    };
    /**
     * Gets the msdyn_deactivateworkorderwhenposted property value. 
     * @returns a boolean
     */
    public get msdyn_deactivateworkorderwhenposted() {
        return this._msdyn_deactivateworkorderwhenposted;
    };
    /**
     * Sets the msdyn_deactivateworkorderwhenposted property value. 
     * @param value Value to set for the msdyn_deactivateworkorderwhenposted property.
     */
    public set msdyn_deactivateworkorderwhenposted(value: boolean | undefined) {
        this._msdyn_deactivateworkorderwhenposted = value;
    };
    /**
     * Gets the msdyn_defaultbookingduration property value. 
     * @returns a integer
     */
    public get msdyn_defaultbookingduration() {
        return this._msdyn_defaultbookingduration;
    };
    /**
     * Sets the msdyn_defaultbookingduration property value. 
     * @param value Value to set for the msdyn_defaultbookingduration property.
     */
    public set msdyn_defaultbookingduration(value: number | undefined) {
        this._msdyn_defaultbookingduration = value;
    };
    /**
     * Gets the msdyn_defaultcanceledbookingstatus property value. 
     * @returns a bookingstatus
     */
    public get msdyn_defaultcanceledbookingstatus() {
        return this._msdyn_defaultcanceledbookingstatus;
    };
    /**
     * Sets the msdyn_defaultcanceledbookingstatus property value. 
     * @param value Value to set for the msdyn_defaultcanceledbookingstatus property.
     */
    public set msdyn_defaultcanceledbookingstatus(value: Bookingstatus | undefined) {
        this._msdyn_defaultcanceledbookingstatus = value;
    };
    /**
     * Gets the msdyn_defaultcrewstrategy property value. 
     * @returns a integer
     */
    public get msdyn_defaultcrewstrategy() {
        return this._msdyn_defaultcrewstrategy;
    };
    /**
     * Sets the msdyn_defaultcrewstrategy property value. 
     * @param value Value to set for the msdyn_defaultcrewstrategy property.
     */
    public set msdyn_defaultcrewstrategy(value: number | undefined) {
        this._msdyn_defaultcrewstrategy = value;
    };
    /**
     * Gets the msdyn_defaultradiusunit property value. 
     * @returns a boolean
     */
    public get msdyn_defaultradiusunit() {
        return this._msdyn_defaultradiusunit;
    };
    /**
     * Sets the msdyn_defaultradiusunit property value. 
     * @param value Value to set for the msdyn_defaultradiusunit property.
     */
    public set msdyn_defaultradiusunit(value: boolean | undefined) {
        this._msdyn_defaultradiusunit = value;
    };
    /**
     * Gets the msdyn_defaultradiusvalue property value. 
     * @returns a integer
     */
    public get msdyn_defaultradiusvalue() {
        return this._msdyn_defaultradiusvalue;
    };
    /**
     * Sets the msdyn_defaultradiusvalue property value. 
     * @param value Value to set for the msdyn_defaultradiusvalue property.
     */
    public set msdyn_defaultradiusvalue(value: number | undefined) {
        this._msdyn_defaultradiusvalue = value;
    };
    /**
     * Gets the msdyn_defaultscheduledbookingstatus property value. 
     * @returns a bookingstatus
     */
    public get msdyn_defaultscheduledbookingstatus() {
        return this._msdyn_defaultscheduledbookingstatus;
    };
    /**
     * Sets the msdyn_defaultscheduledbookingstatus property value. 
     * @param value Value to set for the msdyn_defaultscheduledbookingstatus property.
     */
    public set msdyn_defaultscheduledbookingstatus(value: Bookingstatus | undefined) {
        this._msdyn_defaultscheduledbookingstatus = value;
    };
    /**
     * Gets the msdyn_defaultwarehouse property value. 
     * @returns a msdyn_warehouse
     */
    public get msdyn_defaultwarehouse() {
        return this._msdyn_defaultwarehouse;
    };
    /**
     * Sets the msdyn_defaultwarehouse property value. 
     * @param value Value to set for the msdyn_defaultwarehouse property.
     */
    public set msdyn_defaultwarehouse(value: Msdyn_warehouse | undefined) {
        this._msdyn_defaultwarehouse = value;
    };
    /**
     * Gets the msdyn_defaultworkordercompletedstatus property value. 
     * @returns a integer
     */
    public get msdyn_defaultworkordercompletedstatus() {
        return this._msdyn_defaultworkordercompletedstatus;
    };
    /**
     * Sets the msdyn_defaultworkordercompletedstatus property value. 
     * @param value Value to set for the msdyn_defaultworkordercompletedstatus property.
     */
    public set msdyn_defaultworkordercompletedstatus(value: number | undefined) {
        this._msdyn_defaultworkordercompletedstatus = value;
    };
    /**
     * Gets the msdyn_disablecustomerassetvalidation property value. 
     * @returns a boolean
     */
    public get msdyn_disablecustomerassetvalidation() {
        return this._msdyn_disablecustomerassetvalidation;
    };
    /**
     * Sets the msdyn_disablecustomerassetvalidation property value. 
     * @param value Value to set for the msdyn_disablecustomerassetvalidation property.
     */
    public set msdyn_disablecustomerassetvalidation(value: boolean | undefined) {
        this._msdyn_disablecustomerassetvalidation = value;
    };
    /**
     * Gets the msdyn_disableremoteassistbookingstatuschanges property value. 
     * @returns a boolean
     */
    public get msdyn_disableremoteassistbookingstatuschanges() {
        return this._msdyn_disableremoteassistbookingstatuschanges;
    };
    /**
     * Sets the msdyn_disableremoteassistbookingstatuschanges property value. 
     * @param value Value to set for the msdyn_disableremoteassistbookingstatuschanges property.
     */
    public set msdyn_disableremoteassistbookingstatuschanges(value: boolean | undefined) {
        this._msdyn_disableremoteassistbookingstatuschanges = value;
    };
    /**
     * Gets the msdyn_enableaddresssuggestions property value. 
     * @returns a boolean
     */
    public get msdyn_enableaddresssuggestions() {
        return this._msdyn_enableaddresssuggestions;
    };
    /**
     * Sets the msdyn_enableaddresssuggestions property value. 
     * @param value Value to set for the msdyn_enableaddresssuggestions property.
     */
    public set msdyn_enableaddresssuggestions(value: boolean | undefined) {
        this._msdyn_enableaddresssuggestions = value;
    };
    /**
     * Gets the msdyn_enableincidenttyperecommendation property value. 
     * @returns a boolean
     */
    public get msdyn_enableincidenttyperecommendation() {
        return this._msdyn_enableincidenttyperecommendation;
    };
    /**
     * Sets the msdyn_enableincidenttyperecommendation property value. 
     * @param value Value to set for the msdyn_enableincidenttyperecommendation property.
     */
    public set msdyn_enableincidenttyperecommendation(value: boolean | undefined) {
        this._msdyn_enableincidenttyperecommendation = value;
    };
    /**
     * Gets the msdyn_enablelegacyscheduleassistant property value. 
     * @returns a boolean
     */
    public get msdyn_enablelegacyscheduleassistant() {
        return this._msdyn_enablelegacyscheduleassistant;
    };
    /**
     * Sets the msdyn_enablelegacyscheduleassistant property value. 
     * @param value Value to set for the msdyn_enablelegacyscheduleassistant property.
     */
    public set msdyn_enablelegacyscheduleassistant(value: boolean | undefined) {
        this._msdyn_enablelegacyscheduleassistant = value;
    };
    /**
     * Gets the msdyn_enablemainformdialogforsubgrids property value. 
     * @returns a boolean
     */
    public get msdyn_enablemainformdialogforsubgrids() {
        return this._msdyn_enablemainformdialogforsubgrids;
    };
    /**
     * Sets the msdyn_enablemainformdialogforsubgrids property value. 
     * @param value Value to set for the msdyn_enablemainformdialogforsubgrids property.
     */
    public set msdyn_enablemainformdialogforsubgrids(value: boolean | undefined) {
        this._msdyn_enablemainformdialogforsubgrids = value;
    };
    /**
     * Gets the msdyn_enablesuggestedduration property value. 
     * @returns a boolean
     */
    public get msdyn_enablesuggestedduration() {
        return this._msdyn_enablesuggestedduration;
    };
    /**
     * Sets the msdyn_enablesuggestedduration property value. 
     * @param value Value to set for the msdyn_enablesuggestedduration property.
     */
    public set msdyn_enablesuggestedduration(value: boolean | undefined) {
        this._msdyn_enablesuggestedduration = value;
    };
    /**
     * Gets the msdyn_enhancedbackgroundprocessing property value. 
     * @returns a boolean
     */
    public get msdyn_enhancedbackgroundprocessing() {
        return this._msdyn_enhancedbackgroundprocessing;
    };
    /**
     * Sets the msdyn_enhancedbackgroundprocessing property value. 
     * @param value Value to set for the msdyn_enhancedbackgroundprocessing property.
     */
    public set msdyn_enhancedbackgroundprocessing(value: boolean | undefined) {
        this._msdyn_enhancedbackgroundprocessing = value;
    };
    /**
     * Gets the msdyn_entitynumberlength property value. 
     * @returns a integer
     */
    public get msdyn_entitynumberlength() {
        return this._msdyn_entitynumberlength;
    };
    /**
     * Sets the msdyn_entitynumberlength property value. 
     * @param value Value to set for the msdyn_entitynumberlength property.
     */
    public set msdyn_entitynumberlength(value: number | undefined) {
        this._msdyn_entitynumberlength = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_fieldservicesetting_ActivityPointers() {
        return this._msdyn_fieldservicesetting_ActivityPointers;
    };
    /**
     * Sets the msdyn_fieldservicesetting_ActivityPointers property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_ActivityPointers property.
     */
    public set msdyn_fieldservicesetting_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_fieldservicesetting_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_fieldservicesetting_Annotations() {
        return this._msdyn_fieldservicesetting_Annotations;
    };
    /**
     * Sets the msdyn_fieldservicesetting_Annotations property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_Annotations property.
     */
    public set msdyn_fieldservicesetting_Annotations(value: Annotation[] | undefined) {
        this._msdyn_fieldservicesetting_Annotations = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_fieldservicesetting_Appointments() {
        return this._msdyn_fieldservicesetting_Appointments;
    };
    /**
     * Sets the msdyn_fieldservicesetting_Appointments property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_Appointments property.
     */
    public set msdyn_fieldservicesetting_Appointments(value: Appointment[] | undefined) {
        this._msdyn_fieldservicesetting_Appointments = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_fieldservicesetting_AsyncOperations() {
        return this._msdyn_fieldservicesetting_AsyncOperations;
    };
    /**
     * Sets the msdyn_fieldservicesetting_AsyncOperations property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_AsyncOperations property.
     */
    public set msdyn_fieldservicesetting_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_fieldservicesetting_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_fieldservicesetting_BulkDeleteFailures() {
        return this._msdyn_fieldservicesetting_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_fieldservicesetting_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_BulkDeleteFailures property.
     */
    public set msdyn_fieldservicesetting_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_fieldservicesetting_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_Emails property value. 
     * @returns a email
     */
    public get msdyn_fieldservicesetting_Emails() {
        return this._msdyn_fieldservicesetting_Emails;
    };
    /**
     * Sets the msdyn_fieldservicesetting_Emails property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_Emails property.
     */
    public set msdyn_fieldservicesetting_Emails(value: Email[] | undefined) {
        this._msdyn_fieldservicesetting_Emails = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_fieldservicesetting_Faxes() {
        return this._msdyn_fieldservicesetting_Faxes;
    };
    /**
     * Sets the msdyn_fieldservicesetting_Faxes property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_Faxes property.
     */
    public set msdyn_fieldservicesetting_Faxes(value: Fax[] | undefined) {
        this._msdyn_fieldservicesetting_Faxes = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_Letters property value. 
     * @returns a letter
     */
    public get msdyn_fieldservicesetting_Letters() {
        return this._msdyn_fieldservicesetting_Letters;
    };
    /**
     * Sets the msdyn_fieldservicesetting_Letters property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_Letters property.
     */
    public set msdyn_fieldservicesetting_Letters(value: Letter[] | undefined) {
        this._msdyn_fieldservicesetting_Letters = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_fieldservicesetting_MailboxTrackingFolders() {
        return this._msdyn_fieldservicesetting_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_fieldservicesetting_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_MailboxTrackingFolders property.
     */
    public set msdyn_fieldservicesetting_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_fieldservicesetting_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_fieldservicesetting_msdyn_approvals() {
        return this._msdyn_fieldservicesetting_msdyn_approvals;
    };
    /**
     * Sets the msdyn_fieldservicesetting_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_msdyn_approvals property.
     */
    public set msdyn_fieldservicesetting_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_fieldservicesetting_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_fieldservicesetting_msdyn_bookingalerts() {
        return this._msdyn_fieldservicesetting_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_fieldservicesetting_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_msdyn_bookingalerts property.
     */
    public set msdyn_fieldservicesetting_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_fieldservicesetting_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_fieldservicesetting_msdyn_ocliveworkitems() {
        return this._msdyn_fieldservicesetting_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_fieldservicesetting_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_msdyn_ocliveworkitems property.
     */
    public set msdyn_fieldservicesetting_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_fieldservicesetting_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_fieldservicesetting_msdyn_ocoutboundmessages() {
        return this._msdyn_fieldservicesetting_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_fieldservicesetting_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_msdyn_ocoutboundmessages property.
     */
    public set msdyn_fieldservicesetting_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_fieldservicesetting_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_fieldservicesetting_msdyn_ocsessions() {
        return this._msdyn_fieldservicesetting_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_fieldservicesetting_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_msdyn_ocsessions property.
     */
    public set msdyn_fieldservicesetting_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_fieldservicesetting_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_fieldservicesetting_msfp_alerts() {
        return this._msdyn_fieldservicesetting_msfp_alerts;
    };
    /**
     * Sets the msdyn_fieldservicesetting_msfp_alerts property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_msfp_alerts property.
     */
    public set msdyn_fieldservicesetting_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_fieldservicesetting_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_fieldservicesetting_msfp_surveyinvites() {
        return this._msdyn_fieldservicesetting_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_fieldservicesetting_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_msfp_surveyinvites property.
     */
    public set msdyn_fieldservicesetting_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_fieldservicesetting_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_fieldservicesetting_msfp_surveyresponses() {
        return this._msdyn_fieldservicesetting_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_fieldservicesetting_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_msfp_surveyresponses property.
     */
    public set msdyn_fieldservicesetting_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_fieldservicesetting_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_fieldservicesetting_PhoneCalls() {
        return this._msdyn_fieldservicesetting_PhoneCalls;
    };
    /**
     * Sets the msdyn_fieldservicesetting_PhoneCalls property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_PhoneCalls property.
     */
    public set msdyn_fieldservicesetting_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_fieldservicesetting_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_fieldservicesetting_PrincipalObjectAttributeAccesses() {
        return this._msdyn_fieldservicesetting_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_fieldservicesetting_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_fieldservicesetting_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_fieldservicesetting_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_fieldservicesetting_ProcessSession() {
        return this._msdyn_fieldservicesetting_ProcessSession;
    };
    /**
     * Sets the msdyn_fieldservicesetting_ProcessSession property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_ProcessSession property.
     */
    public set msdyn_fieldservicesetting_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_fieldservicesetting_ProcessSession = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_fieldservicesetting_RecurringAppointmentMasters() {
        return this._msdyn_fieldservicesetting_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_fieldservicesetting_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_RecurringAppointmentMasters property.
     */
    public set msdyn_fieldservicesetting_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_fieldservicesetting_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_fieldservicesetting_ServiceAppointments() {
        return this._msdyn_fieldservicesetting_ServiceAppointments;
    };
    /**
     * Sets the msdyn_fieldservicesetting_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_ServiceAppointments property.
     */
    public set msdyn_fieldservicesetting_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_fieldservicesetting_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_fieldservicesetting_SocialActivities() {
        return this._msdyn_fieldservicesetting_SocialActivities;
    };
    /**
     * Sets the msdyn_fieldservicesetting_SocialActivities property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_SocialActivities property.
     */
    public set msdyn_fieldservicesetting_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_fieldservicesetting_SocialActivities = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_fieldservicesetting_SyncErrors() {
        return this._msdyn_fieldservicesetting_SyncErrors;
    };
    /**
     * Sets the msdyn_fieldservicesetting_SyncErrors property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_SyncErrors property.
     */
    public set msdyn_fieldservicesetting_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_fieldservicesetting_SyncErrors = value;
    };
    /**
     * Gets the msdyn_fieldservicesetting_Tasks property value. 
     * @returns a task
     */
    public get msdyn_fieldservicesetting_Tasks() {
        return this._msdyn_fieldservicesetting_Tasks;
    };
    /**
     * Sets the msdyn_fieldservicesetting_Tasks property value. 
     * @param value Value to set for the msdyn_fieldservicesetting_Tasks property.
     */
    public set msdyn_fieldservicesetting_Tasks(value: Task[] | undefined) {
        this._msdyn_fieldservicesetting_Tasks = value;
    };
    /**
     * Gets the msdyn_fieldservicesettingid property value. 
     * @returns a string
     */
    public get msdyn_fieldservicesettingid() {
        return this._msdyn_fieldservicesettingid;
    };
    /**
     * Sets the msdyn_fieldservicesettingid property value. 
     * @param value Value to set for the msdyn_fieldservicesettingid property.
     */
    public set msdyn_fieldservicesettingid(value: string | undefined) {
        this._msdyn_fieldservicesettingid = value;
    };
    /**
     * Gets the msdyn_generateactuals property value. 
     * @returns a boolean
     */
    public get msdyn_generateactuals() {
        return this._msdyn_generateactuals;
    };
    /**
     * Sets the msdyn_generateactuals property value. 
     * @param value Value to set for the msdyn_generateactuals property.
     */
    public set msdyn_generateactuals(value: boolean | undefined) {
        this._msdyn_generateactuals = value;
    };
    /**
     * Gets the msdyn_generateagreementinvoicesxdaysinadvance property value. 
     * @returns a integer
     */
    public get msdyn_generateagreementinvoicesxdaysinadvance() {
        return this._msdyn_generateagreementinvoicesxdaysinadvance;
    };
    /**
     * Sets the msdyn_generateagreementinvoicesxdaysinadvance property value. 
     * @param value Value to set for the msdyn_generateagreementinvoicesxdaysinadvance property.
     */
    public set msdyn_generateagreementinvoicesxdaysinadvance(value: number | undefined) {
        this._msdyn_generateagreementinvoicesxdaysinadvance = value;
    };
    /**
     * Gets the msdyn_generateagreementwoxdaysinadvance property value. 
     * @returns a integer
     */
    public get msdyn_generateagreementwoxdaysinadvance() {
        return this._msdyn_generateagreementwoxdaysinadvance;
    };
    /**
     * Sets the msdyn_generateagreementwoxdaysinadvance property value. 
     * @param value Value to set for the msdyn_generateagreementwoxdaysinadvance property.
     */
    public set msdyn_generateagreementwoxdaysinadvance(value: number | undefined) {
        this._msdyn_generateagreementwoxdaysinadvance = value;
    };
    /**
     * Gets the msdyn_generatebookingdatesxmonthsinadvance property value. 
     * @returns a integer
     */
    public get msdyn_generatebookingdatesxmonthsinadvance() {
        return this._msdyn_generatebookingdatesxmonthsinadvance;
    };
    /**
     * Sets the msdyn_generatebookingdatesxmonthsinadvance property value. 
     * @param value Value to set for the msdyn_generatebookingdatesxmonthsinadvance property.
     */
    public set msdyn_generatebookingdatesxmonthsinadvance(value: number | undefined) {
        this._msdyn_generatebookingdatesxmonthsinadvance = value;
    };
    /**
     * Gets the msdyn_generateinvoicedatesxmonthsinadvance property value. 
     * @returns a integer
     */
    public get msdyn_generateinvoicedatesxmonthsinadvance() {
        return this._msdyn_generateinvoicedatesxmonthsinadvance;
    };
    /**
     * Sets the msdyn_generateinvoicedatesxmonthsinadvance property value. 
     * @param value Value to set for the msdyn_generateinvoicedatesxmonthsinadvance property.
     */
    public set msdyn_generateinvoicedatesxmonthsinadvance(value: number | undefined) {
        this._msdyn_generateinvoicedatesxmonthsinadvance = value;
    };
    /**
     * Gets the msdyn_gpslocationexpiresafterxminutes property value. 
     * @returns a integer
     */
    public get msdyn_gpslocationexpiresafterxminutes() {
        return this._msdyn_gpslocationexpiresafterxminutes;
    };
    /**
     * Sets the msdyn_gpslocationexpiresafterxminutes property value. 
     * @param value Value to set for the msdyn_gpslocationexpiresafterxminutes property.
     */
    public set msdyn_gpslocationexpiresafterxminutes(value: number | undefined) {
        this._msdyn_gpslocationexpiresafterxminutes = value;
    };
    /**
     * Gets the msdyn_historicaldatafilter property value. 
     * @returns a integer
     */
    public get msdyn_historicaldatafilter() {
        return this._msdyn_historicaldatafilter;
    };
    /**
     * Sets the msdyn_historicaldatafilter property value. 
     * @param value Value to set for the msdyn_historicaldatafilter property.
     */
    public set msdyn_historicaldatafilter(value: number | undefined) {
        this._msdyn_historicaldatafilter = value;
    };
    /**
     * Gets the msdyn_inspectionanalyticsenabled property value. 
     * @returns a boolean
     */
    public get msdyn_inspectionanalyticsenabled() {
        return this._msdyn_inspectionanalyticsenabled;
    };
    /**
     * Sets the msdyn_inspectionanalyticsenabled property value. 
     * @param value Value to set for the msdyn_inspectionanalyticsenabled property.
     */
    public set msdyn_inspectionanalyticsenabled(value: boolean | undefined) {
        this._msdyn_inspectionanalyticsenabled = value;
    };
    /**
     * Gets the msdyn_inspectionanalyticsenabledon property value. 
     * @returns a Date
     */
    public get msdyn_inspectionanalyticsenabledon() {
        return this._msdyn_inspectionanalyticsenabledon;
    };
    /**
     * Sets the msdyn_inspectionanalyticsenabledon property value. 
     * @param value Value to set for the msdyn_inspectionanalyticsenabledon property.
     */
    public set msdyn_inspectionanalyticsenabledon(value: Date | undefined) {
        this._msdyn_inspectionanalyticsenabledon = value;
    };
    /**
     * Gets the msdyn_inspectionanalyticsfrequency property value. 
     * @returns a integer
     */
    public get msdyn_inspectionanalyticsfrequency() {
        return this._msdyn_inspectionanalyticsfrequency;
    };
    /**
     * Sets the msdyn_inspectionanalyticsfrequency property value. 
     * @param value Value to set for the msdyn_inspectionanalyticsfrequency property.
     */
    public set msdyn_inspectionanalyticsfrequency(value: number | undefined) {
        this._msdyn_inspectionanalyticsfrequency = value;
    };
    /**
     * Gets the msdyn_inspectionanalyticsrecommendedtime property value. 
     * @returns a Date
     */
    public get msdyn_inspectionanalyticsrecommendedtime() {
        return this._msdyn_inspectionanalyticsrecommendedtime;
    };
    /**
     * Sets the msdyn_inspectionanalyticsrecommendedtime property value. 
     * @param value Value to set for the msdyn_inspectionanalyticsrecommendedtime property.
     */
    public set msdyn_inspectionanalyticsrecommendedtime(value: Date | undefined) {
        this._msdyn_inspectionanalyticsrecommendedtime = value;
    };
    /**
     * Gets the msdyn_internalflags property value. 
     * @returns a string
     */
    public get msdyn_internalflags() {
        return this._msdyn_internalflags;
    };
    /**
     * Sets the msdyn_internalflags property value. 
     * @param value Value to set for the msdyn_internalflags property.
     */
    public set msdyn_internalflags(value: string | undefined) {
        this._msdyn_internalflags = value;
    };
    /**
     * Gets the msdyn_inventoryadjustmentprefix property value. 
     * @returns a string
     */
    public get msdyn_inventoryadjustmentprefix() {
        return this._msdyn_inventoryadjustmentprefix;
    };
    /**
     * Sets the msdyn_inventoryadjustmentprefix property value. 
     * @param value Value to set for the msdyn_inventoryadjustmentprefix property.
     */
    public set msdyn_inventoryadjustmentprefix(value: string | undefined) {
        this._msdyn_inventoryadjustmentprefix = value;
    };
    /**
     * Gets the msdyn_inventoryadjustmentstartingnumber property value. 
     * @returns a integer
     */
    public get msdyn_inventoryadjustmentstartingnumber() {
        return this._msdyn_inventoryadjustmentstartingnumber;
    };
    /**
     * Sets the msdyn_inventoryadjustmentstartingnumber property value. 
     * @param value Value to set for the msdyn_inventoryadjustmentstartingnumber property.
     */
    public set msdyn_inventoryadjustmentstartingnumber(value: number | undefined) {
        this._msdyn_inventoryadjustmentstartingnumber = value;
    };
    /**
     * Gets the msdyn_inventorytransferprefix property value. 
     * @returns a string
     */
    public get msdyn_inventorytransferprefix() {
        return this._msdyn_inventorytransferprefix;
    };
    /**
     * Sets the msdyn_inventorytransferprefix property value. 
     * @param value Value to set for the msdyn_inventorytransferprefix property.
     */
    public set msdyn_inventorytransferprefix(value: string | undefined) {
        this._msdyn_inventorytransferprefix = value;
    };
    /**
     * Gets the msdyn_inventorytransferstartingnumber property value. 
     * @returns a integer
     */
    public get msdyn_inventorytransferstartingnumber() {
        return this._msdyn_inventorytransferstartingnumber;
    };
    /**
     * Sets the msdyn_inventorytransferstartingnumber property value. 
     * @param value Value to set for the msdyn_inventorytransferstartingnumber property.
     */
    public set msdyn_inventorytransferstartingnumber(value: number | undefined) {
        this._msdyn_inventorytransferstartingnumber = value;
    };
    /**
     * Gets the msdyn_lastrunofincidenttyperecommendation property value. 
     * @returns a Date
     */
    public get msdyn_lastrunofincidenttyperecommendation() {
        return this._msdyn_lastrunofincidenttyperecommendation;
    };
    /**
     * Sets the msdyn_lastrunofincidenttyperecommendation property value. 
     * @param value Value to set for the msdyn_lastrunofincidenttyperecommendation property.
     */
    public set msdyn_lastrunofincidenttyperecommendation(value: Date | undefined) {
        this._msdyn_lastrunofincidenttyperecommendation = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_notificationtimeout property value. 
     * @returns a integer
     */
    public get msdyn_notificationtimeout() {
        return this._msdyn_notificationtimeout;
    };
    /**
     * Sets the msdyn_notificationtimeout property value. 
     * @param value Value to set for the msdyn_notificationtimeout property.
     */
    public set msdyn_notificationtimeout(value: number | undefined) {
        this._msdyn_notificationtimeout = value;
    };
    /**
     * Gets the msdyn_overtimepaytype property value. 
     * @returns a msdyn_resourcepaytype
     */
    public get msdyn_overtimepaytype() {
        return this._msdyn_overtimepaytype;
    };
    /**
     * Sets the msdyn_overtimepaytype property value. 
     * @param value Value to set for the msdyn_overtimepaytype property.
     */
    public set msdyn_overtimepaytype(value: Msdyn_resourcepaytype | undefined) {
        this._msdyn_overtimepaytype = value;
    };
    /**
     * Gets the msdyn_postponenumbercleanupuntil property value. 
     * @returns a Date
     */
    public get msdyn_postponenumbercleanupuntil() {
        return this._msdyn_postponenumbercleanupuntil;
    };
    /**
     * Sets the msdyn_postponenumbercleanupuntil property value. 
     * @param value Value to set for the msdyn_postponenumbercleanupuntil property.
     */
    public set msdyn_postponenumbercleanupuntil(value: Date | undefined) {
        this._msdyn_postponenumbercleanupuntil = value;
    };
    /**
     * Gets the msdyn_productcostorder property value. 
     * @returns a integer
     */
    public get msdyn_productcostorder() {
        return this._msdyn_productcostorder;
    };
    /**
     * Sets the msdyn_productcostorder property value. 
     * @param value Value to set for the msdyn_productcostorder property.
     */
    public set msdyn_productcostorder(value: number | undefined) {
        this._msdyn_productcostorder = value;
    };
    /**
     * Gets the msdyn_purchaseorderapprovalrequired property value. 
     * @returns a boolean
     */
    public get msdyn_purchaseorderapprovalrequired() {
        return this._msdyn_purchaseorderapprovalrequired;
    };
    /**
     * Sets the msdyn_purchaseorderapprovalrequired property value. 
     * @param value Value to set for the msdyn_purchaseorderapprovalrequired property.
     */
    public set msdyn_purchaseorderapprovalrequired(value: boolean | undefined) {
        this._msdyn_purchaseorderapprovalrequired = value;
    };
    /**
     * Gets the msdyn_purchaseorderprefix property value. 
     * @returns a string
     */
    public get msdyn_purchaseorderprefix() {
        return this._msdyn_purchaseorderprefix;
    };
    /**
     * Sets the msdyn_purchaseorderprefix property value. 
     * @param value Value to set for the msdyn_purchaseorderprefix property.
     */
    public set msdyn_purchaseorderprefix(value: string | undefined) {
        this._msdyn_purchaseorderprefix = value;
    };
    /**
     * Gets the msdyn_purchaseorderstartingnumber property value. 
     * @returns a integer
     */
    public get msdyn_purchaseorderstartingnumber() {
        return this._msdyn_purchaseorderstartingnumber;
    };
    /**
     * Sets the msdyn_purchaseorderstartingnumber property value. 
     * @param value Value to set for the msdyn_purchaseorderstartingnumber property.
     */
    public set msdyn_purchaseorderstartingnumber(value: number | undefined) {
        this._msdyn_purchaseorderstartingnumber = value;
    };
    /**
     * Gets the msdyn_resourcessynchronizationtimeout property value. 
     * @returns a integer
     */
    public get msdyn_resourcessynchronizationtimeout() {
        return this._msdyn_resourcessynchronizationtimeout;
    };
    /**
     * Sets the msdyn_resourcessynchronizationtimeout property value. 
     * @param value Value to set for the msdyn_resourcessynchronizationtimeout property.
     */
    public set msdyn_resourcessynchronizationtimeout(value: number | undefined) {
        this._msdyn_resourcessynchronizationtimeout = value;
    };
    /**
     * Gets the msdyn_returntopxrecommendations property value. 
     * @returns a integer
     */
    public get msdyn_returntopxrecommendations() {
        return this._msdyn_returntopxrecommendations;
    };
    /**
     * Sets the msdyn_returntopxrecommendations property value. 
     * @param value Value to set for the msdyn_returntopxrecommendations property.
     */
    public set msdyn_returntopxrecommendations(value: number | undefined) {
        this._msdyn_returntopxrecommendations = value;
    };
    /**
     * Gets the msdyn_rmaprefix property value. 
     * @returns a string
     */
    public get msdyn_rmaprefix() {
        return this._msdyn_rmaprefix;
    };
    /**
     * Sets the msdyn_rmaprefix property value. 
     * @param value Value to set for the msdyn_rmaprefix property.
     */
    public set msdyn_rmaprefix(value: string | undefined) {
        this._msdyn_rmaprefix = value;
    };
    /**
     * Gets the msdyn_rmastartingnumber property value. 
     * @returns a integer
     */
    public get msdyn_rmastartingnumber() {
        return this._msdyn_rmastartingnumber;
    };
    /**
     * Sets the msdyn_rmastartingnumber property value. 
     * @param value Value to set for the msdyn_rmastartingnumber property.
     */
    public set msdyn_rmastartingnumber(value: number | undefined) {
        this._msdyn_rmastartingnumber = value;
    };
    /**
     * Gets the msdyn_rtvprefix property value. 
     * @returns a string
     */
    public get msdyn_rtvprefix() {
        return this._msdyn_rtvprefix;
    };
    /**
     * Sets the msdyn_rtvprefix property value. 
     * @param value Value to set for the msdyn_rtvprefix property.
     */
    public set msdyn_rtvprefix(value: string | undefined) {
        this._msdyn_rtvprefix = value;
    };
    /**
     * Gets the msdyn_rtvstartingnumber property value. 
     * @returns a integer
     */
    public get msdyn_rtvstartingnumber() {
        return this._msdyn_rtvstartingnumber;
    };
    /**
     * Sets the msdyn_rtvstartingnumber property value. 
     * @param value Value to set for the msdyn_rtvstartingnumber property.
     */
    public set msdyn_rtvstartingnumber(value: number | undefined) {
        this._msdyn_rtvstartingnumber = value;
    };
    /**
     * Gets the msdyn_runfrequencyofincidenttyperecommendation property value. 
     * @returns a integer
     */
    public get msdyn_runfrequencyofincidenttyperecommendation() {
        return this._msdyn_runfrequencyofincidenttyperecommendation;
    };
    /**
     * Sets the msdyn_runfrequencyofincidenttyperecommendation property value. 
     * @param value Value to set for the msdyn_runfrequencyofincidenttyperecommendation property.
     */
    public set msdyn_runfrequencyofincidenttyperecommendation(value: number | undefined) {
        this._msdyn_runfrequencyofincidenttyperecommendation = value;
    };
    /**
     * Gets the msdyn_saautofilterserviceterritory property value. 
     * @returns a boolean
     */
    public get msdyn_saautofilterserviceterritory() {
        return this._msdyn_saautofilterserviceterritory;
    };
    /**
     * Sets the msdyn_saautofilterserviceterritory property value. 
     * @param value Value to set for the msdyn_saautofilterserviceterritory property.
     */
    public set msdyn_saautofilterserviceterritory(value: boolean | undefined) {
        this._msdyn_saautofilterserviceterritory = value;
    };
    /**
     * Gets the msdyn_schedulerbusinessunitdetailsview property value. 
     * @returns a string
     */
    public get msdyn_schedulerbusinessunitdetailsview() {
        return this._msdyn_schedulerbusinessunitdetailsview;
    };
    /**
     * Sets the msdyn_schedulerbusinessunitdetailsview property value. 
     * @param value Value to set for the msdyn_schedulerbusinessunitdetailsview property.
     */
    public set msdyn_schedulerbusinessunitdetailsview(value: string | undefined) {
        this._msdyn_schedulerbusinessunitdetailsview = value;
    };
    /**
     * Gets the msdyn_schedulerbusinessunittooltipview property value. 
     * @returns a string
     */
    public get msdyn_schedulerbusinessunittooltipview() {
        return this._msdyn_schedulerbusinessunittooltipview;
    };
    /**
     * Sets the msdyn_schedulerbusinessunittooltipview property value. 
     * @param value Value to set for the msdyn_schedulerbusinessunittooltipview property.
     */
    public set msdyn_schedulerbusinessunittooltipview(value: string | undefined) {
        this._msdyn_schedulerbusinessunittooltipview = value;
    };
    /**
     * Gets the msdyn_schedulercoredetailsview property value. 
     * @returns a string
     */
    public get msdyn_schedulercoredetailsview() {
        return this._msdyn_schedulercoredetailsview;
    };
    /**
     * Sets the msdyn_schedulercoredetailsview property value. 
     * @param value Value to set for the msdyn_schedulercoredetailsview property.
     */
    public set msdyn_schedulercoredetailsview(value: string | undefined) {
        this._msdyn_schedulercoredetailsview = value;
    };
    /**
     * Gets the msdyn_schedulercoreslottexttemplate property value. 
     * @returns a string
     */
    public get msdyn_schedulercoreslottexttemplate() {
        return this._msdyn_schedulercoreslottexttemplate;
    };
    /**
     * Sets the msdyn_schedulercoreslottexttemplate property value. 
     * @param value Value to set for the msdyn_schedulercoreslottexttemplate property.
     */
    public set msdyn_schedulercoreslottexttemplate(value: string | undefined) {
        this._msdyn_schedulercoreslottexttemplate = value;
    };
    /**
     * Gets the msdyn_schedulercoretooltipview property value. 
     * @returns a string
     */
    public get msdyn_schedulercoretooltipview() {
        return this._msdyn_schedulercoretooltipview;
    };
    /**
     * Sets the msdyn_schedulercoretooltipview property value. 
     * @param value Value to set for the msdyn_schedulercoretooltipview property.
     */
    public set msdyn_schedulercoretooltipview(value: string | undefined) {
        this._msdyn_schedulercoretooltipview = value;
    };
    /**
     * Gets the msdyn_schedulerfieldservicedetailsview property value. 
     * @returns a string
     */
    public get msdyn_schedulerfieldservicedetailsview() {
        return this._msdyn_schedulerfieldservicedetailsview;
    };
    /**
     * Sets the msdyn_schedulerfieldservicedetailsview property value. 
     * @param value Value to set for the msdyn_schedulerfieldservicedetailsview property.
     */
    public set msdyn_schedulerfieldservicedetailsview(value: string | undefined) {
        this._msdyn_schedulerfieldservicedetailsview = value;
    };
    /**
     * Gets the msdyn_schedulerfieldserviceslottexttemplate property value. 
     * @returns a string
     */
    public get msdyn_schedulerfieldserviceslottexttemplate() {
        return this._msdyn_schedulerfieldserviceslottexttemplate;
    };
    /**
     * Sets the msdyn_schedulerfieldserviceslottexttemplate property value. 
     * @param value Value to set for the msdyn_schedulerfieldserviceslottexttemplate property.
     */
    public set msdyn_schedulerfieldserviceslottexttemplate(value: string | undefined) {
        this._msdyn_schedulerfieldserviceslottexttemplate = value;
    };
    /**
     * Gets the msdyn_schedulerfieldservicetooltipview property value. 
     * @returns a string
     */
    public get msdyn_schedulerfieldservicetooltipview() {
        return this._msdyn_schedulerfieldservicetooltipview;
    };
    /**
     * Sets the msdyn_schedulerfieldservicetooltipview property value. 
     * @param value Value to set for the msdyn_schedulerfieldservicetooltipview property.
     */
    public set msdyn_schedulerfieldservicetooltipview(value: string | undefined) {
        this._msdyn_schedulerfieldservicetooltipview = value;
    };
    /**
     * Gets the msdyn_schedulerresourcedetailsview property value. 
     * @returns a string
     */
    public get msdyn_schedulerresourcedetailsview() {
        return this._msdyn_schedulerresourcedetailsview;
    };
    /**
     * Sets the msdyn_schedulerresourcedetailsview property value. 
     * @param value Value to set for the msdyn_schedulerresourcedetailsview property.
     */
    public set msdyn_schedulerresourcedetailsview(value: string | undefined) {
        this._msdyn_schedulerresourcedetailsview = value;
    };
    /**
     * Gets the msdyn_schedulerresourcetooltipview property value. 
     * @returns a string
     */
    public get msdyn_schedulerresourcetooltipview() {
        return this._msdyn_schedulerresourcetooltipview;
    };
    /**
     * Sets the msdyn_schedulerresourcetooltipview property value. 
     * @param value Value to set for the msdyn_schedulerresourcetooltipview property.
     */
    public set msdyn_schedulerresourcetooltipview(value: string | undefined) {
        this._msdyn_schedulerresourcetooltipview = value;
    };
    /**
     * Gets the msdyn_schedulerunscheduledview property value. 
     * @returns a string
     */
    public get msdyn_schedulerunscheduledview() {
        return this._msdyn_schedulerunscheduledview;
    };
    /**
     * Sets the msdyn_schedulerunscheduledview property value. 
     * @param value Value to set for the msdyn_schedulerunscheduledview property.
     */
    public set msdyn_schedulerunscheduledview(value: string | undefined) {
        this._msdyn_schedulerunscheduledview = value;
    };
    /**
     * Gets the msdyn_sdkapimapkey property value. 
     * @returns a string
     */
    public get msdyn_sdkapimapkey() {
        return this._msdyn_sdkapimapkey;
    };
    /**
     * Sets the msdyn_sdkapimapkey property value. 
     * @param value Value to set for the msdyn_sdkapimapkey property.
     */
    public set msdyn_sdkapimapkey(value: string | undefined) {
        this._msdyn_sdkapimapkey = value;
    };
    /**
     * Gets the msdyn_showsimplifiedworkordercommands property value. 
     * @returns a boolean
     */
    public get msdyn_showsimplifiedworkordercommands() {
        return this._msdyn_showsimplifiedworkordercommands;
    };
    /**
     * Sets the msdyn_showsimplifiedworkordercommands property value. 
     * @param value Value to set for the msdyn_showsimplifiedworkordercommands property.
     */
    public set msdyn_showsimplifiedworkordercommands(value: boolean | undefined) {
        this._msdyn_showsimplifiedworkordercommands = value;
    };
    /**
     * Gets the msdyn_suggestreparentingcustomerassets property value. 
     * @returns a boolean
     */
    public get msdyn_suggestreparentingcustomerassets() {
        return this._msdyn_suggestreparentingcustomerassets;
    };
    /**
     * Sets the msdyn_suggestreparentingcustomerassets property value. 
     * @param value Value to set for the msdyn_suggestreparentingcustomerassets property.
     */
    public set msdyn_suggestreparentingcustomerassets(value: boolean | undefined) {
        this._msdyn_suggestreparentingcustomerassets = value;
    };
    /**
     * Gets the msdyn_timecostactualssource property value. 
     * @returns a integer
     */
    public get msdyn_timecostactualssource() {
        return this._msdyn_timecostactualssource;
    };
    /**
     * Sets the msdyn_timecostactualssource property value. 
     * @param value Value to set for the msdyn_timecostactualssource property.
     */
    public set msdyn_timecostactualssource(value: number | undefined) {
        this._msdyn_timecostactualssource = value;
    };
    /**
     * Gets the msdyn_timeentrygenerationstrategy property value. 
     * @returns a integer
     */
    public get msdyn_timeentrygenerationstrategy() {
        return this._msdyn_timeentrygenerationstrategy;
    };
    /**
     * Sets the msdyn_timeentrygenerationstrategy property value. 
     * @param value Value to set for the msdyn_timeentrygenerationstrategy property.
     */
    public set msdyn_timeentrygenerationstrategy(value: number | undefined) {
        this._msdyn_timeentrygenerationstrategy = value;
    };
    /**
     * Gets the msdyn_timestampfrequency property value. 
     * @returns a integer
     */
    public get msdyn_timestampfrequency() {
        return this._msdyn_timestampfrequency;
    };
    /**
     * Sets the msdyn_timestampfrequency property value. 
     * @param value Value to set for the msdyn_timestampfrequency property.
     */
    public set msdyn_timestampfrequency(value: number | undefined) {
        this._msdyn_timestampfrequency = value;
    };
    /**
     * Gets the msdyn_travelchargeitemid property value. 
     * @returns a product
     */
    public get msdyn_travelchargeitemid() {
        return this._msdyn_travelchargeitemid;
    };
    /**
     * Sets the msdyn_travelchargeitemid property value. 
     * @param value Value to set for the msdyn_travelchargeitemid property.
     */
    public set msdyn_travelchargeitemid(value: Product | undefined) {
        this._msdyn_travelchargeitemid = value;
    };
    /**
     * Gets the msdyn_travelpaytype property value. 
     * @returns a msdyn_resourcepaytype
     */
    public get msdyn_travelpaytype() {
        return this._msdyn_travelpaytype;
    };
    /**
     * Sets the msdyn_travelpaytype property value. 
     * @param value Value to set for the msdyn_travelpaytype property.
     */
    public set msdyn_travelpaytype(value: Msdyn_resourcepaytype | undefined) {
        this._msdyn_travelpaytype = value;
    };
    /**
     * Gets the msdyn_traveltimerescheduling property value. 
     * @returns a boolean
     */
    public get msdyn_traveltimerescheduling() {
        return this._msdyn_traveltimerescheduling;
    };
    /**
     * Sets the msdyn_traveltimerescheduling property value. 
     * @param value Value to set for the msdyn_traveltimerescheduling property.
     */
    public set msdyn_traveltimerescheduling(value: boolean | undefined) {
        this._msdyn_traveltimerescheduling = value;
    };
    /**
     * Gets the msdyn_undefinedbookinglocation property value. 
     * @returns a integer
     */
    public get msdyn_undefinedbookinglocation() {
        return this._msdyn_undefinedbookinglocation;
    };
    /**
     * Sets the msdyn_undefinedbookinglocation property value. 
     * @param value Value to set for the msdyn_undefinedbookinglocation property.
     */
    public set msdyn_undefinedbookinglocation(value: number | undefined) {
        this._msdyn_undefinedbookinglocation = value;
    };
    /**
     * Gets the msdyn_unscheduledwotooltipsviewid property value. 
     * @returns a string
     */
    public get msdyn_unscheduledwotooltipsviewid() {
        return this._msdyn_unscheduledwotooltipsviewid;
    };
    /**
     * Sets the msdyn_unscheduledwotooltipsviewid property value. 
     * @param value Value to set for the msdyn_unscheduledwotooltipsviewid property.
     */
    public set msdyn_unscheduledwotooltipsviewid(value: string | undefined) {
        this._msdyn_unscheduledwotooltipsviewid = value;
    };
    /**
     * Gets the msdyn_useofproductsoutofstock property value. 
     * @returns a integer
     */
    public get msdyn_useofproductsoutofstock() {
        return this._msdyn_useofproductsoutofstock;
    };
    /**
     * Sets the msdyn_useofproductsoutofstock property value. 
     * @param value Value to set for the msdyn_useofproductsoutofstock property.
     */
    public set msdyn_useofproductsoutofstock(value: number | undefined) {
        this._msdyn_useofproductsoutofstock = value;
    };
    /**
     * Gets the msdyn_workorderinvoicecreation property value. 
     * @returns a integer
     */
    public get msdyn_workorderinvoicecreation() {
        return this._msdyn_workorderinvoicecreation;
    };
    /**
     * Sets the msdyn_workorderinvoicecreation property value. 
     * @param value Value to set for the msdyn_workorderinvoicecreation property.
     */
    public set msdyn_workorderinvoicecreation(value: number | undefined) {
        this._msdyn_workorderinvoicecreation = value;
    };
    /**
     * Gets the msdyn_workorderprefix property value. 
     * @returns a string
     */
    public get msdyn_workorderprefix() {
        return this._msdyn_workorderprefix;
    };
    /**
     * Sets the msdyn_workorderprefix property value. 
     * @param value Value to set for the msdyn_workorderprefix property.
     */
    public set msdyn_workorderprefix(value: string | undefined) {
        this._msdyn_workorderprefix = value;
    };
    /**
     * Gets the msdyn_workorderstartingnumber property value. 
     * @returns a integer
     */
    public get msdyn_workorderstartingnumber() {
        return this._msdyn_workorderstartingnumber;
    };
    /**
     * Sets the msdyn_workorderstartingnumber property value. 
     * @param value Value to set for the msdyn_workorderstartingnumber property.
     */
    public set msdyn_workorderstartingnumber(value: number | undefined) {
        this._msdyn_workorderstartingnumber = value;
    };
    /**
     * Gets the msdyn_workpaytype property value. 
     * @returns a msdyn_resourcepaytype
     */
    public get msdyn_workpaytype() {
        return this._msdyn_workpaytype;
    };
    /**
     * Sets the msdyn_workpaytype property value. 
     * @param value Value to set for the msdyn_workpaytype property.
     */
    public set msdyn_workpaytype(value: Msdyn_resourcepaytype | undefined) {
        this._msdyn_workpaytype = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_breakpaytype_value", this._msdyn_breakpaytype_value);
        writer.writeStringValue("_msdyn_businessclosurepaytype_value", this._msdyn_businessclosurepaytype_value);
        writer.writeStringValue("_msdyn_defaultcanceledbookingstatus_value", this._msdyn_defaultcanceledbookingstatus_value);
        writer.writeStringValue("_msdyn_defaultscheduledbookingstatus_value", this._msdyn_defaultscheduledbookingstatus_value);
        writer.writeStringValue("_msdyn_defaultwarehouse_value", this._msdyn_defaultwarehouse_value);
        writer.writeStringValue("_msdyn_overtimepaytype_value", this._msdyn_overtimepaytype_value);
        writer.writeStringValue("_msdyn_travelchargeitemid_value", this._msdyn_travelchargeitemid_value);
        writer.writeStringValue("_msdyn_travelpaytype_value", this._msdyn_travelpaytype_value);
        writer.writeStringValue("_msdyn_workpaytype_value", this._msdyn_workpaytype_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_advancedsettings", this.msdyn_advancedsettings);
        writer.writeStringValue("msdyn_agreementprefix", this.msdyn_agreementprefix);
        writer.writeDateValue("msdyn_agreementrecordgeneration", this.msdyn_agreementrecordgeneration);
        writer.writeNumberValue("msdyn_agreementstartingnumber", this.msdyn_agreementstartingnumber);
        writer.writeNumberValue("msdyn_analyticsingestdatainxdays", this.msdyn_analyticsingestdatainxdays);
        writer.writeDateValue("msdyn_analyticspostponeingestionuntil", this.msdyn_analyticspostponeingestionuntil);
        writer.writeDateValue("msdyn_analyticsspreadoutpostponeingestionuntil", this.msdyn_analyticsspreadoutpostponeingestionuntil);
        writer.writeBooleanValue("msdyn_autoallocateestimatedproducts", this.msdyn_autoallocateestimatedproducts);
        writer.writeBooleanValue("msdyn_autogeneratewoforagreementbooking", this.msdyn_autogeneratewoforagreementbooking);
        writer.writeBooleanValue("msdyn_autogeocodeaddresses", this.msdyn_autogeocodeaddresses);
        writer.writeBooleanValue("msdyn_autonumberingoptin", this.msdyn_autonumberingoptin);
        writer.writeStringValue("msdyn_bookingalerttemplate", this.msdyn_bookingalerttemplate);
        writer.writeObjectValue<Msdyn_resourcepaytype>("msdyn_breakpaytype", this.msdyn_breakpaytype);
        writer.writeObjectValue<Msdyn_resourcepaytype>("msdyn_businessclosurepaytype", this.msdyn_businessclosurepaytype);
        writer.writeBooleanValue("msdyn_calculateprice", this.msdyn_calculateprice);
        writer.writeBooleanValue("msdyn_calculatetax", this.msdyn_calculatetax);
        writer.writeBooleanValue("msdyn_cancelcurrentslotswhenmoving", this.msdyn_cancelcurrentslotswhenmoving);
        writer.writeBooleanValue("msdyn_customgpsdata", this.msdyn_customgpsdata);
        writer.writeStringValue("msdyn_customgpslatitudefield", this.msdyn_customgpslatitudefield);
        writer.writeStringValue("msdyn_customgpslocationentity", this.msdyn_customgpslocationentity);
        writer.writeStringValue("msdyn_customgpslongitudefield", this.msdyn_customgpslongitudefield);
        writer.writeStringValue("msdyn_customgpsresourcefield", this.msdyn_customgpsresourcefield);
        writer.writeStringValue("msdyn_customgpstimestampfield", this.msdyn_customgpstimestampfield);
        writer.writeNumberValue("msdyn_databaseversion", this.msdyn_databaseversion);
        writer.writeBooleanValue("msdyn_datepopulationtype", this.msdyn_datepopulationtype);
        writer.writeBooleanValue("msdyn_deactivatebookingwhencanceled", this.msdyn_deactivatebookingwhencanceled);
        writer.writeBooleanValue("msdyn_deactivatebookingwhencompleted", this.msdyn_deactivatebookingwhencompleted);
        writer.writeBooleanValue("msdyn_deactivateworkorderwhencanceled", this.msdyn_deactivateworkorderwhencanceled);
        writer.writeBooleanValue("msdyn_deactivateworkorderwhenposted", this.msdyn_deactivateworkorderwhenposted);
        writer.writeNumberValue("msdyn_defaultbookingduration", this.msdyn_defaultbookingduration);
        writer.writeObjectValue<Bookingstatus>("msdyn_defaultcanceledbookingstatus", this.msdyn_defaultcanceledbookingstatus);
        writer.writeNumberValue("msdyn_defaultcrewstrategy", this.msdyn_defaultcrewstrategy);
        writer.writeBooleanValue("msdyn_defaultradiusunit", this.msdyn_defaultradiusunit);
        writer.writeNumberValue("msdyn_defaultradiusvalue", this.msdyn_defaultradiusvalue);
        writer.writeObjectValue<Bookingstatus>("msdyn_defaultscheduledbookingstatus", this.msdyn_defaultscheduledbookingstatus);
        writer.writeObjectValue<Msdyn_warehouse>("msdyn_defaultwarehouse", this.msdyn_defaultwarehouse);
        writer.writeNumberValue("msdyn_defaultworkordercompletedstatus", this.msdyn_defaultworkordercompletedstatus);
        writer.writeBooleanValue("msdyn_disablecustomerassetvalidation", this.msdyn_disablecustomerassetvalidation);
        writer.writeBooleanValue("msdyn_disableremoteassistbookingstatuschanges", this.msdyn_disableremoteassistbookingstatuschanges);
        writer.writeBooleanValue("msdyn_enableaddresssuggestions", this.msdyn_enableaddresssuggestions);
        writer.writeBooleanValue("msdyn_enableincidenttyperecommendation", this.msdyn_enableincidenttyperecommendation);
        writer.writeBooleanValue("msdyn_enablelegacyscheduleassistant", this.msdyn_enablelegacyscheduleassistant);
        writer.writeBooleanValue("msdyn_enablemainformdialogforsubgrids", this.msdyn_enablemainformdialogforsubgrids);
        writer.writeBooleanValue("msdyn_enablesuggestedduration", this.msdyn_enablesuggestedduration);
        writer.writeBooleanValue("msdyn_enhancedbackgroundprocessing", this.msdyn_enhancedbackgroundprocessing);
        writer.writeNumberValue("msdyn_entitynumberlength", this.msdyn_entitynumberlength);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_fieldservicesetting_ActivityPointers", this.msdyn_fieldservicesetting_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_fieldservicesetting_Annotations", this.msdyn_fieldservicesetting_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_fieldservicesetting_Appointments", this.msdyn_fieldservicesetting_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_fieldservicesetting_AsyncOperations", this.msdyn_fieldservicesetting_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_fieldservicesetting_BulkDeleteFailures", this.msdyn_fieldservicesetting_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Email>("msdyn_fieldservicesetting_Emails", this.msdyn_fieldservicesetting_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_fieldservicesetting_Faxes", this.msdyn_fieldservicesetting_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_fieldservicesetting_Letters", this.msdyn_fieldservicesetting_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_fieldservicesetting_MailboxTrackingFolders", this.msdyn_fieldservicesetting_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_fieldservicesetting_msdyn_approvals", this.msdyn_fieldservicesetting_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_fieldservicesetting_msdyn_bookingalerts", this.msdyn_fieldservicesetting_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_fieldservicesetting_msdyn_ocliveworkitems", this.msdyn_fieldservicesetting_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_fieldservicesetting_msdyn_ocoutboundmessages", this.msdyn_fieldservicesetting_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_fieldservicesetting_msdyn_ocsessions", this.msdyn_fieldservicesetting_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_fieldservicesetting_msfp_alerts", this.msdyn_fieldservicesetting_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_fieldservicesetting_msfp_surveyinvites", this.msdyn_fieldservicesetting_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_fieldservicesetting_msfp_surveyresponses", this.msdyn_fieldservicesetting_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_fieldservicesetting_PhoneCalls", this.msdyn_fieldservicesetting_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_fieldservicesetting_PrincipalObjectAttributeAccesses", this.msdyn_fieldservicesetting_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_fieldservicesetting_ProcessSession", this.msdyn_fieldservicesetting_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_fieldservicesetting_RecurringAppointmentMasters", this.msdyn_fieldservicesetting_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_fieldservicesetting_ServiceAppointments", this.msdyn_fieldservicesetting_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_fieldservicesetting_SocialActivities", this.msdyn_fieldservicesetting_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_fieldservicesetting_SyncErrors", this.msdyn_fieldservicesetting_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_fieldservicesetting_Tasks", this.msdyn_fieldservicesetting_Tasks);
        writer.writeStringValue("msdyn_fieldservicesettingid", this.msdyn_fieldservicesettingid);
        writer.writeBooleanValue("msdyn_generateactuals", this.msdyn_generateactuals);
        writer.writeNumberValue("msdyn_generateagreementinvoicesxdaysinadvance", this.msdyn_generateagreementinvoicesxdaysinadvance);
        writer.writeNumberValue("msdyn_generateagreementwoxdaysinadvance", this.msdyn_generateagreementwoxdaysinadvance);
        writer.writeNumberValue("msdyn_generatebookingdatesxmonthsinadvance", this.msdyn_generatebookingdatesxmonthsinadvance);
        writer.writeNumberValue("msdyn_generateinvoicedatesxmonthsinadvance", this.msdyn_generateinvoicedatesxmonthsinadvance);
        writer.writeNumberValue("msdyn_gpslocationexpiresafterxminutes", this.msdyn_gpslocationexpiresafterxminutes);
        writer.writeNumberValue("msdyn_historicaldatafilter", this.msdyn_historicaldatafilter);
        writer.writeBooleanValue("msdyn_inspectionanalyticsenabled", this.msdyn_inspectionanalyticsenabled);
        writer.writeDateValue("msdyn_inspectionanalyticsenabledon", this.msdyn_inspectionanalyticsenabledon);
        writer.writeNumberValue("msdyn_inspectionanalyticsfrequency", this.msdyn_inspectionanalyticsfrequency);
        writer.writeDateValue("msdyn_inspectionanalyticsrecommendedtime", this.msdyn_inspectionanalyticsrecommendedtime);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeStringValue("msdyn_inventoryadjustmentprefix", this.msdyn_inventoryadjustmentprefix);
        writer.writeNumberValue("msdyn_inventoryadjustmentstartingnumber", this.msdyn_inventoryadjustmentstartingnumber);
        writer.writeStringValue("msdyn_inventorytransferprefix", this.msdyn_inventorytransferprefix);
        writer.writeNumberValue("msdyn_inventorytransferstartingnumber", this.msdyn_inventorytransferstartingnumber);
        writer.writeDateValue("msdyn_lastrunofincidenttyperecommendation", this.msdyn_lastrunofincidenttyperecommendation);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_notificationtimeout", this.msdyn_notificationtimeout);
        writer.writeObjectValue<Msdyn_resourcepaytype>("msdyn_overtimepaytype", this.msdyn_overtimepaytype);
        writer.writeDateValue("msdyn_postponenumbercleanupuntil", this.msdyn_postponenumbercleanupuntil);
        writer.writeNumberValue("msdyn_productcostorder", this.msdyn_productcostorder);
        writer.writeBooleanValue("msdyn_purchaseorderapprovalrequired", this.msdyn_purchaseorderapprovalrequired);
        writer.writeStringValue("msdyn_purchaseorderprefix", this.msdyn_purchaseorderprefix);
        writer.writeNumberValue("msdyn_purchaseorderstartingnumber", this.msdyn_purchaseorderstartingnumber);
        writer.writeNumberValue("msdyn_resourcessynchronizationtimeout", this.msdyn_resourcessynchronizationtimeout);
        writer.writeNumberValue("msdyn_returntopxrecommendations", this.msdyn_returntopxrecommendations);
        writer.writeStringValue("msdyn_rmaprefix", this.msdyn_rmaprefix);
        writer.writeNumberValue("msdyn_rmastartingnumber", this.msdyn_rmastartingnumber);
        writer.writeStringValue("msdyn_rtvprefix", this.msdyn_rtvprefix);
        writer.writeNumberValue("msdyn_rtvstartingnumber", this.msdyn_rtvstartingnumber);
        writer.writeNumberValue("msdyn_runfrequencyofincidenttyperecommendation", this.msdyn_runfrequencyofincidenttyperecommendation);
        writer.writeBooleanValue("msdyn_saautofilterserviceterritory", this.msdyn_saautofilterserviceterritory);
        writer.writeStringValue("msdyn_schedulerbusinessunitdetailsview", this.msdyn_schedulerbusinessunitdetailsview);
        writer.writeStringValue("msdyn_schedulerbusinessunittooltipview", this.msdyn_schedulerbusinessunittooltipview);
        writer.writeStringValue("msdyn_schedulercoredetailsview", this.msdyn_schedulercoredetailsview);
        writer.writeStringValue("msdyn_schedulercoreslottexttemplate", this.msdyn_schedulercoreslottexttemplate);
        writer.writeStringValue("msdyn_schedulercoretooltipview", this.msdyn_schedulercoretooltipview);
        writer.writeStringValue("msdyn_schedulerfieldservicedetailsview", this.msdyn_schedulerfieldservicedetailsview);
        writer.writeStringValue("msdyn_schedulerfieldserviceslottexttemplate", this.msdyn_schedulerfieldserviceslottexttemplate);
        writer.writeStringValue("msdyn_schedulerfieldservicetooltipview", this.msdyn_schedulerfieldservicetooltipview);
        writer.writeStringValue("msdyn_schedulerresourcedetailsview", this.msdyn_schedulerresourcedetailsview);
        writer.writeStringValue("msdyn_schedulerresourcetooltipview", this.msdyn_schedulerresourcetooltipview);
        writer.writeStringValue("msdyn_schedulerunscheduledview", this.msdyn_schedulerunscheduledview);
        writer.writeStringValue("msdyn_sdkapimapkey", this.msdyn_sdkapimapkey);
        writer.writeBooleanValue("msdyn_showsimplifiedworkordercommands", this.msdyn_showsimplifiedworkordercommands);
        writer.writeBooleanValue("msdyn_suggestreparentingcustomerassets", this.msdyn_suggestreparentingcustomerassets);
        writer.writeNumberValue("msdyn_timecostactualssource", this.msdyn_timecostactualssource);
        writer.writeNumberValue("msdyn_timeentrygenerationstrategy", this.msdyn_timeentrygenerationstrategy);
        writer.writeNumberValue("msdyn_timestampfrequency", this.msdyn_timestampfrequency);
        writer.writeObjectValue<Product>("msdyn_travelchargeitemid", this.msdyn_travelchargeitemid);
        writer.writeObjectValue<Msdyn_resourcepaytype>("msdyn_travelpaytype", this.msdyn_travelpaytype);
        writer.writeBooleanValue("msdyn_traveltimerescheduling", this.msdyn_traveltimerescheduling);
        writer.writeNumberValue("msdyn_undefinedbookinglocation", this.msdyn_undefinedbookinglocation);
        writer.writeStringValue("msdyn_unscheduledwotooltipsviewid", this.msdyn_unscheduledwotooltipsviewid);
        writer.writeNumberValue("msdyn_useofproductsoutofstock", this.msdyn_useofproductsoutofstock);
        writer.writeNumberValue("msdyn_workorderinvoicecreation", this.msdyn_workorderinvoicecreation);
        writer.writeStringValue("msdyn_workorderprefix", this.msdyn_workorderprefix);
        writer.writeNumberValue("msdyn_workorderstartingnumber", this.msdyn_workorderstartingnumber);
        writer.writeObjectValue<Msdyn_resourcepaytype>("msdyn_workpaytype", this.msdyn_workpaytype);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
