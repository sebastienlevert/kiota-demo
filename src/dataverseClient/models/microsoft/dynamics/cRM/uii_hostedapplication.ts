import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyusd_agentscriptactionFromDiscriminatorValue} from './createMsdyusd_agentscriptactionFromDiscriminatorValue';
import {createMsdyusd_answerFromDiscriminatorValue} from './createMsdyusd_answerFromDiscriminatorValue';
import {createMsdyusd_configurationFromDiscriminatorValue} from './createMsdyusd_configurationFromDiscriminatorValue';
import {createMsdyusd_formFromDiscriminatorValue} from './createMsdyusd_formFromDiscriminatorValue';
import {createMsdyusd_languagemoduleFromDiscriminatorValue} from './createMsdyusd_languagemoduleFromDiscriminatorValue';
import {createMsdyusd_taskFromDiscriminatorValue} from './createMsdyusd_taskFromDiscriminatorValue';
import {createMsdyusd_toolbarbuttonFromDiscriminatorValue} from './createMsdyusd_toolbarbuttonFromDiscriminatorValue';
import {createMsdyusd_toolbarstripFromDiscriminatorValue} from './createMsdyusd_toolbarstripFromDiscriminatorValue';
import {createMsdyusd_tracesourcesettingFromDiscriminatorValue} from './createMsdyusd_tracesourcesettingFromDiscriminatorValue';
import {createMsdyusd_uiieventFromDiscriminatorValue} from './createMsdyusd_uiieventFromDiscriminatorValue';
import {createMsdyusd_windowrouteFromDiscriminatorValue} from './createMsdyusd_windowrouteFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createUii_actionFromDiscriminatorValue} from './createUii_actionFromDiscriminatorValue';
import {createUii_auditFromDiscriminatorValue} from './createUii_auditFromDiscriminatorValue';
import {createUii_workflowstepFromDiscriminatorValue} from './createUii_workflowstepFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyusd_agentscriptaction, Msdyusd_answer, Msdyusd_configuration, Msdyusd_form, Msdyusd_languagemodule, Msdyusd_task, Msdyusd_toolbarbutton, Msdyusd_toolbarstrip, Msdyusd_tracesourcesetting, Msdyusd_uiievent, Msdyusd_windowroute, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team, Uii_action, Uii_audit, Uii_workflowstep} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Uii_hostedapplication extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
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
    private _msdyusd_allowmultiplepages?: boolean | undefined;
    private _msdyusd_AnswerShowTab?: Msdyusd_answer[] | undefined;
    private _msdyusd_apiversion?: number | undefined;
    private _msdyusd_autolaunch?: boolean | undefined;
    private _msdyusd_cifurl?: string | undefined;
    private _msdyusd_configuration_hostedcontrol?: Msdyusd_configuration[] | undefined;
    private _msdyusd_crmwindowhosttype?: number | undefined;
    private _msdyusd_customparameters?: string | undefined;
    private _msdyusd_dashboardname?: string | undefined;
    private _msdyusd_displayname?: string | undefined;
    private _msdyusd_form_hostedapplication?: Msdyusd_form[] | undefined;
    private _msdyusd_hostingtype?: number | undefined;
    private _msdyusd_maximumbrowsers?: number | undefined;
    private _msdyusd_paneltype?: number | undefined;
    private _msdyusd_prefetchdata?: boolean | undefined;
    private _msdyusd_savedurl?: string | undefined;
    private _msdyusd_scanfordataparameters?: boolean | undefined;
    private _msdyusd_ShowTab?: Msdyusd_task[] | undefined;
    private _msdyusd_specifyurl?: boolean | undefined;
    private _msdyusd_toolbarstrip_uii_hostedapplication?: Msdyusd_toolbarstrip[] | undefined;
    private _msdyusd_tracesourcesetting_hostedcontrol?: Msdyusd_tracesourcesetting[] | undefined;
    private _msdyusd_trusteddomain?: string | undefined;
    private _msdyusd_uii_hostedapplication_msdyusd_agentscriptaction_Application?: Msdyusd_agentscriptaction[] | undefined;
    private _msdyusd_uii_hostedapplication_msdyusd_languagemodule?: Msdyusd_languagemodule[] | undefined;
    private _msdyusd_uii_hostedapplication_msdyusd_toolbarbutton_showtab?: Msdyusd_toolbarbutton[] | undefined;
    private _msdyusd_uii_hostedapplication_msdyusd_uiievent?: Msdyusd_uiievent[] | undefined;
    private _msdyusd_uii_hostedapplication_msdyusd_windowroute_Application?: Msdyusd_windowroute[] | undefined;
    private _msdyusd_uii_hostedapplication_msdyusd_windowroute_From?: Msdyusd_windowroute[] | undefined;
    private _msdyusd_uii_hostedapplication_msdyusd_windowroute_showtab?: Msdyusd_windowroute[] | undefined;
    private _msdyusd_xaml?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _uii_adaptermode?: number | undefined;
    private _uii_adaptertype?: string | undefined;
    private _uii_adapteruri?: string | undefined;
    private _uii_applicationhostingmode?: number | undefined;
    private _uii_assemblytype?: string | undefined;
    private _uii_assemblyuri?: string | undefined;
    private _uii_automationxml?: string | undefined;
    private _uii_displaygroup?: string | undefined;
    private _uii_extensionsxml?: string | undefined;
    private _uii_externalapparguments?: string | undefined;
    private _uii_externalappuri?: string | undefined;
    private _uii_externalappworkingdirectory?: string | undefined;
    private _uii_findwindowclass?: string | undefined;
    private _uii_hostedapplication_ActivityPointers?: Activitypointer[] | undefined;
    private _uii_hostedapplication_Annotations?: Annotation[] | undefined;
    private _uii_hostedapplication_Appointments?: Appointment[] | undefined;
    private _uii_hostedapplication_AsyncOperations?: Asyncoperation[] | undefined;
    private _uii_hostedapplication_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _uii_hostedapplication_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _uii_hostedapplication_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _uii_hostedapplication_Emails?: Email[] | undefined;
    private _uii_hostedapplication_Faxes?: Fax[] | undefined;
    private _uii_hostedapplication_Letters?: Letter[] | undefined;
    private _uii_hostedapplication_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _uii_hostedapplication_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _uii_hostedapplication_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _uii_hostedapplication_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _uii_hostedapplication_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _uii_hostedapplication_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _uii_hostedapplication_msfp_alerts?: Msfp_alert[] | undefined;
    private _uii_hostedapplication_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _uii_hostedapplication_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _uii_hostedapplication_PhoneCalls?: Phonecall[] | undefined;
    private _uii_hostedapplication_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _uii_hostedapplication_ProcessSession?: Processsession[] | undefined;
    private _uii_hostedapplication_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _uii_hostedapplication_ServiceAppointments?: Serviceappointment[] | undefined;
    private _uii_hostedapplication_SocialActivities?: Socialactivity[] | undefined;
    private _uii_hostedapplication_SyncErrors?: Syncerror[] | undefined;
    private _uii_hostedapplication_Tasks?: Task[] | undefined;
    private _uii_hostedapplicationid?: string | undefined;
    private _uii_hostedapplicationtype?: number | undefined;
    private _uii_icafilename?: string | undefined;
    private _uii_isappdynamic?: boolean | undefined;
    private _uii_isattachinputthread?: boolean | undefined;
    private _uii_isautosignon?: boolean | undefined;
    private _uii_isdependentonworkflow?: boolean | undefined;
    private _uii_isglobalapplication?: boolean | undefined;
    private _uii_islimittoprocess?: boolean | undefined;
    private _uii_isnomessagepump?: boolean | undefined;
    private _uii_isrestoreifminimized?: boolean | undefined;
    private _uii_isretainframeandcaption?: boolean | undefined;
    private _uii_isretainontaskbar?: boolean | undefined;
    private _uii_isretainsystemmenu?: boolean | undefined;
    private _uii_isshowintoolbardropdown?: boolean | undefined;
    private _uii_isshowmenu?: boolean | undefined;
    private _uii_isusenewbrowserprocess?: boolean | undefined;
    private _uii_iswebappusetoolbar?: boolean | undefined;
    private _uii_mainwindowacquisitiontimeout?: number | undefined;
    private _uii_managedapplication?: boolean | undefined;
    private _uii_managehosting?: boolean | undefined;
    private _uii_managepopups?: boolean | undefined;
    private _uii_minimumsizex?: number | undefined;
    private _uii_minimumsizey?: number | undefined;
    private _uii_name?: string | undefined;
    private _uii_optimalsizex?: number | undefined;
    private _uii_optimalsizey?: number | undefined;
    private _uii_processacquisitionfilename?: string | undefined;
    private _uii_remote_processacquisitionattempts?: number | undefined;
    private _uii_remote_processacquisitiondelay?: number | undefined;
    private _uii_removesizingcontrols?: boolean | undefined;
    private _uii_sortorder?: number | undefined;
    private _uii_toplevelwindowcaption?: string | undefined;
    private _uii_toplevelwindowmode?: number | undefined;
    private _uii_uii_hostedapplication_uii_action?: Uii_action[] | undefined;
    private _uii_uii_hostedapplication_uii_audit?: Uii_audit[] | undefined;
    private _uii_uii_hostedapplication_uii_workflowstep?: Uii_workflowstep[] | undefined;
    private _uii_usercanclose?: boolean | undefined;
    private _uii_webappurl?: string | undefined;
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
     * Instantiates a new uii_hostedapplication and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Uii_hostedapplication)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Uii_hostedapplication)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Uii_hostedapplication)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Uii_hostedapplication)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Uii_hostedapplication)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Uii_hostedapplication)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Uii_hostedapplication)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Uii_hostedapplication)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Uii_hostedapplication).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Uii_hostedapplication).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Uii_hostedapplication).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Uii_hostedapplication).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Uii_hostedapplication).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Uii_hostedapplication).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Uii_hostedapplication).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyusd_allowmultiplepages": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_allowmultiplepages = n.getBooleanValue(); },
            "msdyusd_AnswerShowTab": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_AnswerShowTab = n.getCollectionOfObjectValues<Msdyusd_answer>(createMsdyusd_answerFromDiscriminatorValue); },
            "msdyusd_apiversion": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_apiversion = n.getNumberValue(); },
            "msdyusd_autolaunch": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_autolaunch = n.getBooleanValue(); },
            "msdyusd_cifurl": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_cifurl = n.getStringValue(); },
            "msdyusd_configuration_hostedcontrol": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_configuration_hostedcontrol = n.getCollectionOfObjectValues<Msdyusd_configuration>(createMsdyusd_configurationFromDiscriminatorValue); },
            "msdyusd_crmwindowhosttype": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_crmwindowhosttype = n.getNumberValue(); },
            "msdyusd_customparameters": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_customparameters = n.getStringValue(); },
            "msdyusd_dashboardname": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_dashboardname = n.getStringValue(); },
            "msdyusd_displayname": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_displayname = n.getStringValue(); },
            "msdyusd_form_hostedapplication": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_form_hostedapplication = n.getCollectionOfObjectValues<Msdyusd_form>(createMsdyusd_formFromDiscriminatorValue); },
            "msdyusd_hostingtype": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_hostingtype = n.getNumberValue(); },
            "msdyusd_maximumbrowsers": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_maximumbrowsers = n.getNumberValue(); },
            "msdyusd_paneltype": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_paneltype = n.getNumberValue(); },
            "msdyusd_prefetchdata": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_prefetchdata = n.getBooleanValue(); },
            "msdyusd_savedurl": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_savedurl = n.getStringValue(); },
            "msdyusd_scanfordataparameters": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_scanfordataparameters = n.getBooleanValue(); },
            "msdyusd_ShowTab": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_ShowTab = n.getCollectionOfObjectValues<Msdyusd_task>(createMsdyusd_taskFromDiscriminatorValue); },
            "msdyusd_specifyurl": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_specifyurl = n.getBooleanValue(); },
            "msdyusd_toolbarstrip_uii_hostedapplication": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_toolbarstrip_uii_hostedapplication = n.getCollectionOfObjectValues<Msdyusd_toolbarstrip>(createMsdyusd_toolbarstripFromDiscriminatorValue); },
            "msdyusd_tracesourcesetting_hostedcontrol": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_tracesourcesetting_hostedcontrol = n.getCollectionOfObjectValues<Msdyusd_tracesourcesetting>(createMsdyusd_tracesourcesettingFromDiscriminatorValue); },
            "msdyusd_trusteddomain": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_trusteddomain = n.getStringValue(); },
            "msdyusd_uii_hostedapplication_msdyusd_agentscriptaction_Application": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_uii_hostedapplication_msdyusd_agentscriptaction_Application = n.getCollectionOfObjectValues<Msdyusd_agentscriptaction>(createMsdyusd_agentscriptactionFromDiscriminatorValue); },
            "msdyusd_uii_hostedapplication_msdyusd_languagemodule": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_uii_hostedapplication_msdyusd_languagemodule = n.getCollectionOfObjectValues<Msdyusd_languagemodule>(createMsdyusd_languagemoduleFromDiscriminatorValue); },
            "msdyusd_uii_hostedapplication_msdyusd_toolbarbutton_showtab": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_uii_hostedapplication_msdyusd_toolbarbutton_showtab = n.getCollectionOfObjectValues<Msdyusd_toolbarbutton>(createMsdyusd_toolbarbuttonFromDiscriminatorValue); },
            "msdyusd_uii_hostedapplication_msdyusd_uiievent": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_uii_hostedapplication_msdyusd_uiievent = n.getCollectionOfObjectValues<Msdyusd_uiievent>(createMsdyusd_uiieventFromDiscriminatorValue); },
            "msdyusd_uii_hostedapplication_msdyusd_windowroute_Application": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_uii_hostedapplication_msdyusd_windowroute_Application = n.getCollectionOfObjectValues<Msdyusd_windowroute>(createMsdyusd_windowrouteFromDiscriminatorValue); },
            "msdyusd_uii_hostedapplication_msdyusd_windowroute_From": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_uii_hostedapplication_msdyusd_windowroute_From = n.getCollectionOfObjectValues<Msdyusd_windowroute>(createMsdyusd_windowrouteFromDiscriminatorValue); },
            "msdyusd_uii_hostedapplication_msdyusd_windowroute_showtab": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_uii_hostedapplication_msdyusd_windowroute_showtab = n.getCollectionOfObjectValues<Msdyusd_windowroute>(createMsdyusd_windowrouteFromDiscriminatorValue); },
            "msdyusd_xaml": (o, n) => { (o as unknown as Uii_hostedapplication).msdyusd_xaml = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Uii_hostedapplication).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Uii_hostedapplication).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Uii_hostedapplication).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Uii_hostedapplication).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Uii_hostedapplication).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Uii_hostedapplication).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Uii_hostedapplication).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Uii_hostedapplication).timezoneruleversionnumber = n.getNumberValue(); },
            "uii_adaptermode": (o, n) => { (o as unknown as Uii_hostedapplication).uii_adaptermode = n.getNumberValue(); },
            "uii_adaptertype": (o, n) => { (o as unknown as Uii_hostedapplication).uii_adaptertype = n.getStringValue(); },
            "uii_adapteruri": (o, n) => { (o as unknown as Uii_hostedapplication).uii_adapteruri = n.getStringValue(); },
            "uii_applicationhostingmode": (o, n) => { (o as unknown as Uii_hostedapplication).uii_applicationhostingmode = n.getNumberValue(); },
            "uii_assemblytype": (o, n) => { (o as unknown as Uii_hostedapplication).uii_assemblytype = n.getStringValue(); },
            "uii_assemblyuri": (o, n) => { (o as unknown as Uii_hostedapplication).uii_assemblyuri = n.getStringValue(); },
            "uii_automationxml": (o, n) => { (o as unknown as Uii_hostedapplication).uii_automationxml = n.getStringValue(); },
            "uii_displaygroup": (o, n) => { (o as unknown as Uii_hostedapplication).uii_displaygroup = n.getStringValue(); },
            "uii_extensionsxml": (o, n) => { (o as unknown as Uii_hostedapplication).uii_extensionsxml = n.getStringValue(); },
            "uii_externalapparguments": (o, n) => { (o as unknown as Uii_hostedapplication).uii_externalapparguments = n.getStringValue(); },
            "uii_externalappuri": (o, n) => { (o as unknown as Uii_hostedapplication).uii_externalappuri = n.getStringValue(); },
            "uii_externalappworkingdirectory": (o, n) => { (o as unknown as Uii_hostedapplication).uii_externalappworkingdirectory = n.getStringValue(); },
            "uii_findwindowclass": (o, n) => { (o as unknown as Uii_hostedapplication).uii_findwindowclass = n.getStringValue(); },
            "uii_hostedapplication_ActivityPointers": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "uii_hostedapplication_Annotations": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "uii_hostedapplication_Appointments": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "uii_hostedapplication_AsyncOperations": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "uii_hostedapplication_BulkDeleteFailures": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "uii_hostedapplication_DuplicateBaseRecord": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "uii_hostedapplication_DuplicateMatchingRecord": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "uii_hostedapplication_Emails": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "uii_hostedapplication_Faxes": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "uii_hostedapplication_Letters": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "uii_hostedapplication_MailboxTrackingFolders": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "uii_hostedapplication_msdyn_approvals": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "uii_hostedapplication_msdyn_bookingalerts": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "uii_hostedapplication_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "uii_hostedapplication_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "uii_hostedapplication_msdyn_ocsessions": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "uii_hostedapplication_msfp_alerts": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "uii_hostedapplication_msfp_surveyinvites": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "uii_hostedapplication_msfp_surveyresponses": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "uii_hostedapplication_PhoneCalls": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "uii_hostedapplication_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "uii_hostedapplication_ProcessSession": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "uii_hostedapplication_RecurringAppointmentMasters": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "uii_hostedapplication_ServiceAppointments": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "uii_hostedapplication_SocialActivities": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "uii_hostedapplication_SyncErrors": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "uii_hostedapplication_Tasks": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplication_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "uii_hostedapplicationid": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplicationid = n.getStringValue(); },
            "uii_hostedapplicationtype": (o, n) => { (o as unknown as Uii_hostedapplication).uii_hostedapplicationtype = n.getNumberValue(); },
            "uii_icafilename": (o, n) => { (o as unknown as Uii_hostedapplication).uii_icafilename = n.getStringValue(); },
            "uii_isappdynamic": (o, n) => { (o as unknown as Uii_hostedapplication).uii_isappdynamic = n.getBooleanValue(); },
            "uii_isattachinputthread": (o, n) => { (o as unknown as Uii_hostedapplication).uii_isattachinputthread = n.getBooleanValue(); },
            "uii_isautosignon": (o, n) => { (o as unknown as Uii_hostedapplication).uii_isautosignon = n.getBooleanValue(); },
            "uii_isdependentonworkflow": (o, n) => { (o as unknown as Uii_hostedapplication).uii_isdependentonworkflow = n.getBooleanValue(); },
            "uii_isglobalapplication": (o, n) => { (o as unknown as Uii_hostedapplication).uii_isglobalapplication = n.getBooleanValue(); },
            "uii_islimittoprocess": (o, n) => { (o as unknown as Uii_hostedapplication).uii_islimittoprocess = n.getBooleanValue(); },
            "uii_isnomessagepump": (o, n) => { (o as unknown as Uii_hostedapplication).uii_isnomessagepump = n.getBooleanValue(); },
            "uii_isrestoreifminimized": (o, n) => { (o as unknown as Uii_hostedapplication).uii_isrestoreifminimized = n.getBooleanValue(); },
            "uii_isretainframeandcaption": (o, n) => { (o as unknown as Uii_hostedapplication).uii_isretainframeandcaption = n.getBooleanValue(); },
            "uii_isretainontaskbar": (o, n) => { (o as unknown as Uii_hostedapplication).uii_isretainontaskbar = n.getBooleanValue(); },
            "uii_isretainsystemmenu": (o, n) => { (o as unknown as Uii_hostedapplication).uii_isretainsystemmenu = n.getBooleanValue(); },
            "uii_isshowintoolbardropdown": (o, n) => { (o as unknown as Uii_hostedapplication).uii_isshowintoolbardropdown = n.getBooleanValue(); },
            "uii_isshowmenu": (o, n) => { (o as unknown as Uii_hostedapplication).uii_isshowmenu = n.getBooleanValue(); },
            "uii_isusenewbrowserprocess": (o, n) => { (o as unknown as Uii_hostedapplication).uii_isusenewbrowserprocess = n.getBooleanValue(); },
            "uii_iswebappusetoolbar": (o, n) => { (o as unknown as Uii_hostedapplication).uii_iswebappusetoolbar = n.getBooleanValue(); },
            "uii_mainwindowacquisitiontimeout": (o, n) => { (o as unknown as Uii_hostedapplication).uii_mainwindowacquisitiontimeout = n.getNumberValue(); },
            "uii_managedapplication": (o, n) => { (o as unknown as Uii_hostedapplication).uii_managedapplication = n.getBooleanValue(); },
            "uii_managehosting": (o, n) => { (o as unknown as Uii_hostedapplication).uii_managehosting = n.getBooleanValue(); },
            "uii_managepopups": (o, n) => { (o as unknown as Uii_hostedapplication).uii_managepopups = n.getBooleanValue(); },
            "uii_minimumsizex": (o, n) => { (o as unknown as Uii_hostedapplication).uii_minimumsizex = n.getNumberValue(); },
            "uii_minimumsizey": (o, n) => { (o as unknown as Uii_hostedapplication).uii_minimumsizey = n.getNumberValue(); },
            "uii_name": (o, n) => { (o as unknown as Uii_hostedapplication).uii_name = n.getStringValue(); },
            "uii_optimalsizex": (o, n) => { (o as unknown as Uii_hostedapplication).uii_optimalsizex = n.getNumberValue(); },
            "uii_optimalsizey": (o, n) => { (o as unknown as Uii_hostedapplication).uii_optimalsizey = n.getNumberValue(); },
            "uii_processacquisitionfilename": (o, n) => { (o as unknown as Uii_hostedapplication).uii_processacquisitionfilename = n.getStringValue(); },
            "uii_remote_processacquisitionattempts": (o, n) => { (o as unknown as Uii_hostedapplication).uii_remote_processacquisitionattempts = n.getNumberValue(); },
            "uii_remote_processacquisitiondelay": (o, n) => { (o as unknown as Uii_hostedapplication).uii_remote_processacquisitiondelay = n.getNumberValue(); },
            "uii_removesizingcontrols": (o, n) => { (o as unknown as Uii_hostedapplication).uii_removesizingcontrols = n.getBooleanValue(); },
            "uii_sortorder": (o, n) => { (o as unknown as Uii_hostedapplication).uii_sortorder = n.getNumberValue(); },
            "uii_toplevelwindowcaption": (o, n) => { (o as unknown as Uii_hostedapplication).uii_toplevelwindowcaption = n.getStringValue(); },
            "uii_toplevelwindowmode": (o, n) => { (o as unknown as Uii_hostedapplication).uii_toplevelwindowmode = n.getNumberValue(); },
            "uii_uii_hostedapplication_uii_action": (o, n) => { (o as unknown as Uii_hostedapplication).uii_uii_hostedapplication_uii_action = n.getCollectionOfObjectValues<Uii_action>(createUii_actionFromDiscriminatorValue); },
            "uii_uii_hostedapplication_uii_audit": (o, n) => { (o as unknown as Uii_hostedapplication).uii_uii_hostedapplication_uii_audit = n.getCollectionOfObjectValues<Uii_audit>(createUii_auditFromDiscriminatorValue); },
            "uii_uii_hostedapplication_uii_workflowstep": (o, n) => { (o as unknown as Uii_hostedapplication).uii_uii_hostedapplication_uii_workflowstep = n.getCollectionOfObjectValues<Uii_workflowstep>(createUii_workflowstepFromDiscriminatorValue); },
            "uii_usercanclose": (o, n) => { (o as unknown as Uii_hostedapplication).uii_usercanclose = n.getBooleanValue(); },
            "uii_webappurl": (o, n) => { (o as unknown as Uii_hostedapplication).uii_webappurl = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Uii_hostedapplication).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Uii_hostedapplication).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyusd_allowmultiplepages property value. 
     * @returns a boolean
     */
    public get msdyusd_allowmultiplepages() {
        return this._msdyusd_allowmultiplepages;
    };
    /**
     * Sets the msdyusd_allowmultiplepages property value. 
     * @param value Value to set for the msdyusd_allowmultiplepages property.
     */
    public set msdyusd_allowmultiplepages(value: boolean | undefined) {
        this._msdyusd_allowmultiplepages = value;
    };
    /**
     * Gets the msdyusd_AnswerShowTab property value. 
     * @returns a msdyusd_answer
     */
    public get msdyusd_AnswerShowTab() {
        return this._msdyusd_AnswerShowTab;
    };
    /**
     * Sets the msdyusd_AnswerShowTab property value. 
     * @param value Value to set for the msdyusd_AnswerShowTab property.
     */
    public set msdyusd_AnswerShowTab(value: Msdyusd_answer[] | undefined) {
        this._msdyusd_AnswerShowTab = value;
    };
    /**
     * Gets the msdyusd_apiversion property value. 
     * @returns a integer
     */
    public get msdyusd_apiversion() {
        return this._msdyusd_apiversion;
    };
    /**
     * Sets the msdyusd_apiversion property value. 
     * @param value Value to set for the msdyusd_apiversion property.
     */
    public set msdyusd_apiversion(value: number | undefined) {
        this._msdyusd_apiversion = value;
    };
    /**
     * Gets the msdyusd_autolaunch property value. 
     * @returns a boolean
     */
    public get msdyusd_autolaunch() {
        return this._msdyusd_autolaunch;
    };
    /**
     * Sets the msdyusd_autolaunch property value. 
     * @param value Value to set for the msdyusd_autolaunch property.
     */
    public set msdyusd_autolaunch(value: boolean | undefined) {
        this._msdyusd_autolaunch = value;
    };
    /**
     * Gets the msdyusd_cifurl property value. 
     * @returns a string
     */
    public get msdyusd_cifurl() {
        return this._msdyusd_cifurl;
    };
    /**
     * Sets the msdyusd_cifurl property value. 
     * @param value Value to set for the msdyusd_cifurl property.
     */
    public set msdyusd_cifurl(value: string | undefined) {
        this._msdyusd_cifurl = value;
    };
    /**
     * Gets the msdyusd_configuration_hostedcontrol property value. 
     * @returns a msdyusd_configuration
     */
    public get msdyusd_configuration_hostedcontrol() {
        return this._msdyusd_configuration_hostedcontrol;
    };
    /**
     * Sets the msdyusd_configuration_hostedcontrol property value. 
     * @param value Value to set for the msdyusd_configuration_hostedcontrol property.
     */
    public set msdyusd_configuration_hostedcontrol(value: Msdyusd_configuration[] | undefined) {
        this._msdyusd_configuration_hostedcontrol = value;
    };
    /**
     * Gets the msdyusd_crmwindowhosttype property value. 
     * @returns a integer
     */
    public get msdyusd_crmwindowhosttype() {
        return this._msdyusd_crmwindowhosttype;
    };
    /**
     * Sets the msdyusd_crmwindowhosttype property value. 
     * @param value Value to set for the msdyusd_crmwindowhosttype property.
     */
    public set msdyusd_crmwindowhosttype(value: number | undefined) {
        this._msdyusd_crmwindowhosttype = value;
    };
    /**
     * Gets the msdyusd_customparameters property value. 
     * @returns a string
     */
    public get msdyusd_customparameters() {
        return this._msdyusd_customparameters;
    };
    /**
     * Sets the msdyusd_customparameters property value. 
     * @param value Value to set for the msdyusd_customparameters property.
     */
    public set msdyusd_customparameters(value: string | undefined) {
        this._msdyusd_customparameters = value;
    };
    /**
     * Gets the msdyusd_dashboardname property value. 
     * @returns a string
     */
    public get msdyusd_dashboardname() {
        return this._msdyusd_dashboardname;
    };
    /**
     * Sets the msdyusd_dashboardname property value. 
     * @param value Value to set for the msdyusd_dashboardname property.
     */
    public set msdyusd_dashboardname(value: string | undefined) {
        this._msdyusd_dashboardname = value;
    };
    /**
     * Gets the msdyusd_displayname property value. 
     * @returns a string
     */
    public get msdyusd_displayname() {
        return this._msdyusd_displayname;
    };
    /**
     * Sets the msdyusd_displayname property value. 
     * @param value Value to set for the msdyusd_displayname property.
     */
    public set msdyusd_displayname(value: string | undefined) {
        this._msdyusd_displayname = value;
    };
    /**
     * Gets the msdyusd_form_hostedapplication property value. 
     * @returns a msdyusd_form
     */
    public get msdyusd_form_hostedapplication() {
        return this._msdyusd_form_hostedapplication;
    };
    /**
     * Sets the msdyusd_form_hostedapplication property value. 
     * @param value Value to set for the msdyusd_form_hostedapplication property.
     */
    public set msdyusd_form_hostedapplication(value: Msdyusd_form[] | undefined) {
        this._msdyusd_form_hostedapplication = value;
    };
    /**
     * Gets the msdyusd_hostingtype property value. 
     * @returns a integer
     */
    public get msdyusd_hostingtype() {
        return this._msdyusd_hostingtype;
    };
    /**
     * Sets the msdyusd_hostingtype property value. 
     * @param value Value to set for the msdyusd_hostingtype property.
     */
    public set msdyusd_hostingtype(value: number | undefined) {
        this._msdyusd_hostingtype = value;
    };
    /**
     * Gets the msdyusd_maximumbrowsers property value. 
     * @returns a integer
     */
    public get msdyusd_maximumbrowsers() {
        return this._msdyusd_maximumbrowsers;
    };
    /**
     * Sets the msdyusd_maximumbrowsers property value. 
     * @param value Value to set for the msdyusd_maximumbrowsers property.
     */
    public set msdyusd_maximumbrowsers(value: number | undefined) {
        this._msdyusd_maximumbrowsers = value;
    };
    /**
     * Gets the msdyusd_paneltype property value. 
     * @returns a integer
     */
    public get msdyusd_paneltype() {
        return this._msdyusd_paneltype;
    };
    /**
     * Sets the msdyusd_paneltype property value. 
     * @param value Value to set for the msdyusd_paneltype property.
     */
    public set msdyusd_paneltype(value: number | undefined) {
        this._msdyusd_paneltype = value;
    };
    /**
     * Gets the msdyusd_prefetchdata property value. 
     * @returns a boolean
     */
    public get msdyusd_prefetchdata() {
        return this._msdyusd_prefetchdata;
    };
    /**
     * Sets the msdyusd_prefetchdata property value. 
     * @param value Value to set for the msdyusd_prefetchdata property.
     */
    public set msdyusd_prefetchdata(value: boolean | undefined) {
        this._msdyusd_prefetchdata = value;
    };
    /**
     * Gets the msdyusd_savedurl property value. 
     * @returns a string
     */
    public get msdyusd_savedurl() {
        return this._msdyusd_savedurl;
    };
    /**
     * Sets the msdyusd_savedurl property value. 
     * @param value Value to set for the msdyusd_savedurl property.
     */
    public set msdyusd_savedurl(value: string | undefined) {
        this._msdyusd_savedurl = value;
    };
    /**
     * Gets the msdyusd_scanfordataparameters property value. 
     * @returns a boolean
     */
    public get msdyusd_scanfordataparameters() {
        return this._msdyusd_scanfordataparameters;
    };
    /**
     * Sets the msdyusd_scanfordataparameters property value. 
     * @param value Value to set for the msdyusd_scanfordataparameters property.
     */
    public set msdyusd_scanfordataparameters(value: boolean | undefined) {
        this._msdyusd_scanfordataparameters = value;
    };
    /**
     * Gets the msdyusd_ShowTab property value. 
     * @returns a msdyusd_task
     */
    public get msdyusd_ShowTab() {
        return this._msdyusd_ShowTab;
    };
    /**
     * Sets the msdyusd_ShowTab property value. 
     * @param value Value to set for the msdyusd_ShowTab property.
     */
    public set msdyusd_ShowTab(value: Msdyusd_task[] | undefined) {
        this._msdyusd_ShowTab = value;
    };
    /**
     * Gets the msdyusd_specifyurl property value. 
     * @returns a boolean
     */
    public get msdyusd_specifyurl() {
        return this._msdyusd_specifyurl;
    };
    /**
     * Sets the msdyusd_specifyurl property value. 
     * @param value Value to set for the msdyusd_specifyurl property.
     */
    public set msdyusd_specifyurl(value: boolean | undefined) {
        this._msdyusd_specifyurl = value;
    };
    /**
     * Gets the msdyusd_toolbarstrip_uii_hostedapplication property value. 
     * @returns a msdyusd_toolbarstrip
     */
    public get msdyusd_toolbarstrip_uii_hostedapplication() {
        return this._msdyusd_toolbarstrip_uii_hostedapplication;
    };
    /**
     * Sets the msdyusd_toolbarstrip_uii_hostedapplication property value. 
     * @param value Value to set for the msdyusd_toolbarstrip_uii_hostedapplication property.
     */
    public set msdyusd_toolbarstrip_uii_hostedapplication(value: Msdyusd_toolbarstrip[] | undefined) {
        this._msdyusd_toolbarstrip_uii_hostedapplication = value;
    };
    /**
     * Gets the msdyusd_tracesourcesetting_hostedcontrol property value. 
     * @returns a msdyusd_tracesourcesetting
     */
    public get msdyusd_tracesourcesetting_hostedcontrol() {
        return this._msdyusd_tracesourcesetting_hostedcontrol;
    };
    /**
     * Sets the msdyusd_tracesourcesetting_hostedcontrol property value. 
     * @param value Value to set for the msdyusd_tracesourcesetting_hostedcontrol property.
     */
    public set msdyusd_tracesourcesetting_hostedcontrol(value: Msdyusd_tracesourcesetting[] | undefined) {
        this._msdyusd_tracesourcesetting_hostedcontrol = value;
    };
    /**
     * Gets the msdyusd_trusteddomain property value. 
     * @returns a string
     */
    public get msdyusd_trusteddomain() {
        return this._msdyusd_trusteddomain;
    };
    /**
     * Sets the msdyusd_trusteddomain property value. 
     * @param value Value to set for the msdyusd_trusteddomain property.
     */
    public set msdyusd_trusteddomain(value: string | undefined) {
        this._msdyusd_trusteddomain = value;
    };
    /**
     * Gets the msdyusd_uii_hostedapplication_msdyusd_agentscriptaction_Application property value. 
     * @returns a msdyusd_agentscriptaction
     */
    public get msdyusd_uii_hostedapplication_msdyusd_agentscriptaction_Application() {
        return this._msdyusd_uii_hostedapplication_msdyusd_agentscriptaction_Application;
    };
    /**
     * Sets the msdyusd_uii_hostedapplication_msdyusd_agentscriptaction_Application property value. 
     * @param value Value to set for the msdyusd_uii_hostedapplication_msdyusd_agentscriptaction_Application property.
     */
    public set msdyusd_uii_hostedapplication_msdyusd_agentscriptaction_Application(value: Msdyusd_agentscriptaction[] | undefined) {
        this._msdyusd_uii_hostedapplication_msdyusd_agentscriptaction_Application = value;
    };
    /**
     * Gets the msdyusd_uii_hostedapplication_msdyusd_languagemodule property value. 
     * @returns a msdyusd_languagemodule
     */
    public get msdyusd_uii_hostedapplication_msdyusd_languagemodule() {
        return this._msdyusd_uii_hostedapplication_msdyusd_languagemodule;
    };
    /**
     * Sets the msdyusd_uii_hostedapplication_msdyusd_languagemodule property value. 
     * @param value Value to set for the msdyusd_uii_hostedapplication_msdyusd_languagemodule property.
     */
    public set msdyusd_uii_hostedapplication_msdyusd_languagemodule(value: Msdyusd_languagemodule[] | undefined) {
        this._msdyusd_uii_hostedapplication_msdyusd_languagemodule = value;
    };
    /**
     * Gets the msdyusd_uii_hostedapplication_msdyusd_toolbarbutton_showtab property value. 
     * @returns a msdyusd_toolbarbutton
     */
    public get msdyusd_uii_hostedapplication_msdyusd_toolbarbutton_showtab() {
        return this._msdyusd_uii_hostedapplication_msdyusd_toolbarbutton_showtab;
    };
    /**
     * Sets the msdyusd_uii_hostedapplication_msdyusd_toolbarbutton_showtab property value. 
     * @param value Value to set for the msdyusd_uii_hostedapplication_msdyusd_toolbarbutton_showtab property.
     */
    public set msdyusd_uii_hostedapplication_msdyusd_toolbarbutton_showtab(value: Msdyusd_toolbarbutton[] | undefined) {
        this._msdyusd_uii_hostedapplication_msdyusd_toolbarbutton_showtab = value;
    };
    /**
     * Gets the msdyusd_uii_hostedapplication_msdyusd_uiievent property value. 
     * @returns a msdyusd_uiievent
     */
    public get msdyusd_uii_hostedapplication_msdyusd_uiievent() {
        return this._msdyusd_uii_hostedapplication_msdyusd_uiievent;
    };
    /**
     * Sets the msdyusd_uii_hostedapplication_msdyusd_uiievent property value. 
     * @param value Value to set for the msdyusd_uii_hostedapplication_msdyusd_uiievent property.
     */
    public set msdyusd_uii_hostedapplication_msdyusd_uiievent(value: Msdyusd_uiievent[] | undefined) {
        this._msdyusd_uii_hostedapplication_msdyusd_uiievent = value;
    };
    /**
     * Gets the msdyusd_uii_hostedapplication_msdyusd_windowroute_Application property value. 
     * @returns a msdyusd_windowroute
     */
    public get msdyusd_uii_hostedapplication_msdyusd_windowroute_Application() {
        return this._msdyusd_uii_hostedapplication_msdyusd_windowroute_Application;
    };
    /**
     * Sets the msdyusd_uii_hostedapplication_msdyusd_windowroute_Application property value. 
     * @param value Value to set for the msdyusd_uii_hostedapplication_msdyusd_windowroute_Application property.
     */
    public set msdyusd_uii_hostedapplication_msdyusd_windowroute_Application(value: Msdyusd_windowroute[] | undefined) {
        this._msdyusd_uii_hostedapplication_msdyusd_windowroute_Application = value;
    };
    /**
     * Gets the msdyusd_uii_hostedapplication_msdyusd_windowroute_From property value. 
     * @returns a msdyusd_windowroute
     */
    public get msdyusd_uii_hostedapplication_msdyusd_windowroute_From() {
        return this._msdyusd_uii_hostedapplication_msdyusd_windowroute_From;
    };
    /**
     * Sets the msdyusd_uii_hostedapplication_msdyusd_windowroute_From property value. 
     * @param value Value to set for the msdyusd_uii_hostedapplication_msdyusd_windowroute_From property.
     */
    public set msdyusd_uii_hostedapplication_msdyusd_windowroute_From(value: Msdyusd_windowroute[] | undefined) {
        this._msdyusd_uii_hostedapplication_msdyusd_windowroute_From = value;
    };
    /**
     * Gets the msdyusd_uii_hostedapplication_msdyusd_windowroute_showtab property value. 
     * @returns a msdyusd_windowroute
     */
    public get msdyusd_uii_hostedapplication_msdyusd_windowroute_showtab() {
        return this._msdyusd_uii_hostedapplication_msdyusd_windowroute_showtab;
    };
    /**
     * Sets the msdyusd_uii_hostedapplication_msdyusd_windowroute_showtab property value. 
     * @param value Value to set for the msdyusd_uii_hostedapplication_msdyusd_windowroute_showtab property.
     */
    public set msdyusd_uii_hostedapplication_msdyusd_windowroute_showtab(value: Msdyusd_windowroute[] | undefined) {
        this._msdyusd_uii_hostedapplication_msdyusd_windowroute_showtab = value;
    };
    /**
     * Gets the msdyusd_xaml property value. 
     * @returns a string
     */
    public get msdyusd_xaml() {
        return this._msdyusd_xaml;
    };
    /**
     * Sets the msdyusd_xaml property value. 
     * @param value Value to set for the msdyusd_xaml property.
     */
    public set msdyusd_xaml(value: string | undefined) {
        this._msdyusd_xaml = value;
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
        writer.writeBooleanValue("msdyusd_allowmultiplepages", this.msdyusd_allowmultiplepages);
        writer.writeCollectionOfObjectValues<Msdyusd_answer>("msdyusd_AnswerShowTab", this.msdyusd_AnswerShowTab);
        writer.writeNumberValue("msdyusd_apiversion", this.msdyusd_apiversion);
        writer.writeBooleanValue("msdyusd_autolaunch", this.msdyusd_autolaunch);
        writer.writeStringValue("msdyusd_cifurl", this.msdyusd_cifurl);
        writer.writeCollectionOfObjectValues<Msdyusd_configuration>("msdyusd_configuration_hostedcontrol", this.msdyusd_configuration_hostedcontrol);
        writer.writeNumberValue("msdyusd_crmwindowhosttype", this.msdyusd_crmwindowhosttype);
        writer.writeStringValue("msdyusd_customparameters", this.msdyusd_customparameters);
        writer.writeStringValue("msdyusd_dashboardname", this.msdyusd_dashboardname);
        writer.writeStringValue("msdyusd_displayname", this.msdyusd_displayname);
        writer.writeCollectionOfObjectValues<Msdyusd_form>("msdyusd_form_hostedapplication", this.msdyusd_form_hostedapplication);
        writer.writeNumberValue("msdyusd_hostingtype", this.msdyusd_hostingtype);
        writer.writeNumberValue("msdyusd_maximumbrowsers", this.msdyusd_maximumbrowsers);
        writer.writeNumberValue("msdyusd_paneltype", this.msdyusd_paneltype);
        writer.writeBooleanValue("msdyusd_prefetchdata", this.msdyusd_prefetchdata);
        writer.writeStringValue("msdyusd_savedurl", this.msdyusd_savedurl);
        writer.writeBooleanValue("msdyusd_scanfordataparameters", this.msdyusd_scanfordataparameters);
        writer.writeCollectionOfObjectValues<Msdyusd_task>("msdyusd_ShowTab", this.msdyusd_ShowTab);
        writer.writeBooleanValue("msdyusd_specifyurl", this.msdyusd_specifyurl);
        writer.writeCollectionOfObjectValues<Msdyusd_toolbarstrip>("msdyusd_toolbarstrip_uii_hostedapplication", this.msdyusd_toolbarstrip_uii_hostedapplication);
        writer.writeCollectionOfObjectValues<Msdyusd_tracesourcesetting>("msdyusd_tracesourcesetting_hostedcontrol", this.msdyusd_tracesourcesetting_hostedcontrol);
        writer.writeStringValue("msdyusd_trusteddomain", this.msdyusd_trusteddomain);
        writer.writeCollectionOfObjectValues<Msdyusd_agentscriptaction>("msdyusd_uii_hostedapplication_msdyusd_agentscriptaction_Application", this.msdyusd_uii_hostedapplication_msdyusd_agentscriptaction_Application);
        writer.writeCollectionOfObjectValues<Msdyusd_languagemodule>("msdyusd_uii_hostedapplication_msdyusd_languagemodule", this.msdyusd_uii_hostedapplication_msdyusd_languagemodule);
        writer.writeCollectionOfObjectValues<Msdyusd_toolbarbutton>("msdyusd_uii_hostedapplication_msdyusd_toolbarbutton_showtab", this.msdyusd_uii_hostedapplication_msdyusd_toolbarbutton_showtab);
        writer.writeCollectionOfObjectValues<Msdyusd_uiievent>("msdyusd_uii_hostedapplication_msdyusd_uiievent", this.msdyusd_uii_hostedapplication_msdyusd_uiievent);
        writer.writeCollectionOfObjectValues<Msdyusd_windowroute>("msdyusd_uii_hostedapplication_msdyusd_windowroute_Application", this.msdyusd_uii_hostedapplication_msdyusd_windowroute_Application);
        writer.writeCollectionOfObjectValues<Msdyusd_windowroute>("msdyusd_uii_hostedapplication_msdyusd_windowroute_From", this.msdyusd_uii_hostedapplication_msdyusd_windowroute_From);
        writer.writeCollectionOfObjectValues<Msdyusd_windowroute>("msdyusd_uii_hostedapplication_msdyusd_windowroute_showtab", this.msdyusd_uii_hostedapplication_msdyusd_windowroute_showtab);
        writer.writeStringValue("msdyusd_xaml", this.msdyusd_xaml);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("uii_adaptermode", this.uii_adaptermode);
        writer.writeStringValue("uii_adaptertype", this.uii_adaptertype);
        writer.writeStringValue("uii_adapteruri", this.uii_adapteruri);
        writer.writeNumberValue("uii_applicationhostingmode", this.uii_applicationhostingmode);
        writer.writeStringValue("uii_assemblytype", this.uii_assemblytype);
        writer.writeStringValue("uii_assemblyuri", this.uii_assemblyuri);
        writer.writeStringValue("uii_automationxml", this.uii_automationxml);
        writer.writeStringValue("uii_displaygroup", this.uii_displaygroup);
        writer.writeStringValue("uii_extensionsxml", this.uii_extensionsxml);
        writer.writeStringValue("uii_externalapparguments", this.uii_externalapparguments);
        writer.writeStringValue("uii_externalappuri", this.uii_externalappuri);
        writer.writeStringValue("uii_externalappworkingdirectory", this.uii_externalappworkingdirectory);
        writer.writeStringValue("uii_findwindowclass", this.uii_findwindowclass);
        writer.writeCollectionOfObjectValues<Activitypointer>("uii_hostedapplication_ActivityPointers", this.uii_hostedapplication_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("uii_hostedapplication_Annotations", this.uii_hostedapplication_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("uii_hostedapplication_Appointments", this.uii_hostedapplication_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("uii_hostedapplication_AsyncOperations", this.uii_hostedapplication_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("uii_hostedapplication_BulkDeleteFailures", this.uii_hostedapplication_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("uii_hostedapplication_DuplicateBaseRecord", this.uii_hostedapplication_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("uii_hostedapplication_DuplicateMatchingRecord", this.uii_hostedapplication_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("uii_hostedapplication_Emails", this.uii_hostedapplication_Emails);
        writer.writeCollectionOfObjectValues<Fax>("uii_hostedapplication_Faxes", this.uii_hostedapplication_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("uii_hostedapplication_Letters", this.uii_hostedapplication_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("uii_hostedapplication_MailboxTrackingFolders", this.uii_hostedapplication_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("uii_hostedapplication_msdyn_approvals", this.uii_hostedapplication_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("uii_hostedapplication_msdyn_bookingalerts", this.uii_hostedapplication_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("uii_hostedapplication_msdyn_ocliveworkitems", this.uii_hostedapplication_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("uii_hostedapplication_msdyn_ocoutboundmessages", this.uii_hostedapplication_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("uii_hostedapplication_msdyn_ocsessions", this.uii_hostedapplication_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("uii_hostedapplication_msfp_alerts", this.uii_hostedapplication_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("uii_hostedapplication_msfp_surveyinvites", this.uii_hostedapplication_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("uii_hostedapplication_msfp_surveyresponses", this.uii_hostedapplication_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("uii_hostedapplication_PhoneCalls", this.uii_hostedapplication_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("uii_hostedapplication_PrincipalObjectAttributeAccesses", this.uii_hostedapplication_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("uii_hostedapplication_ProcessSession", this.uii_hostedapplication_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("uii_hostedapplication_RecurringAppointmentMasters", this.uii_hostedapplication_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("uii_hostedapplication_ServiceAppointments", this.uii_hostedapplication_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("uii_hostedapplication_SocialActivities", this.uii_hostedapplication_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("uii_hostedapplication_SyncErrors", this.uii_hostedapplication_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("uii_hostedapplication_Tasks", this.uii_hostedapplication_Tasks);
        writer.writeStringValue("uii_hostedapplicationid", this.uii_hostedapplicationid);
        writer.writeNumberValue("uii_hostedapplicationtype", this.uii_hostedapplicationtype);
        writer.writeStringValue("uii_icafilename", this.uii_icafilename);
        writer.writeBooleanValue("uii_isappdynamic", this.uii_isappdynamic);
        writer.writeBooleanValue("uii_isattachinputthread", this.uii_isattachinputthread);
        writer.writeBooleanValue("uii_isautosignon", this.uii_isautosignon);
        writer.writeBooleanValue("uii_isdependentonworkflow", this.uii_isdependentonworkflow);
        writer.writeBooleanValue("uii_isglobalapplication", this.uii_isglobalapplication);
        writer.writeBooleanValue("uii_islimittoprocess", this.uii_islimittoprocess);
        writer.writeBooleanValue("uii_isnomessagepump", this.uii_isnomessagepump);
        writer.writeBooleanValue("uii_isrestoreifminimized", this.uii_isrestoreifminimized);
        writer.writeBooleanValue("uii_isretainframeandcaption", this.uii_isretainframeandcaption);
        writer.writeBooleanValue("uii_isretainontaskbar", this.uii_isretainontaskbar);
        writer.writeBooleanValue("uii_isretainsystemmenu", this.uii_isretainsystemmenu);
        writer.writeBooleanValue("uii_isshowintoolbardropdown", this.uii_isshowintoolbardropdown);
        writer.writeBooleanValue("uii_isshowmenu", this.uii_isshowmenu);
        writer.writeBooleanValue("uii_isusenewbrowserprocess", this.uii_isusenewbrowserprocess);
        writer.writeBooleanValue("uii_iswebappusetoolbar", this.uii_iswebappusetoolbar);
        writer.writeNumberValue("uii_mainwindowacquisitiontimeout", this.uii_mainwindowacquisitiontimeout);
        writer.writeBooleanValue("uii_managedapplication", this.uii_managedapplication);
        writer.writeBooleanValue("uii_managehosting", this.uii_managehosting);
        writer.writeBooleanValue("uii_managepopups", this.uii_managepopups);
        writer.writeNumberValue("uii_minimumsizex", this.uii_minimumsizex);
        writer.writeNumberValue("uii_minimumsizey", this.uii_minimumsizey);
        writer.writeStringValue("uii_name", this.uii_name);
        writer.writeNumberValue("uii_optimalsizex", this.uii_optimalsizex);
        writer.writeNumberValue("uii_optimalsizey", this.uii_optimalsizey);
        writer.writeStringValue("uii_processacquisitionfilename", this.uii_processacquisitionfilename);
        writer.writeNumberValue("uii_remote_processacquisitionattempts", this.uii_remote_processacquisitionattempts);
        writer.writeNumberValue("uii_remote_processacquisitiondelay", this.uii_remote_processacquisitiondelay);
        writer.writeBooleanValue("uii_removesizingcontrols", this.uii_removesizingcontrols);
        writer.writeNumberValue("uii_sortorder", this.uii_sortorder);
        writer.writeStringValue("uii_toplevelwindowcaption", this.uii_toplevelwindowcaption);
        writer.writeNumberValue("uii_toplevelwindowmode", this.uii_toplevelwindowmode);
        writer.writeCollectionOfObjectValues<Uii_action>("uii_uii_hostedapplication_uii_action", this.uii_uii_hostedapplication_uii_action);
        writer.writeCollectionOfObjectValues<Uii_audit>("uii_uii_hostedapplication_uii_audit", this.uii_uii_hostedapplication_uii_audit);
        writer.writeCollectionOfObjectValues<Uii_workflowstep>("uii_uii_hostedapplication_uii_workflowstep", this.uii_uii_hostedapplication_uii_workflowstep);
        writer.writeBooleanValue("uii_usercanclose", this.uii_usercanclose);
        writer.writeStringValue("uii_webappurl", this.uii_webappurl);
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
     * Gets the uii_adaptermode property value. 
     * @returns a integer
     */
    public get uii_adaptermode() {
        return this._uii_adaptermode;
    };
    /**
     * Sets the uii_adaptermode property value. 
     * @param value Value to set for the uii_adaptermode property.
     */
    public set uii_adaptermode(value: number | undefined) {
        this._uii_adaptermode = value;
    };
    /**
     * Gets the uii_adaptertype property value. 
     * @returns a string
     */
    public get uii_adaptertype() {
        return this._uii_adaptertype;
    };
    /**
     * Sets the uii_adaptertype property value. 
     * @param value Value to set for the uii_adaptertype property.
     */
    public set uii_adaptertype(value: string | undefined) {
        this._uii_adaptertype = value;
    };
    /**
     * Gets the uii_adapteruri property value. 
     * @returns a string
     */
    public get uii_adapteruri() {
        return this._uii_adapteruri;
    };
    /**
     * Sets the uii_adapteruri property value. 
     * @param value Value to set for the uii_adapteruri property.
     */
    public set uii_adapteruri(value: string | undefined) {
        this._uii_adapteruri = value;
    };
    /**
     * Gets the uii_applicationhostingmode property value. 
     * @returns a integer
     */
    public get uii_applicationhostingmode() {
        return this._uii_applicationhostingmode;
    };
    /**
     * Sets the uii_applicationhostingmode property value. 
     * @param value Value to set for the uii_applicationhostingmode property.
     */
    public set uii_applicationhostingmode(value: number | undefined) {
        this._uii_applicationhostingmode = value;
    };
    /**
     * Gets the uii_assemblytype property value. 
     * @returns a string
     */
    public get uii_assemblytype() {
        return this._uii_assemblytype;
    };
    /**
     * Sets the uii_assemblytype property value. 
     * @param value Value to set for the uii_assemblytype property.
     */
    public set uii_assemblytype(value: string | undefined) {
        this._uii_assemblytype = value;
    };
    /**
     * Gets the uii_assemblyuri property value. 
     * @returns a string
     */
    public get uii_assemblyuri() {
        return this._uii_assemblyuri;
    };
    /**
     * Sets the uii_assemblyuri property value. 
     * @param value Value to set for the uii_assemblyuri property.
     */
    public set uii_assemblyuri(value: string | undefined) {
        this._uii_assemblyuri = value;
    };
    /**
     * Gets the uii_automationxml property value. 
     * @returns a string
     */
    public get uii_automationxml() {
        return this._uii_automationxml;
    };
    /**
     * Sets the uii_automationxml property value. 
     * @param value Value to set for the uii_automationxml property.
     */
    public set uii_automationxml(value: string | undefined) {
        this._uii_automationxml = value;
    };
    /**
     * Gets the uii_displaygroup property value. 
     * @returns a string
     */
    public get uii_displaygroup() {
        return this._uii_displaygroup;
    };
    /**
     * Sets the uii_displaygroup property value. 
     * @param value Value to set for the uii_displaygroup property.
     */
    public set uii_displaygroup(value: string | undefined) {
        this._uii_displaygroup = value;
    };
    /**
     * Gets the uii_extensionsxml property value. 
     * @returns a string
     */
    public get uii_extensionsxml() {
        return this._uii_extensionsxml;
    };
    /**
     * Sets the uii_extensionsxml property value. 
     * @param value Value to set for the uii_extensionsxml property.
     */
    public set uii_extensionsxml(value: string | undefined) {
        this._uii_extensionsxml = value;
    };
    /**
     * Gets the uii_externalapparguments property value. 
     * @returns a string
     */
    public get uii_externalapparguments() {
        return this._uii_externalapparguments;
    };
    /**
     * Sets the uii_externalapparguments property value. 
     * @param value Value to set for the uii_externalapparguments property.
     */
    public set uii_externalapparguments(value: string | undefined) {
        this._uii_externalapparguments = value;
    };
    /**
     * Gets the uii_externalappuri property value. 
     * @returns a string
     */
    public get uii_externalappuri() {
        return this._uii_externalappuri;
    };
    /**
     * Sets the uii_externalappuri property value. 
     * @param value Value to set for the uii_externalappuri property.
     */
    public set uii_externalappuri(value: string | undefined) {
        this._uii_externalappuri = value;
    };
    /**
     * Gets the uii_externalappworkingdirectory property value. 
     * @returns a string
     */
    public get uii_externalappworkingdirectory() {
        return this._uii_externalappworkingdirectory;
    };
    /**
     * Sets the uii_externalappworkingdirectory property value. 
     * @param value Value to set for the uii_externalappworkingdirectory property.
     */
    public set uii_externalappworkingdirectory(value: string | undefined) {
        this._uii_externalappworkingdirectory = value;
    };
    /**
     * Gets the uii_findwindowclass property value. 
     * @returns a string
     */
    public get uii_findwindowclass() {
        return this._uii_findwindowclass;
    };
    /**
     * Sets the uii_findwindowclass property value. 
     * @param value Value to set for the uii_findwindowclass property.
     */
    public set uii_findwindowclass(value: string | undefined) {
        this._uii_findwindowclass = value;
    };
    /**
     * Gets the uii_hostedapplication_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get uii_hostedapplication_ActivityPointers() {
        return this._uii_hostedapplication_ActivityPointers;
    };
    /**
     * Sets the uii_hostedapplication_ActivityPointers property value. 
     * @param value Value to set for the uii_hostedapplication_ActivityPointers property.
     */
    public set uii_hostedapplication_ActivityPointers(value: Activitypointer[] | undefined) {
        this._uii_hostedapplication_ActivityPointers = value;
    };
    /**
     * Gets the uii_hostedapplication_Annotations property value. 
     * @returns a annotation
     */
    public get uii_hostedapplication_Annotations() {
        return this._uii_hostedapplication_Annotations;
    };
    /**
     * Sets the uii_hostedapplication_Annotations property value. 
     * @param value Value to set for the uii_hostedapplication_Annotations property.
     */
    public set uii_hostedapplication_Annotations(value: Annotation[] | undefined) {
        this._uii_hostedapplication_Annotations = value;
    };
    /**
     * Gets the uii_hostedapplication_Appointments property value. 
     * @returns a appointment
     */
    public get uii_hostedapplication_Appointments() {
        return this._uii_hostedapplication_Appointments;
    };
    /**
     * Sets the uii_hostedapplication_Appointments property value. 
     * @param value Value to set for the uii_hostedapplication_Appointments property.
     */
    public set uii_hostedapplication_Appointments(value: Appointment[] | undefined) {
        this._uii_hostedapplication_Appointments = value;
    };
    /**
     * Gets the uii_hostedapplication_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get uii_hostedapplication_AsyncOperations() {
        return this._uii_hostedapplication_AsyncOperations;
    };
    /**
     * Sets the uii_hostedapplication_AsyncOperations property value. 
     * @param value Value to set for the uii_hostedapplication_AsyncOperations property.
     */
    public set uii_hostedapplication_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._uii_hostedapplication_AsyncOperations = value;
    };
    /**
     * Gets the uii_hostedapplication_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get uii_hostedapplication_BulkDeleteFailures() {
        return this._uii_hostedapplication_BulkDeleteFailures;
    };
    /**
     * Sets the uii_hostedapplication_BulkDeleteFailures property value. 
     * @param value Value to set for the uii_hostedapplication_BulkDeleteFailures property.
     */
    public set uii_hostedapplication_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._uii_hostedapplication_BulkDeleteFailures = value;
    };
    /**
     * Gets the uii_hostedapplication_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get uii_hostedapplication_DuplicateBaseRecord() {
        return this._uii_hostedapplication_DuplicateBaseRecord;
    };
    /**
     * Sets the uii_hostedapplication_DuplicateBaseRecord property value. 
     * @param value Value to set for the uii_hostedapplication_DuplicateBaseRecord property.
     */
    public set uii_hostedapplication_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._uii_hostedapplication_DuplicateBaseRecord = value;
    };
    /**
     * Gets the uii_hostedapplication_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get uii_hostedapplication_DuplicateMatchingRecord() {
        return this._uii_hostedapplication_DuplicateMatchingRecord;
    };
    /**
     * Sets the uii_hostedapplication_DuplicateMatchingRecord property value. 
     * @param value Value to set for the uii_hostedapplication_DuplicateMatchingRecord property.
     */
    public set uii_hostedapplication_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._uii_hostedapplication_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the uii_hostedapplication_Emails property value. 
     * @returns a email
     */
    public get uii_hostedapplication_Emails() {
        return this._uii_hostedapplication_Emails;
    };
    /**
     * Sets the uii_hostedapplication_Emails property value. 
     * @param value Value to set for the uii_hostedapplication_Emails property.
     */
    public set uii_hostedapplication_Emails(value: Email[] | undefined) {
        this._uii_hostedapplication_Emails = value;
    };
    /**
     * Gets the uii_hostedapplication_Faxes property value. 
     * @returns a fax
     */
    public get uii_hostedapplication_Faxes() {
        return this._uii_hostedapplication_Faxes;
    };
    /**
     * Sets the uii_hostedapplication_Faxes property value. 
     * @param value Value to set for the uii_hostedapplication_Faxes property.
     */
    public set uii_hostedapplication_Faxes(value: Fax[] | undefined) {
        this._uii_hostedapplication_Faxes = value;
    };
    /**
     * Gets the uii_hostedapplication_Letters property value. 
     * @returns a letter
     */
    public get uii_hostedapplication_Letters() {
        return this._uii_hostedapplication_Letters;
    };
    /**
     * Sets the uii_hostedapplication_Letters property value. 
     * @param value Value to set for the uii_hostedapplication_Letters property.
     */
    public set uii_hostedapplication_Letters(value: Letter[] | undefined) {
        this._uii_hostedapplication_Letters = value;
    };
    /**
     * Gets the uii_hostedapplication_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get uii_hostedapplication_MailboxTrackingFolders() {
        return this._uii_hostedapplication_MailboxTrackingFolders;
    };
    /**
     * Sets the uii_hostedapplication_MailboxTrackingFolders property value. 
     * @param value Value to set for the uii_hostedapplication_MailboxTrackingFolders property.
     */
    public set uii_hostedapplication_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._uii_hostedapplication_MailboxTrackingFolders = value;
    };
    /**
     * Gets the uii_hostedapplication_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get uii_hostedapplication_msdyn_approvals() {
        return this._uii_hostedapplication_msdyn_approvals;
    };
    /**
     * Sets the uii_hostedapplication_msdyn_approvals property value. 
     * @param value Value to set for the uii_hostedapplication_msdyn_approvals property.
     */
    public set uii_hostedapplication_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._uii_hostedapplication_msdyn_approvals = value;
    };
    /**
     * Gets the uii_hostedapplication_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get uii_hostedapplication_msdyn_bookingalerts() {
        return this._uii_hostedapplication_msdyn_bookingalerts;
    };
    /**
     * Sets the uii_hostedapplication_msdyn_bookingalerts property value. 
     * @param value Value to set for the uii_hostedapplication_msdyn_bookingalerts property.
     */
    public set uii_hostedapplication_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._uii_hostedapplication_msdyn_bookingalerts = value;
    };
    /**
     * Gets the uii_hostedapplication_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get uii_hostedapplication_msdyn_ocliveworkitems() {
        return this._uii_hostedapplication_msdyn_ocliveworkitems;
    };
    /**
     * Sets the uii_hostedapplication_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the uii_hostedapplication_msdyn_ocliveworkitems property.
     */
    public set uii_hostedapplication_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._uii_hostedapplication_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the uii_hostedapplication_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get uii_hostedapplication_msdyn_ocoutboundmessages() {
        return this._uii_hostedapplication_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the uii_hostedapplication_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the uii_hostedapplication_msdyn_ocoutboundmessages property.
     */
    public set uii_hostedapplication_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._uii_hostedapplication_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the uii_hostedapplication_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get uii_hostedapplication_msdyn_ocsessions() {
        return this._uii_hostedapplication_msdyn_ocsessions;
    };
    /**
     * Sets the uii_hostedapplication_msdyn_ocsessions property value. 
     * @param value Value to set for the uii_hostedapplication_msdyn_ocsessions property.
     */
    public set uii_hostedapplication_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._uii_hostedapplication_msdyn_ocsessions = value;
    };
    /**
     * Gets the uii_hostedapplication_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get uii_hostedapplication_msfp_alerts() {
        return this._uii_hostedapplication_msfp_alerts;
    };
    /**
     * Sets the uii_hostedapplication_msfp_alerts property value. 
     * @param value Value to set for the uii_hostedapplication_msfp_alerts property.
     */
    public set uii_hostedapplication_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._uii_hostedapplication_msfp_alerts = value;
    };
    /**
     * Gets the uii_hostedapplication_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get uii_hostedapplication_msfp_surveyinvites() {
        return this._uii_hostedapplication_msfp_surveyinvites;
    };
    /**
     * Sets the uii_hostedapplication_msfp_surveyinvites property value. 
     * @param value Value to set for the uii_hostedapplication_msfp_surveyinvites property.
     */
    public set uii_hostedapplication_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._uii_hostedapplication_msfp_surveyinvites = value;
    };
    /**
     * Gets the uii_hostedapplication_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get uii_hostedapplication_msfp_surveyresponses() {
        return this._uii_hostedapplication_msfp_surveyresponses;
    };
    /**
     * Sets the uii_hostedapplication_msfp_surveyresponses property value. 
     * @param value Value to set for the uii_hostedapplication_msfp_surveyresponses property.
     */
    public set uii_hostedapplication_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._uii_hostedapplication_msfp_surveyresponses = value;
    };
    /**
     * Gets the uii_hostedapplication_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get uii_hostedapplication_PhoneCalls() {
        return this._uii_hostedapplication_PhoneCalls;
    };
    /**
     * Sets the uii_hostedapplication_PhoneCalls property value. 
     * @param value Value to set for the uii_hostedapplication_PhoneCalls property.
     */
    public set uii_hostedapplication_PhoneCalls(value: Phonecall[] | undefined) {
        this._uii_hostedapplication_PhoneCalls = value;
    };
    /**
     * Gets the uii_hostedapplication_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get uii_hostedapplication_PrincipalObjectAttributeAccesses() {
        return this._uii_hostedapplication_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the uii_hostedapplication_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the uii_hostedapplication_PrincipalObjectAttributeAccesses property.
     */
    public set uii_hostedapplication_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._uii_hostedapplication_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the uii_hostedapplication_ProcessSession property value. 
     * @returns a processsession
     */
    public get uii_hostedapplication_ProcessSession() {
        return this._uii_hostedapplication_ProcessSession;
    };
    /**
     * Sets the uii_hostedapplication_ProcessSession property value. 
     * @param value Value to set for the uii_hostedapplication_ProcessSession property.
     */
    public set uii_hostedapplication_ProcessSession(value: Processsession[] | undefined) {
        this._uii_hostedapplication_ProcessSession = value;
    };
    /**
     * Gets the uii_hostedapplication_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get uii_hostedapplication_RecurringAppointmentMasters() {
        return this._uii_hostedapplication_RecurringAppointmentMasters;
    };
    /**
     * Sets the uii_hostedapplication_RecurringAppointmentMasters property value. 
     * @param value Value to set for the uii_hostedapplication_RecurringAppointmentMasters property.
     */
    public set uii_hostedapplication_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._uii_hostedapplication_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the uii_hostedapplication_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get uii_hostedapplication_ServiceAppointments() {
        return this._uii_hostedapplication_ServiceAppointments;
    };
    /**
     * Sets the uii_hostedapplication_ServiceAppointments property value. 
     * @param value Value to set for the uii_hostedapplication_ServiceAppointments property.
     */
    public set uii_hostedapplication_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._uii_hostedapplication_ServiceAppointments = value;
    };
    /**
     * Gets the uii_hostedapplication_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get uii_hostedapplication_SocialActivities() {
        return this._uii_hostedapplication_SocialActivities;
    };
    /**
     * Sets the uii_hostedapplication_SocialActivities property value. 
     * @param value Value to set for the uii_hostedapplication_SocialActivities property.
     */
    public set uii_hostedapplication_SocialActivities(value: Socialactivity[] | undefined) {
        this._uii_hostedapplication_SocialActivities = value;
    };
    /**
     * Gets the uii_hostedapplication_SyncErrors property value. 
     * @returns a syncerror
     */
    public get uii_hostedapplication_SyncErrors() {
        return this._uii_hostedapplication_SyncErrors;
    };
    /**
     * Sets the uii_hostedapplication_SyncErrors property value. 
     * @param value Value to set for the uii_hostedapplication_SyncErrors property.
     */
    public set uii_hostedapplication_SyncErrors(value: Syncerror[] | undefined) {
        this._uii_hostedapplication_SyncErrors = value;
    };
    /**
     * Gets the uii_hostedapplication_Tasks property value. 
     * @returns a task
     */
    public get uii_hostedapplication_Tasks() {
        return this._uii_hostedapplication_Tasks;
    };
    /**
     * Sets the uii_hostedapplication_Tasks property value. 
     * @param value Value to set for the uii_hostedapplication_Tasks property.
     */
    public set uii_hostedapplication_Tasks(value: Task[] | undefined) {
        this._uii_hostedapplication_Tasks = value;
    };
    /**
     * Gets the uii_hostedapplicationid property value. 
     * @returns a string
     */
    public get uii_hostedapplicationid() {
        return this._uii_hostedapplicationid;
    };
    /**
     * Sets the uii_hostedapplicationid property value. 
     * @param value Value to set for the uii_hostedapplicationid property.
     */
    public set uii_hostedapplicationid(value: string | undefined) {
        this._uii_hostedapplicationid = value;
    };
    /**
     * Gets the uii_hostedapplicationtype property value. 
     * @returns a integer
     */
    public get uii_hostedapplicationtype() {
        return this._uii_hostedapplicationtype;
    };
    /**
     * Sets the uii_hostedapplicationtype property value. 
     * @param value Value to set for the uii_hostedapplicationtype property.
     */
    public set uii_hostedapplicationtype(value: number | undefined) {
        this._uii_hostedapplicationtype = value;
    };
    /**
     * Gets the uii_icafilename property value. 
     * @returns a string
     */
    public get uii_icafilename() {
        return this._uii_icafilename;
    };
    /**
     * Sets the uii_icafilename property value. 
     * @param value Value to set for the uii_icafilename property.
     */
    public set uii_icafilename(value: string | undefined) {
        this._uii_icafilename = value;
    };
    /**
     * Gets the uii_isappdynamic property value. 
     * @returns a boolean
     */
    public get uii_isappdynamic() {
        return this._uii_isappdynamic;
    };
    /**
     * Sets the uii_isappdynamic property value. 
     * @param value Value to set for the uii_isappdynamic property.
     */
    public set uii_isappdynamic(value: boolean | undefined) {
        this._uii_isappdynamic = value;
    };
    /**
     * Gets the uii_isattachinputthread property value. 
     * @returns a boolean
     */
    public get uii_isattachinputthread() {
        return this._uii_isattachinputthread;
    };
    /**
     * Sets the uii_isattachinputthread property value. 
     * @param value Value to set for the uii_isattachinputthread property.
     */
    public set uii_isattachinputthread(value: boolean | undefined) {
        this._uii_isattachinputthread = value;
    };
    /**
     * Gets the uii_isautosignon property value. 
     * @returns a boolean
     */
    public get uii_isautosignon() {
        return this._uii_isautosignon;
    };
    /**
     * Sets the uii_isautosignon property value. 
     * @param value Value to set for the uii_isautosignon property.
     */
    public set uii_isautosignon(value: boolean | undefined) {
        this._uii_isautosignon = value;
    };
    /**
     * Gets the uii_isdependentonworkflow property value. 
     * @returns a boolean
     */
    public get uii_isdependentonworkflow() {
        return this._uii_isdependentonworkflow;
    };
    /**
     * Sets the uii_isdependentonworkflow property value. 
     * @param value Value to set for the uii_isdependentonworkflow property.
     */
    public set uii_isdependentonworkflow(value: boolean | undefined) {
        this._uii_isdependentonworkflow = value;
    };
    /**
     * Gets the uii_isglobalapplication property value. 
     * @returns a boolean
     */
    public get uii_isglobalapplication() {
        return this._uii_isglobalapplication;
    };
    /**
     * Sets the uii_isglobalapplication property value. 
     * @param value Value to set for the uii_isglobalapplication property.
     */
    public set uii_isglobalapplication(value: boolean | undefined) {
        this._uii_isglobalapplication = value;
    };
    /**
     * Gets the uii_islimittoprocess property value. 
     * @returns a boolean
     */
    public get uii_islimittoprocess() {
        return this._uii_islimittoprocess;
    };
    /**
     * Sets the uii_islimittoprocess property value. 
     * @param value Value to set for the uii_islimittoprocess property.
     */
    public set uii_islimittoprocess(value: boolean | undefined) {
        this._uii_islimittoprocess = value;
    };
    /**
     * Gets the uii_isnomessagepump property value. 
     * @returns a boolean
     */
    public get uii_isnomessagepump() {
        return this._uii_isnomessagepump;
    };
    /**
     * Sets the uii_isnomessagepump property value. 
     * @param value Value to set for the uii_isnomessagepump property.
     */
    public set uii_isnomessagepump(value: boolean | undefined) {
        this._uii_isnomessagepump = value;
    };
    /**
     * Gets the uii_isrestoreifminimized property value. 
     * @returns a boolean
     */
    public get uii_isrestoreifminimized() {
        return this._uii_isrestoreifminimized;
    };
    /**
     * Sets the uii_isrestoreifminimized property value. 
     * @param value Value to set for the uii_isrestoreifminimized property.
     */
    public set uii_isrestoreifminimized(value: boolean | undefined) {
        this._uii_isrestoreifminimized = value;
    };
    /**
     * Gets the uii_isretainframeandcaption property value. 
     * @returns a boolean
     */
    public get uii_isretainframeandcaption() {
        return this._uii_isretainframeandcaption;
    };
    /**
     * Sets the uii_isretainframeandcaption property value. 
     * @param value Value to set for the uii_isretainframeandcaption property.
     */
    public set uii_isretainframeandcaption(value: boolean | undefined) {
        this._uii_isretainframeandcaption = value;
    };
    /**
     * Gets the uii_isretainontaskbar property value. 
     * @returns a boolean
     */
    public get uii_isretainontaskbar() {
        return this._uii_isretainontaskbar;
    };
    /**
     * Sets the uii_isretainontaskbar property value. 
     * @param value Value to set for the uii_isretainontaskbar property.
     */
    public set uii_isretainontaskbar(value: boolean | undefined) {
        this._uii_isretainontaskbar = value;
    };
    /**
     * Gets the uii_isretainsystemmenu property value. 
     * @returns a boolean
     */
    public get uii_isretainsystemmenu() {
        return this._uii_isretainsystemmenu;
    };
    /**
     * Sets the uii_isretainsystemmenu property value. 
     * @param value Value to set for the uii_isretainsystemmenu property.
     */
    public set uii_isretainsystemmenu(value: boolean | undefined) {
        this._uii_isretainsystemmenu = value;
    };
    /**
     * Gets the uii_isshowintoolbardropdown property value. 
     * @returns a boolean
     */
    public get uii_isshowintoolbardropdown() {
        return this._uii_isshowintoolbardropdown;
    };
    /**
     * Sets the uii_isshowintoolbardropdown property value. 
     * @param value Value to set for the uii_isshowintoolbardropdown property.
     */
    public set uii_isshowintoolbardropdown(value: boolean | undefined) {
        this._uii_isshowintoolbardropdown = value;
    };
    /**
     * Gets the uii_isshowmenu property value. 
     * @returns a boolean
     */
    public get uii_isshowmenu() {
        return this._uii_isshowmenu;
    };
    /**
     * Sets the uii_isshowmenu property value. 
     * @param value Value to set for the uii_isshowmenu property.
     */
    public set uii_isshowmenu(value: boolean | undefined) {
        this._uii_isshowmenu = value;
    };
    /**
     * Gets the uii_isusenewbrowserprocess property value. 
     * @returns a boolean
     */
    public get uii_isusenewbrowserprocess() {
        return this._uii_isusenewbrowserprocess;
    };
    /**
     * Sets the uii_isusenewbrowserprocess property value. 
     * @param value Value to set for the uii_isusenewbrowserprocess property.
     */
    public set uii_isusenewbrowserprocess(value: boolean | undefined) {
        this._uii_isusenewbrowserprocess = value;
    };
    /**
     * Gets the uii_iswebappusetoolbar property value. 
     * @returns a boolean
     */
    public get uii_iswebappusetoolbar() {
        return this._uii_iswebappusetoolbar;
    };
    /**
     * Sets the uii_iswebappusetoolbar property value. 
     * @param value Value to set for the uii_iswebappusetoolbar property.
     */
    public set uii_iswebappusetoolbar(value: boolean | undefined) {
        this._uii_iswebappusetoolbar = value;
    };
    /**
     * Gets the uii_mainwindowacquisitiontimeout property value. 
     * @returns a integer
     */
    public get uii_mainwindowacquisitiontimeout() {
        return this._uii_mainwindowacquisitiontimeout;
    };
    /**
     * Sets the uii_mainwindowacquisitiontimeout property value. 
     * @param value Value to set for the uii_mainwindowacquisitiontimeout property.
     */
    public set uii_mainwindowacquisitiontimeout(value: number | undefined) {
        this._uii_mainwindowacquisitiontimeout = value;
    };
    /**
     * Gets the uii_managedapplication property value. 
     * @returns a boolean
     */
    public get uii_managedapplication() {
        return this._uii_managedapplication;
    };
    /**
     * Sets the uii_managedapplication property value. 
     * @param value Value to set for the uii_managedapplication property.
     */
    public set uii_managedapplication(value: boolean | undefined) {
        this._uii_managedapplication = value;
    };
    /**
     * Gets the uii_managehosting property value. 
     * @returns a boolean
     */
    public get uii_managehosting() {
        return this._uii_managehosting;
    };
    /**
     * Sets the uii_managehosting property value. 
     * @param value Value to set for the uii_managehosting property.
     */
    public set uii_managehosting(value: boolean | undefined) {
        this._uii_managehosting = value;
    };
    /**
     * Gets the uii_managepopups property value. 
     * @returns a boolean
     */
    public get uii_managepopups() {
        return this._uii_managepopups;
    };
    /**
     * Sets the uii_managepopups property value. 
     * @param value Value to set for the uii_managepopups property.
     */
    public set uii_managepopups(value: boolean | undefined) {
        this._uii_managepopups = value;
    };
    /**
     * Gets the uii_minimumsizex property value. 
     * @returns a integer
     */
    public get uii_minimumsizex() {
        return this._uii_minimumsizex;
    };
    /**
     * Sets the uii_minimumsizex property value. 
     * @param value Value to set for the uii_minimumsizex property.
     */
    public set uii_minimumsizex(value: number | undefined) {
        this._uii_minimumsizex = value;
    };
    /**
     * Gets the uii_minimumsizey property value. 
     * @returns a integer
     */
    public get uii_minimumsizey() {
        return this._uii_minimumsizey;
    };
    /**
     * Sets the uii_minimumsizey property value. 
     * @param value Value to set for the uii_minimumsizey property.
     */
    public set uii_minimumsizey(value: number | undefined) {
        this._uii_minimumsizey = value;
    };
    /**
     * Gets the uii_name property value. 
     * @returns a string
     */
    public get uii_name() {
        return this._uii_name;
    };
    /**
     * Sets the uii_name property value. 
     * @param value Value to set for the uii_name property.
     */
    public set uii_name(value: string | undefined) {
        this._uii_name = value;
    };
    /**
     * Gets the uii_optimalsizex property value. 
     * @returns a integer
     */
    public get uii_optimalsizex() {
        return this._uii_optimalsizex;
    };
    /**
     * Sets the uii_optimalsizex property value. 
     * @param value Value to set for the uii_optimalsizex property.
     */
    public set uii_optimalsizex(value: number | undefined) {
        this._uii_optimalsizex = value;
    };
    /**
     * Gets the uii_optimalsizey property value. 
     * @returns a integer
     */
    public get uii_optimalsizey() {
        return this._uii_optimalsizey;
    };
    /**
     * Sets the uii_optimalsizey property value. 
     * @param value Value to set for the uii_optimalsizey property.
     */
    public set uii_optimalsizey(value: number | undefined) {
        this._uii_optimalsizey = value;
    };
    /**
     * Gets the uii_processacquisitionfilename property value. 
     * @returns a string
     */
    public get uii_processacquisitionfilename() {
        return this._uii_processacquisitionfilename;
    };
    /**
     * Sets the uii_processacquisitionfilename property value. 
     * @param value Value to set for the uii_processacquisitionfilename property.
     */
    public set uii_processacquisitionfilename(value: string | undefined) {
        this._uii_processacquisitionfilename = value;
    };
    /**
     * Gets the uii_remote_processacquisitionattempts property value. 
     * @returns a integer
     */
    public get uii_remote_processacquisitionattempts() {
        return this._uii_remote_processacquisitionattempts;
    };
    /**
     * Sets the uii_remote_processacquisitionattempts property value. 
     * @param value Value to set for the uii_remote_processacquisitionattempts property.
     */
    public set uii_remote_processacquisitionattempts(value: number | undefined) {
        this._uii_remote_processacquisitionattempts = value;
    };
    /**
     * Gets the uii_remote_processacquisitiondelay property value. 
     * @returns a integer
     */
    public get uii_remote_processacquisitiondelay() {
        return this._uii_remote_processacquisitiondelay;
    };
    /**
     * Sets the uii_remote_processacquisitiondelay property value. 
     * @param value Value to set for the uii_remote_processacquisitiondelay property.
     */
    public set uii_remote_processacquisitiondelay(value: number | undefined) {
        this._uii_remote_processacquisitiondelay = value;
    };
    /**
     * Gets the uii_removesizingcontrols property value. 
     * @returns a boolean
     */
    public get uii_removesizingcontrols() {
        return this._uii_removesizingcontrols;
    };
    /**
     * Sets the uii_removesizingcontrols property value. 
     * @param value Value to set for the uii_removesizingcontrols property.
     */
    public set uii_removesizingcontrols(value: boolean | undefined) {
        this._uii_removesizingcontrols = value;
    };
    /**
     * Gets the uii_sortorder property value. 
     * @returns a integer
     */
    public get uii_sortorder() {
        return this._uii_sortorder;
    };
    /**
     * Sets the uii_sortorder property value. 
     * @param value Value to set for the uii_sortorder property.
     */
    public set uii_sortorder(value: number | undefined) {
        this._uii_sortorder = value;
    };
    /**
     * Gets the uii_toplevelwindowcaption property value. 
     * @returns a string
     */
    public get uii_toplevelwindowcaption() {
        return this._uii_toplevelwindowcaption;
    };
    /**
     * Sets the uii_toplevelwindowcaption property value. 
     * @param value Value to set for the uii_toplevelwindowcaption property.
     */
    public set uii_toplevelwindowcaption(value: string | undefined) {
        this._uii_toplevelwindowcaption = value;
    };
    /**
     * Gets the uii_toplevelwindowmode property value. 
     * @returns a integer
     */
    public get uii_toplevelwindowmode() {
        return this._uii_toplevelwindowmode;
    };
    /**
     * Sets the uii_toplevelwindowmode property value. 
     * @param value Value to set for the uii_toplevelwindowmode property.
     */
    public set uii_toplevelwindowmode(value: number | undefined) {
        this._uii_toplevelwindowmode = value;
    };
    /**
     * Gets the uii_uii_hostedapplication_uii_action property value. 
     * @returns a uii_action
     */
    public get uii_uii_hostedapplication_uii_action() {
        return this._uii_uii_hostedapplication_uii_action;
    };
    /**
     * Sets the uii_uii_hostedapplication_uii_action property value. 
     * @param value Value to set for the uii_uii_hostedapplication_uii_action property.
     */
    public set uii_uii_hostedapplication_uii_action(value: Uii_action[] | undefined) {
        this._uii_uii_hostedapplication_uii_action = value;
    };
    /**
     * Gets the uii_uii_hostedapplication_uii_audit property value. 
     * @returns a uii_audit
     */
    public get uii_uii_hostedapplication_uii_audit() {
        return this._uii_uii_hostedapplication_uii_audit;
    };
    /**
     * Sets the uii_uii_hostedapplication_uii_audit property value. 
     * @param value Value to set for the uii_uii_hostedapplication_uii_audit property.
     */
    public set uii_uii_hostedapplication_uii_audit(value: Uii_audit[] | undefined) {
        this._uii_uii_hostedapplication_uii_audit = value;
    };
    /**
     * Gets the uii_uii_hostedapplication_uii_workflowstep property value. 
     * @returns a uii_workflowstep
     */
    public get uii_uii_hostedapplication_uii_workflowstep() {
        return this._uii_uii_hostedapplication_uii_workflowstep;
    };
    /**
     * Sets the uii_uii_hostedapplication_uii_workflowstep property value. 
     * @param value Value to set for the uii_uii_hostedapplication_uii_workflowstep property.
     */
    public set uii_uii_hostedapplication_uii_workflowstep(value: Uii_workflowstep[] | undefined) {
        this._uii_uii_hostedapplication_uii_workflowstep = value;
    };
    /**
     * Gets the uii_usercanclose property value. 
     * @returns a boolean
     */
    public get uii_usercanclose() {
        return this._uii_usercanclose;
    };
    /**
     * Sets the uii_usercanclose property value. 
     * @param value Value to set for the uii_usercanclose property.
     */
    public set uii_usercanclose(value: boolean | undefined) {
        this._uii_usercanclose = value;
    };
    /**
     * Gets the uii_webappurl property value. 
     * @returns a string
     */
    public get uii_webappurl() {
        return this._uii_webappurl;
    };
    /**
     * Sets the uii_webappurl property value. 
     * @param value Value to set for the uii_webappurl property.
     */
    public set uii_webappurl(value: string | undefined) {
        this._uii_webappurl = value;
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
