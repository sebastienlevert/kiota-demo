import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_authenticationsettingsFromDiscriminatorValue} from './createMsdyn_authenticationsettingsFromDiscriminatorValue';
import {createMsdyn_chatquestionnaireresponseFromDiscriminatorValue} from './createMsdyn_chatquestionnaireresponseFromDiscriminatorValue';
import {createMsdyn_chatwidgetlanguageFromDiscriminatorValue} from './createMsdyn_chatwidgetlanguageFromDiscriminatorValue';
import {createMsdyn_livechatwidgetlocationFromDiscriminatorValue} from './createMsdyn_livechatwidgetlocationFromDiscriminatorValue';
import {createMsdyn_liveworkstreamFromDiscriminatorValue} from './createMsdyn_liveworkstreamFromDiscriminatorValue';
import {createMsdyn_oc_geolocationproviderFromDiscriminatorValue} from './createMsdyn_oc_geolocationproviderFromDiscriminatorValue';
import {createMsdyn_oclanguageFromDiscriminatorValue} from './createMsdyn_oclanguageFromDiscriminatorValue';
import {createMsdyn_ocsystemmessageFromDiscriminatorValue} from './createMsdyn_ocsystemmessageFromDiscriminatorValue';
import {createMsdyn_operatinghourFromDiscriminatorValue} from './createMsdyn_operatinghourFromDiscriminatorValue';
import {createMsdyn_questionsequenceFromDiscriminatorValue} from './createMsdyn_questionsequenceFromDiscriminatorValue';
import {createMsfp_surveyFromDiscriminatorValue} from './createMsfp_surveyFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_authenticationsettings, Msdyn_chatquestionnaireresponse, Msdyn_chatwidgetlanguage, Msdyn_livechatwidgetlocation, Msdyn_liveworkstream, Msdyn_oc_geolocationprovider, Msdyn_oclanguage, Msdyn_ocsystemmessage, Msdyn_operatinghour, Msdyn_questionsequence, Msfp_survey, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_livechatconfig extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_authsettingsid_value?: string | undefined;
    private __msdyn_liveworkstreamid_value?: string | undefined;
    private __msdyn_oc_geolocationprovider_value?: string | undefined;
    private __msdyn_ocwidgetlanguage_value?: string | undefined;
    private __msdyn_operatinghourid_value?: string | undefined;
    private __msdyn_postconversationsurvey_value?: string | undefined;
    private __msdyn_prechatquestionnaireauthenticated_value?: string | undefined;
    private __msdyn_prechatquestionnaireunauthenticated_value?: string | undefined;
    private __msdyn_widgetlocale_value?: string | undefined;
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
    private _msdyn_agentdisplayname?: number | undefined;
    private _msdyn_AuthsettingsId?: Msdyn_authenticationsettings | undefined;
    private _msdyn_autodetectlanguage?: boolean | undefined;
    private _msdyn_avatarurl?: string | undefined;
    private _msdyn_averagewaittime_enabled?: boolean | undefined;
    private _msdyn_callingoptions?: number | undefined;
    private _msdyn_cobrowseprovider?: string | undefined;
    private _msdyn_conversationmode?: number | undefined;
    private _msdyn_duringnonoperatinghours?: string | undefined;
    private _msdyn_emailtemplate?: string | undefined;
    private _msdyn_enablechatreconnect?: boolean | undefined;
    private _msdyn_enablechattranscriptdownload?: boolean | undefined;
    private _msdyn_enablechattranscriptemail?: boolean | undefined;
    private _msdyn_enablecobrowse?: boolean | undefined;
    private _msdyn_enablefileattachmentsforagents?: boolean | undefined;
    private _msdyn_enablefileattachmentsforcustomers?: boolean | undefined;
    private _msdyn_enablescreensharing?: boolean | undefined;
    private _msdyn_genericagentdisplayname?: string | undefined;
    private _msdyn_infolabel?: string | undefined;
    private _msdyn_language?: number | undefined;
    private _msdyn_livechatconfig_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_livechatconfig_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_livechatconfig_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_livechatconfig_msdyn_ocsystemmessage?: Msdyn_ocsystemmessage[] | undefined;
    private _msdyn_livechatconfig_msdyn_questionsequence?: Msdyn_questionsequence[] | undefined;
    private _msdyn_livechatconfig_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_livechatconfig_ProcessSession?: Processsession[] | undefined;
    private _msdyn_livechatconfig_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_livechatconfigid?: string | undefined;
    private _msdyn_liveworkstreamid?: Msdyn_liveworkstream | undefined;
    private _msdyn_mailbox?: string | undefined;
    private _msdyn_msdyn_livechatconfig_msdyn_chatquestionnaireresponse?: Msdyn_chatquestionnaireresponse[] | undefined;
    private _msdyn_msdyn_livechatconfig_msdyn_livechatwidgetlocation_livechatconfigid?: Msdyn_livechatwidgetlocation[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_oc_geolocationprovider?: Msdyn_oc_geolocationprovider | undefined;
    private _msdyn_ocWidgetLanguage?: Msdyn_oclanguage | undefined;
    private _msdyn_offlinewidgetsubtitle?: string | undefined;
    private _msdyn_offlinewidgetthemecolor?: number | undefined;
    private _msdyn_offlinewidgettitle?: string | undefined;
    private _msdyn_operatinghourid?: Msdyn_operatinghour | undefined;
    private _msdyn_portalurl?: string | undefined;
    private _msdyn_positioninqueue_enabled?: boolean | undefined;
    private _msdyn_postchatenabled?: boolean | undefined;
    private _msdyn_PostConversationSurvey?: Msfp_survey | undefined;
    private _msdyn_postconversationsurveybotsurvey?: boolean | undefined;
    private _msdyn_postconversationsurveyenable?: boolean | undefined;
    private _msdyn_postconversationsurveymessagetext?: string | undefined;
    private _msdyn_postconversationsurveymode?: number | undefined;
    private _msdyn_prechatenabled?: boolean | undefined;
    private _msdyn_prechatquestionnaireauthenticated?: Msdyn_questionsequence | undefined;
    private _msdyn_prechatquestionnaireunauthenticated?: Msdyn_questionsequence | undefined;
    private _msdyn_proactivechatenabled?: boolean | undefined;
    private _msdyn_redirectionurl?: string | undefined;
    private _msdyn_requestvisitorlocation?: boolean | undefined;
    private _msdyn_screensharingprovider?: string | undefined;
    private _msdyn_showagentname?: boolean | undefined;
    private _msdyn_showwidgetduringofflinehours?: boolean | undefined;
    private _msdyn_timetoreconnectwithpreviousagent?: number | undefined;
    private _msdyn_widgetappid?: string | undefined;
    private _msdyn_WidgetLocale?: Msdyn_chatwidgetlanguage | undefined;
    private _msdyn_widgetposition?: number | undefined;
    private _msdyn_widgetsnippet?: string | undefined;
    private _msdyn_widgetsoundnotification?: boolean | undefined;
    private _msdyn_widgetsubtitle?: string | undefined;
    private _msdyn_widgetthemecolor?: number | undefined;
    private _msdyn_widgettitle?: string | undefined;
    private _msdyn_widgetvisualnotification?: boolean | undefined;
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
     * Gets the _msdyn_authsettingsid_value property value. 
     * @returns a string
     */
    public get _msdyn_authsettingsid_value() {
        return this.__msdyn_authsettingsid_value;
    };
    /**
     * Sets the _msdyn_authsettingsid_value property value. 
     * @param value Value to set for the _msdyn_authsettingsid_value property.
     */
    public set _msdyn_authsettingsid_value(value: string | undefined) {
        this.__msdyn_authsettingsid_value = value;
    };
    /**
     * Gets the _msdyn_liveworkstreamid_value property value. 
     * @returns a string
     */
    public get _msdyn_liveworkstreamid_value() {
        return this.__msdyn_liveworkstreamid_value;
    };
    /**
     * Sets the _msdyn_liveworkstreamid_value property value. 
     * @param value Value to set for the _msdyn_liveworkstreamid_value property.
     */
    public set _msdyn_liveworkstreamid_value(value: string | undefined) {
        this.__msdyn_liveworkstreamid_value = value;
    };
    /**
     * Gets the _msdyn_oc_geolocationprovider_value property value. 
     * @returns a string
     */
    public get _msdyn_oc_geolocationprovider_value() {
        return this.__msdyn_oc_geolocationprovider_value;
    };
    /**
     * Sets the _msdyn_oc_geolocationprovider_value property value. 
     * @param value Value to set for the _msdyn_oc_geolocationprovider_value property.
     */
    public set _msdyn_oc_geolocationprovider_value(value: string | undefined) {
        this.__msdyn_oc_geolocationprovider_value = value;
    };
    /**
     * Gets the _msdyn_ocwidgetlanguage_value property value. 
     * @returns a string
     */
    public get _msdyn_ocwidgetlanguage_value() {
        return this.__msdyn_ocwidgetlanguage_value;
    };
    /**
     * Sets the _msdyn_ocwidgetlanguage_value property value. 
     * @param value Value to set for the _msdyn_ocwidgetlanguage_value property.
     */
    public set _msdyn_ocwidgetlanguage_value(value: string | undefined) {
        this.__msdyn_ocwidgetlanguage_value = value;
    };
    /**
     * Gets the _msdyn_operatinghourid_value property value. 
     * @returns a string
     */
    public get _msdyn_operatinghourid_value() {
        return this.__msdyn_operatinghourid_value;
    };
    /**
     * Sets the _msdyn_operatinghourid_value property value. 
     * @param value Value to set for the _msdyn_operatinghourid_value property.
     */
    public set _msdyn_operatinghourid_value(value: string | undefined) {
        this.__msdyn_operatinghourid_value = value;
    };
    /**
     * Gets the _msdyn_postconversationsurvey_value property value. 
     * @returns a string
     */
    public get _msdyn_postconversationsurvey_value() {
        return this.__msdyn_postconversationsurvey_value;
    };
    /**
     * Sets the _msdyn_postconversationsurvey_value property value. 
     * @param value Value to set for the _msdyn_postconversationsurvey_value property.
     */
    public set _msdyn_postconversationsurvey_value(value: string | undefined) {
        this.__msdyn_postconversationsurvey_value = value;
    };
    /**
     * Gets the _msdyn_prechatquestionnaireauthenticated_value property value. 
     * @returns a string
     */
    public get _msdyn_prechatquestionnaireauthenticated_value() {
        return this.__msdyn_prechatquestionnaireauthenticated_value;
    };
    /**
     * Sets the _msdyn_prechatquestionnaireauthenticated_value property value. 
     * @param value Value to set for the _msdyn_prechatquestionnaireauthenticated_value property.
     */
    public set _msdyn_prechatquestionnaireauthenticated_value(value: string | undefined) {
        this.__msdyn_prechatquestionnaireauthenticated_value = value;
    };
    /**
     * Gets the _msdyn_prechatquestionnaireunauthenticated_value property value. 
     * @returns a string
     */
    public get _msdyn_prechatquestionnaireunauthenticated_value() {
        return this.__msdyn_prechatquestionnaireunauthenticated_value;
    };
    /**
     * Sets the _msdyn_prechatquestionnaireunauthenticated_value property value. 
     * @param value Value to set for the _msdyn_prechatquestionnaireunauthenticated_value property.
     */
    public set _msdyn_prechatquestionnaireunauthenticated_value(value: string | undefined) {
        this.__msdyn_prechatquestionnaireunauthenticated_value = value;
    };
    /**
     * Gets the _msdyn_widgetlocale_value property value. 
     * @returns a string
     */
    public get _msdyn_widgetlocale_value() {
        return this.__msdyn_widgetlocale_value;
    };
    /**
     * Sets the _msdyn_widgetlocale_value property value. 
     * @param value Value to set for the _msdyn_widgetlocale_value property.
     */
    public set _msdyn_widgetlocale_value(value: string | undefined) {
        this.__msdyn_widgetlocale_value = value;
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
     * Instantiates a new msdyn_livechatconfig and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_authsettingsid_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._msdyn_authsettingsid_value = n.getStringValue(); },
            "_msdyn_liveworkstreamid_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._msdyn_liveworkstreamid_value = n.getStringValue(); },
            "_msdyn_oc_geolocationprovider_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._msdyn_oc_geolocationprovider_value = n.getStringValue(); },
            "_msdyn_ocwidgetlanguage_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._msdyn_ocwidgetlanguage_value = n.getStringValue(); },
            "_msdyn_operatinghourid_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._msdyn_operatinghourid_value = n.getStringValue(); },
            "_msdyn_postconversationsurvey_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._msdyn_postconversationsurvey_value = n.getStringValue(); },
            "_msdyn_prechatquestionnaireauthenticated_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._msdyn_prechatquestionnaireauthenticated_value = n.getStringValue(); },
            "_msdyn_prechatquestionnaireunauthenticated_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._msdyn_prechatquestionnaireunauthenticated_value = n.getStringValue(); },
            "_msdyn_widgetlocale_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._msdyn_widgetlocale_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_livechatconfig)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_livechatconfig).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_livechatconfig).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_livechatconfig).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_livechatconfig).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_livechatconfig).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_livechatconfig).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_livechatconfig).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_agentdisplayname": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_agentdisplayname = n.getNumberValue(); },
            "msdyn_AuthsettingsId": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_AuthsettingsId = n.getObjectValue<Msdyn_authenticationsettings>(createMsdyn_authenticationsettingsFromDiscriminatorValue); },
            "msdyn_autodetectlanguage": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_autodetectlanguage = n.getBooleanValue(); },
            "msdyn_avatarurl": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_avatarurl = n.getStringValue(); },
            "msdyn_averagewaittime_enabled": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_averagewaittime_enabled = n.getBooleanValue(); },
            "msdyn_callingoptions": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_callingoptions = n.getNumberValue(); },
            "msdyn_cobrowseprovider": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_cobrowseprovider = n.getStringValue(); },
            "msdyn_conversationmode": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_conversationmode = n.getNumberValue(); },
            "msdyn_duringnonoperatinghours": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_duringnonoperatinghours = n.getStringValue(); },
            "msdyn_emailtemplate": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_emailtemplate = n.getStringValue(); },
            "msdyn_enablechatreconnect": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_enablechatreconnect = n.getBooleanValue(); },
            "msdyn_enablechattranscriptdownload": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_enablechattranscriptdownload = n.getBooleanValue(); },
            "msdyn_enablechattranscriptemail": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_enablechattranscriptemail = n.getBooleanValue(); },
            "msdyn_enablecobrowse": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_enablecobrowse = n.getBooleanValue(); },
            "msdyn_enablefileattachmentsforagents": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_enablefileattachmentsforagents = n.getBooleanValue(); },
            "msdyn_enablefileattachmentsforcustomers": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_enablefileattachmentsforcustomers = n.getBooleanValue(); },
            "msdyn_enablescreensharing": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_enablescreensharing = n.getBooleanValue(); },
            "msdyn_genericagentdisplayname": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_genericagentdisplayname = n.getStringValue(); },
            "msdyn_infolabel": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_infolabel = n.getStringValue(); },
            "msdyn_language": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_language = n.getNumberValue(); },
            "msdyn_livechatconfig_AsyncOperations": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_livechatconfig_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_livechatconfig_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_livechatconfig_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_livechatconfig_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_livechatconfig_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_livechatconfig_msdyn_ocsystemmessage": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_livechatconfig_msdyn_ocsystemmessage = n.getCollectionOfObjectValues<Msdyn_ocsystemmessage>(createMsdyn_ocsystemmessageFromDiscriminatorValue); },
            "msdyn_livechatconfig_msdyn_questionsequence": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_livechatconfig_msdyn_questionsequence = n.getCollectionOfObjectValues<Msdyn_questionsequence>(createMsdyn_questionsequenceFromDiscriminatorValue); },
            "msdyn_livechatconfig_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_livechatconfig_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_livechatconfig_ProcessSession": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_livechatconfig_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_livechatconfig_SyncErrors": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_livechatconfig_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_livechatconfigid": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_livechatconfigid = n.getStringValue(); },
            "msdyn_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_liveworkstreamid = n.getObjectValue<Msdyn_liveworkstream>(createMsdyn_liveworkstreamFromDiscriminatorValue); },
            "msdyn_mailbox": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_mailbox = n.getStringValue(); },
            "msdyn_msdyn_livechatconfig_msdyn_chatquestionnaireresponse": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_msdyn_livechatconfig_msdyn_chatquestionnaireresponse = n.getCollectionOfObjectValues<Msdyn_chatquestionnaireresponse>(createMsdyn_chatquestionnaireresponseFromDiscriminatorValue); },
            "msdyn_msdyn_livechatconfig_msdyn_livechatwidgetlocation_livechatconfigid": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_msdyn_livechatconfig_msdyn_livechatwidgetlocation_livechatconfigid = n.getCollectionOfObjectValues<Msdyn_livechatwidgetlocation>(createMsdyn_livechatwidgetlocationFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_name = n.getStringValue(); },
            "msdyn_oc_geolocationprovider": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_oc_geolocationprovider = n.getObjectValue<Msdyn_oc_geolocationprovider>(createMsdyn_oc_geolocationproviderFromDiscriminatorValue); },
            "msdyn_ocWidgetLanguage": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_ocWidgetLanguage = n.getObjectValue<Msdyn_oclanguage>(createMsdyn_oclanguageFromDiscriminatorValue); },
            "msdyn_offlinewidgetsubtitle": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_offlinewidgetsubtitle = n.getStringValue(); },
            "msdyn_offlinewidgetthemecolor": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_offlinewidgetthemecolor = n.getNumberValue(); },
            "msdyn_offlinewidgettitle": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_offlinewidgettitle = n.getStringValue(); },
            "msdyn_operatinghourid": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_operatinghourid = n.getObjectValue<Msdyn_operatinghour>(createMsdyn_operatinghourFromDiscriminatorValue); },
            "msdyn_portalurl": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_portalurl = n.getStringValue(); },
            "msdyn_positioninqueue_enabled": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_positioninqueue_enabled = n.getBooleanValue(); },
            "msdyn_postchatenabled": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_postchatenabled = n.getBooleanValue(); },
            "msdyn_PostConversationSurvey": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_PostConversationSurvey = n.getObjectValue<Msfp_survey>(createMsfp_surveyFromDiscriminatorValue); },
            "msdyn_postconversationsurveybotsurvey": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_postconversationsurveybotsurvey = n.getBooleanValue(); },
            "msdyn_postconversationsurveyenable": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_postconversationsurveyenable = n.getBooleanValue(); },
            "msdyn_postconversationsurveymessagetext": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_postconversationsurveymessagetext = n.getStringValue(); },
            "msdyn_postconversationsurveymode": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_postconversationsurveymode = n.getNumberValue(); },
            "msdyn_prechatenabled": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_prechatenabled = n.getBooleanValue(); },
            "msdyn_prechatquestionnaireauthenticated": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_prechatquestionnaireauthenticated = n.getObjectValue<Msdyn_questionsequence>(createMsdyn_questionsequenceFromDiscriminatorValue); },
            "msdyn_prechatquestionnaireunauthenticated": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_prechatquestionnaireunauthenticated = n.getObjectValue<Msdyn_questionsequence>(createMsdyn_questionsequenceFromDiscriminatorValue); },
            "msdyn_proactivechatenabled": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_proactivechatenabled = n.getBooleanValue(); },
            "msdyn_redirectionurl": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_redirectionurl = n.getStringValue(); },
            "msdyn_requestvisitorlocation": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_requestvisitorlocation = n.getBooleanValue(); },
            "msdyn_screensharingprovider": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_screensharingprovider = n.getStringValue(); },
            "msdyn_showagentname": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_showagentname = n.getBooleanValue(); },
            "msdyn_showwidgetduringofflinehours": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_showwidgetduringofflinehours = n.getBooleanValue(); },
            "msdyn_timetoreconnectwithpreviousagent": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_timetoreconnectwithpreviousagent = n.getNumberValue(); },
            "msdyn_widgetappid": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_widgetappid = n.getStringValue(); },
            "msdyn_WidgetLocale": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_WidgetLocale = n.getObjectValue<Msdyn_chatwidgetlanguage>(createMsdyn_chatwidgetlanguageFromDiscriminatorValue); },
            "msdyn_widgetposition": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_widgetposition = n.getNumberValue(); },
            "msdyn_widgetsnippet": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_widgetsnippet = n.getStringValue(); },
            "msdyn_widgetsoundnotification": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_widgetsoundnotification = n.getBooleanValue(); },
            "msdyn_widgetsubtitle": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_widgetsubtitle = n.getStringValue(); },
            "msdyn_widgetthemecolor": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_widgetthemecolor = n.getNumberValue(); },
            "msdyn_widgettitle": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_widgettitle = n.getStringValue(); },
            "msdyn_widgetvisualnotification": (o, n) => { (o as unknown as Msdyn_livechatconfig).msdyn_widgetvisualnotification = n.getBooleanValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_livechatconfig).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_livechatconfig).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_livechatconfig).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_livechatconfig).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_livechatconfig).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_livechatconfig).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_livechatconfig).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_livechatconfig).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_livechatconfig).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_livechatconfig).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_agentdisplayname property value. 
     * @returns a integer
     */
    public get msdyn_agentdisplayname() {
        return this._msdyn_agentdisplayname;
    };
    /**
     * Sets the msdyn_agentdisplayname property value. 
     * @param value Value to set for the msdyn_agentdisplayname property.
     */
    public set msdyn_agentdisplayname(value: number | undefined) {
        this._msdyn_agentdisplayname = value;
    };
    /**
     * Gets the msdyn_AuthsettingsId property value. 
     * @returns a msdyn_authenticationsettings
     */
    public get msdyn_AuthsettingsId() {
        return this._msdyn_AuthsettingsId;
    };
    /**
     * Sets the msdyn_AuthsettingsId property value. 
     * @param value Value to set for the msdyn_AuthsettingsId property.
     */
    public set msdyn_AuthsettingsId(value: Msdyn_authenticationsettings | undefined) {
        this._msdyn_AuthsettingsId = value;
    };
    /**
     * Gets the msdyn_autodetectlanguage property value. 
     * @returns a boolean
     */
    public get msdyn_autodetectlanguage() {
        return this._msdyn_autodetectlanguage;
    };
    /**
     * Sets the msdyn_autodetectlanguage property value. 
     * @param value Value to set for the msdyn_autodetectlanguage property.
     */
    public set msdyn_autodetectlanguage(value: boolean | undefined) {
        this._msdyn_autodetectlanguage = value;
    };
    /**
     * Gets the msdyn_avatarurl property value. 
     * @returns a string
     */
    public get msdyn_avatarurl() {
        return this._msdyn_avatarurl;
    };
    /**
     * Sets the msdyn_avatarurl property value. 
     * @param value Value to set for the msdyn_avatarurl property.
     */
    public set msdyn_avatarurl(value: string | undefined) {
        this._msdyn_avatarurl = value;
    };
    /**
     * Gets the msdyn_averagewaittime_enabled property value. 
     * @returns a boolean
     */
    public get msdyn_averagewaittime_enabled() {
        return this._msdyn_averagewaittime_enabled;
    };
    /**
     * Sets the msdyn_averagewaittime_enabled property value. 
     * @param value Value to set for the msdyn_averagewaittime_enabled property.
     */
    public set msdyn_averagewaittime_enabled(value: boolean | undefined) {
        this._msdyn_averagewaittime_enabled = value;
    };
    /**
     * Gets the msdyn_callingoptions property value. 
     * @returns a integer
     */
    public get msdyn_callingoptions() {
        return this._msdyn_callingoptions;
    };
    /**
     * Sets the msdyn_callingoptions property value. 
     * @param value Value to set for the msdyn_callingoptions property.
     */
    public set msdyn_callingoptions(value: number | undefined) {
        this._msdyn_callingoptions = value;
    };
    /**
     * Gets the msdyn_cobrowseprovider property value. 
     * @returns a string
     */
    public get msdyn_cobrowseprovider() {
        return this._msdyn_cobrowseprovider;
    };
    /**
     * Sets the msdyn_cobrowseprovider property value. 
     * @param value Value to set for the msdyn_cobrowseprovider property.
     */
    public set msdyn_cobrowseprovider(value: string | undefined) {
        this._msdyn_cobrowseprovider = value;
    };
    /**
     * Gets the msdyn_conversationmode property value. 
     * @returns a integer
     */
    public get msdyn_conversationmode() {
        return this._msdyn_conversationmode;
    };
    /**
     * Sets the msdyn_conversationmode property value. 
     * @param value Value to set for the msdyn_conversationmode property.
     */
    public set msdyn_conversationmode(value: number | undefined) {
        this._msdyn_conversationmode = value;
    };
    /**
     * Gets the msdyn_duringnonoperatinghours property value. 
     * @returns a string
     */
    public get msdyn_duringnonoperatinghours() {
        return this._msdyn_duringnonoperatinghours;
    };
    /**
     * Sets the msdyn_duringnonoperatinghours property value. 
     * @param value Value to set for the msdyn_duringnonoperatinghours property.
     */
    public set msdyn_duringnonoperatinghours(value: string | undefined) {
        this._msdyn_duringnonoperatinghours = value;
    };
    /**
     * Gets the msdyn_emailtemplate property value. 
     * @returns a string
     */
    public get msdyn_emailtemplate() {
        return this._msdyn_emailtemplate;
    };
    /**
     * Sets the msdyn_emailtemplate property value. 
     * @param value Value to set for the msdyn_emailtemplate property.
     */
    public set msdyn_emailtemplate(value: string | undefined) {
        this._msdyn_emailtemplate = value;
    };
    /**
     * Gets the msdyn_enablechatreconnect property value. 
     * @returns a boolean
     */
    public get msdyn_enablechatreconnect() {
        return this._msdyn_enablechatreconnect;
    };
    /**
     * Sets the msdyn_enablechatreconnect property value. 
     * @param value Value to set for the msdyn_enablechatreconnect property.
     */
    public set msdyn_enablechatreconnect(value: boolean | undefined) {
        this._msdyn_enablechatreconnect = value;
    };
    /**
     * Gets the msdyn_enablechattranscriptdownload property value. 
     * @returns a boolean
     */
    public get msdyn_enablechattranscriptdownload() {
        return this._msdyn_enablechattranscriptdownload;
    };
    /**
     * Sets the msdyn_enablechattranscriptdownload property value. 
     * @param value Value to set for the msdyn_enablechattranscriptdownload property.
     */
    public set msdyn_enablechattranscriptdownload(value: boolean | undefined) {
        this._msdyn_enablechattranscriptdownload = value;
    };
    /**
     * Gets the msdyn_enablechattranscriptemail property value. 
     * @returns a boolean
     */
    public get msdyn_enablechattranscriptemail() {
        return this._msdyn_enablechattranscriptemail;
    };
    /**
     * Sets the msdyn_enablechattranscriptemail property value. 
     * @param value Value to set for the msdyn_enablechattranscriptemail property.
     */
    public set msdyn_enablechattranscriptemail(value: boolean | undefined) {
        this._msdyn_enablechattranscriptemail = value;
    };
    /**
     * Gets the msdyn_enablecobrowse property value. 
     * @returns a boolean
     */
    public get msdyn_enablecobrowse() {
        return this._msdyn_enablecobrowse;
    };
    /**
     * Sets the msdyn_enablecobrowse property value. 
     * @param value Value to set for the msdyn_enablecobrowse property.
     */
    public set msdyn_enablecobrowse(value: boolean | undefined) {
        this._msdyn_enablecobrowse = value;
    };
    /**
     * Gets the msdyn_enablefileattachmentsforagents property value. 
     * @returns a boolean
     */
    public get msdyn_enablefileattachmentsforagents() {
        return this._msdyn_enablefileattachmentsforagents;
    };
    /**
     * Sets the msdyn_enablefileattachmentsforagents property value. 
     * @param value Value to set for the msdyn_enablefileattachmentsforagents property.
     */
    public set msdyn_enablefileattachmentsforagents(value: boolean | undefined) {
        this._msdyn_enablefileattachmentsforagents = value;
    };
    /**
     * Gets the msdyn_enablefileattachmentsforcustomers property value. 
     * @returns a boolean
     */
    public get msdyn_enablefileattachmentsforcustomers() {
        return this._msdyn_enablefileattachmentsforcustomers;
    };
    /**
     * Sets the msdyn_enablefileattachmentsforcustomers property value. 
     * @param value Value to set for the msdyn_enablefileattachmentsforcustomers property.
     */
    public set msdyn_enablefileattachmentsforcustomers(value: boolean | undefined) {
        this._msdyn_enablefileattachmentsforcustomers = value;
    };
    /**
     * Gets the msdyn_enablescreensharing property value. 
     * @returns a boolean
     */
    public get msdyn_enablescreensharing() {
        return this._msdyn_enablescreensharing;
    };
    /**
     * Sets the msdyn_enablescreensharing property value. 
     * @param value Value to set for the msdyn_enablescreensharing property.
     */
    public set msdyn_enablescreensharing(value: boolean | undefined) {
        this._msdyn_enablescreensharing = value;
    };
    /**
     * Gets the msdyn_genericagentdisplayname property value. 
     * @returns a string
     */
    public get msdyn_genericagentdisplayname() {
        return this._msdyn_genericagentdisplayname;
    };
    /**
     * Sets the msdyn_genericagentdisplayname property value. 
     * @param value Value to set for the msdyn_genericagentdisplayname property.
     */
    public set msdyn_genericagentdisplayname(value: string | undefined) {
        this._msdyn_genericagentdisplayname = value;
    };
    /**
     * Gets the msdyn_infolabel property value. 
     * @returns a string
     */
    public get msdyn_infolabel() {
        return this._msdyn_infolabel;
    };
    /**
     * Sets the msdyn_infolabel property value. 
     * @param value Value to set for the msdyn_infolabel property.
     */
    public set msdyn_infolabel(value: string | undefined) {
        this._msdyn_infolabel = value;
    };
    /**
     * Gets the msdyn_language property value. 
     * @returns a integer
     */
    public get msdyn_language() {
        return this._msdyn_language;
    };
    /**
     * Sets the msdyn_language property value. 
     * @param value Value to set for the msdyn_language property.
     */
    public set msdyn_language(value: number | undefined) {
        this._msdyn_language = value;
    };
    /**
     * Gets the msdyn_livechatconfig_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_livechatconfig_AsyncOperations() {
        return this._msdyn_livechatconfig_AsyncOperations;
    };
    /**
     * Sets the msdyn_livechatconfig_AsyncOperations property value. 
     * @param value Value to set for the msdyn_livechatconfig_AsyncOperations property.
     */
    public set msdyn_livechatconfig_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_livechatconfig_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_livechatconfig_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_livechatconfig_BulkDeleteFailures() {
        return this._msdyn_livechatconfig_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_livechatconfig_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_livechatconfig_BulkDeleteFailures property.
     */
    public set msdyn_livechatconfig_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_livechatconfig_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_livechatconfig_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_livechatconfig_MailboxTrackingFolders() {
        return this._msdyn_livechatconfig_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_livechatconfig_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_livechatconfig_MailboxTrackingFolders property.
     */
    public set msdyn_livechatconfig_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_livechatconfig_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_livechatconfig_msdyn_ocsystemmessage property value. 
     * @returns a msdyn_ocsystemmessage
     */
    public get msdyn_livechatconfig_msdyn_ocsystemmessage() {
        return this._msdyn_livechatconfig_msdyn_ocsystemmessage;
    };
    /**
     * Sets the msdyn_livechatconfig_msdyn_ocsystemmessage property value. 
     * @param value Value to set for the msdyn_livechatconfig_msdyn_ocsystemmessage property.
     */
    public set msdyn_livechatconfig_msdyn_ocsystemmessage(value: Msdyn_ocsystemmessage[] | undefined) {
        this._msdyn_livechatconfig_msdyn_ocsystemmessage = value;
    };
    /**
     * Gets the msdyn_livechatconfig_msdyn_questionsequence property value. 
     * @returns a msdyn_questionsequence
     */
    public get msdyn_livechatconfig_msdyn_questionsequence() {
        return this._msdyn_livechatconfig_msdyn_questionsequence;
    };
    /**
     * Sets the msdyn_livechatconfig_msdyn_questionsequence property value. 
     * @param value Value to set for the msdyn_livechatconfig_msdyn_questionsequence property.
     */
    public set msdyn_livechatconfig_msdyn_questionsequence(value: Msdyn_questionsequence[] | undefined) {
        this._msdyn_livechatconfig_msdyn_questionsequence = value;
    };
    /**
     * Gets the msdyn_livechatconfig_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_livechatconfig_PrincipalObjectAttributeAccesses() {
        return this._msdyn_livechatconfig_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_livechatconfig_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_livechatconfig_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_livechatconfig_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_livechatconfig_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_livechatconfig_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_livechatconfig_ProcessSession() {
        return this._msdyn_livechatconfig_ProcessSession;
    };
    /**
     * Sets the msdyn_livechatconfig_ProcessSession property value. 
     * @param value Value to set for the msdyn_livechatconfig_ProcessSession property.
     */
    public set msdyn_livechatconfig_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_livechatconfig_ProcessSession = value;
    };
    /**
     * Gets the msdyn_livechatconfig_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_livechatconfig_SyncErrors() {
        return this._msdyn_livechatconfig_SyncErrors;
    };
    /**
     * Sets the msdyn_livechatconfig_SyncErrors property value. 
     * @param value Value to set for the msdyn_livechatconfig_SyncErrors property.
     */
    public set msdyn_livechatconfig_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_livechatconfig_SyncErrors = value;
    };
    /**
     * Gets the msdyn_livechatconfigid property value. 
     * @returns a string
     */
    public get msdyn_livechatconfigid() {
        return this._msdyn_livechatconfigid;
    };
    /**
     * Sets the msdyn_livechatconfigid property value. 
     * @param value Value to set for the msdyn_livechatconfigid property.
     */
    public set msdyn_livechatconfigid(value: string | undefined) {
        this._msdyn_livechatconfigid = value;
    };
    /**
     * Gets the msdyn_liveworkstreamid property value. 
     * @returns a msdyn_liveworkstream
     */
    public get msdyn_liveworkstreamid() {
        return this._msdyn_liveworkstreamid;
    };
    /**
     * Sets the msdyn_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_liveworkstreamid property.
     */
    public set msdyn_liveworkstreamid(value: Msdyn_liveworkstream | undefined) {
        this._msdyn_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_mailbox property value. 
     * @returns a string
     */
    public get msdyn_mailbox() {
        return this._msdyn_mailbox;
    };
    /**
     * Sets the msdyn_mailbox property value. 
     * @param value Value to set for the msdyn_mailbox property.
     */
    public set msdyn_mailbox(value: string | undefined) {
        this._msdyn_mailbox = value;
    };
    /**
     * Gets the msdyn_msdyn_livechatconfig_msdyn_chatquestionnaireresponse property value. 
     * @returns a msdyn_chatquestionnaireresponse
     */
    public get msdyn_msdyn_livechatconfig_msdyn_chatquestionnaireresponse() {
        return this._msdyn_msdyn_livechatconfig_msdyn_chatquestionnaireresponse;
    };
    /**
     * Sets the msdyn_msdyn_livechatconfig_msdyn_chatquestionnaireresponse property value. 
     * @param value Value to set for the msdyn_msdyn_livechatconfig_msdyn_chatquestionnaireresponse property.
     */
    public set msdyn_msdyn_livechatconfig_msdyn_chatquestionnaireresponse(value: Msdyn_chatquestionnaireresponse[] | undefined) {
        this._msdyn_msdyn_livechatconfig_msdyn_chatquestionnaireresponse = value;
    };
    /**
     * Gets the msdyn_msdyn_livechatconfig_msdyn_livechatwidgetlocation_livechatconfigid property value. 
     * @returns a msdyn_livechatwidgetlocation
     */
    public get msdyn_msdyn_livechatconfig_msdyn_livechatwidgetlocation_livechatconfigid() {
        return this._msdyn_msdyn_livechatconfig_msdyn_livechatwidgetlocation_livechatconfigid;
    };
    /**
     * Sets the msdyn_msdyn_livechatconfig_msdyn_livechatwidgetlocation_livechatconfigid property value. 
     * @param value Value to set for the msdyn_msdyn_livechatconfig_msdyn_livechatwidgetlocation_livechatconfigid property.
     */
    public set msdyn_msdyn_livechatconfig_msdyn_livechatwidgetlocation_livechatconfigid(value: Msdyn_livechatwidgetlocation[] | undefined) {
        this._msdyn_msdyn_livechatconfig_msdyn_livechatwidgetlocation_livechatconfigid = value;
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
     * Gets the msdyn_oc_geolocationprovider property value. 
     * @returns a msdyn_oc_geolocationprovider
     */
    public get msdyn_oc_geolocationprovider() {
        return this._msdyn_oc_geolocationprovider;
    };
    /**
     * Sets the msdyn_oc_geolocationprovider property value. 
     * @param value Value to set for the msdyn_oc_geolocationprovider property.
     */
    public set msdyn_oc_geolocationprovider(value: Msdyn_oc_geolocationprovider | undefined) {
        this._msdyn_oc_geolocationprovider = value;
    };
    /**
     * Gets the msdyn_ocWidgetLanguage property value. 
     * @returns a msdyn_oclanguage
     */
    public get msdyn_ocWidgetLanguage() {
        return this._msdyn_ocWidgetLanguage;
    };
    /**
     * Sets the msdyn_ocWidgetLanguage property value. 
     * @param value Value to set for the msdyn_ocWidgetLanguage property.
     */
    public set msdyn_ocWidgetLanguage(value: Msdyn_oclanguage | undefined) {
        this._msdyn_ocWidgetLanguage = value;
    };
    /**
     * Gets the msdyn_offlinewidgetsubtitle property value. 
     * @returns a string
     */
    public get msdyn_offlinewidgetsubtitle() {
        return this._msdyn_offlinewidgetsubtitle;
    };
    /**
     * Sets the msdyn_offlinewidgetsubtitle property value. 
     * @param value Value to set for the msdyn_offlinewidgetsubtitle property.
     */
    public set msdyn_offlinewidgetsubtitle(value: string | undefined) {
        this._msdyn_offlinewidgetsubtitle = value;
    };
    /**
     * Gets the msdyn_offlinewidgetthemecolor property value. 
     * @returns a integer
     */
    public get msdyn_offlinewidgetthemecolor() {
        return this._msdyn_offlinewidgetthemecolor;
    };
    /**
     * Sets the msdyn_offlinewidgetthemecolor property value. 
     * @param value Value to set for the msdyn_offlinewidgetthemecolor property.
     */
    public set msdyn_offlinewidgetthemecolor(value: number | undefined) {
        this._msdyn_offlinewidgetthemecolor = value;
    };
    /**
     * Gets the msdyn_offlinewidgettitle property value. 
     * @returns a string
     */
    public get msdyn_offlinewidgettitle() {
        return this._msdyn_offlinewidgettitle;
    };
    /**
     * Sets the msdyn_offlinewidgettitle property value. 
     * @param value Value to set for the msdyn_offlinewidgettitle property.
     */
    public set msdyn_offlinewidgettitle(value: string | undefined) {
        this._msdyn_offlinewidgettitle = value;
    };
    /**
     * Gets the msdyn_operatinghourid property value. 
     * @returns a msdyn_operatinghour
     */
    public get msdyn_operatinghourid() {
        return this._msdyn_operatinghourid;
    };
    /**
     * Sets the msdyn_operatinghourid property value. 
     * @param value Value to set for the msdyn_operatinghourid property.
     */
    public set msdyn_operatinghourid(value: Msdyn_operatinghour | undefined) {
        this._msdyn_operatinghourid = value;
    };
    /**
     * Gets the msdyn_portalurl property value. 
     * @returns a string
     */
    public get msdyn_portalurl() {
        return this._msdyn_portalurl;
    };
    /**
     * Sets the msdyn_portalurl property value. 
     * @param value Value to set for the msdyn_portalurl property.
     */
    public set msdyn_portalurl(value: string | undefined) {
        this._msdyn_portalurl = value;
    };
    /**
     * Gets the msdyn_positioninqueue_enabled property value. 
     * @returns a boolean
     */
    public get msdyn_positioninqueue_enabled() {
        return this._msdyn_positioninqueue_enabled;
    };
    /**
     * Sets the msdyn_positioninqueue_enabled property value. 
     * @param value Value to set for the msdyn_positioninqueue_enabled property.
     */
    public set msdyn_positioninqueue_enabled(value: boolean | undefined) {
        this._msdyn_positioninqueue_enabled = value;
    };
    /**
     * Gets the msdyn_postchatenabled property value. 
     * @returns a boolean
     */
    public get msdyn_postchatenabled() {
        return this._msdyn_postchatenabled;
    };
    /**
     * Sets the msdyn_postchatenabled property value. 
     * @param value Value to set for the msdyn_postchatenabled property.
     */
    public set msdyn_postchatenabled(value: boolean | undefined) {
        this._msdyn_postchatenabled = value;
    };
    /**
     * Gets the msdyn_PostConversationSurvey property value. 
     * @returns a msfp_survey
     */
    public get msdyn_PostConversationSurvey() {
        return this._msdyn_PostConversationSurvey;
    };
    /**
     * Sets the msdyn_PostConversationSurvey property value. 
     * @param value Value to set for the msdyn_PostConversationSurvey property.
     */
    public set msdyn_PostConversationSurvey(value: Msfp_survey | undefined) {
        this._msdyn_PostConversationSurvey = value;
    };
    /**
     * Gets the msdyn_postconversationsurveybotsurvey property value. 
     * @returns a boolean
     */
    public get msdyn_postconversationsurveybotsurvey() {
        return this._msdyn_postconversationsurveybotsurvey;
    };
    /**
     * Sets the msdyn_postconversationsurveybotsurvey property value. 
     * @param value Value to set for the msdyn_postconversationsurveybotsurvey property.
     */
    public set msdyn_postconversationsurveybotsurvey(value: boolean | undefined) {
        this._msdyn_postconversationsurveybotsurvey = value;
    };
    /**
     * Gets the msdyn_postconversationsurveyenable property value. 
     * @returns a boolean
     */
    public get msdyn_postconversationsurveyenable() {
        return this._msdyn_postconversationsurveyenable;
    };
    /**
     * Sets the msdyn_postconversationsurveyenable property value. 
     * @param value Value to set for the msdyn_postconversationsurveyenable property.
     */
    public set msdyn_postconversationsurveyenable(value: boolean | undefined) {
        this._msdyn_postconversationsurveyenable = value;
    };
    /**
     * Gets the msdyn_postconversationsurveymessagetext property value. 
     * @returns a string
     */
    public get msdyn_postconversationsurveymessagetext() {
        return this._msdyn_postconversationsurveymessagetext;
    };
    /**
     * Sets the msdyn_postconversationsurveymessagetext property value. 
     * @param value Value to set for the msdyn_postconversationsurveymessagetext property.
     */
    public set msdyn_postconversationsurveymessagetext(value: string | undefined) {
        this._msdyn_postconversationsurveymessagetext = value;
    };
    /**
     * Gets the msdyn_postconversationsurveymode property value. 
     * @returns a integer
     */
    public get msdyn_postconversationsurveymode() {
        return this._msdyn_postconversationsurveymode;
    };
    /**
     * Sets the msdyn_postconversationsurveymode property value. 
     * @param value Value to set for the msdyn_postconversationsurveymode property.
     */
    public set msdyn_postconversationsurveymode(value: number | undefined) {
        this._msdyn_postconversationsurveymode = value;
    };
    /**
     * Gets the msdyn_prechatenabled property value. 
     * @returns a boolean
     */
    public get msdyn_prechatenabled() {
        return this._msdyn_prechatenabled;
    };
    /**
     * Sets the msdyn_prechatenabled property value. 
     * @param value Value to set for the msdyn_prechatenabled property.
     */
    public set msdyn_prechatenabled(value: boolean | undefined) {
        this._msdyn_prechatenabled = value;
    };
    /**
     * Gets the msdyn_prechatquestionnaireauthenticated property value. 
     * @returns a msdyn_questionsequence
     */
    public get msdyn_prechatquestionnaireauthenticated() {
        return this._msdyn_prechatquestionnaireauthenticated;
    };
    /**
     * Sets the msdyn_prechatquestionnaireauthenticated property value. 
     * @param value Value to set for the msdyn_prechatquestionnaireauthenticated property.
     */
    public set msdyn_prechatquestionnaireauthenticated(value: Msdyn_questionsequence | undefined) {
        this._msdyn_prechatquestionnaireauthenticated = value;
    };
    /**
     * Gets the msdyn_prechatquestionnaireunauthenticated property value. 
     * @returns a msdyn_questionsequence
     */
    public get msdyn_prechatquestionnaireunauthenticated() {
        return this._msdyn_prechatquestionnaireunauthenticated;
    };
    /**
     * Sets the msdyn_prechatquestionnaireunauthenticated property value. 
     * @param value Value to set for the msdyn_prechatquestionnaireunauthenticated property.
     */
    public set msdyn_prechatquestionnaireunauthenticated(value: Msdyn_questionsequence | undefined) {
        this._msdyn_prechatquestionnaireunauthenticated = value;
    };
    /**
     * Gets the msdyn_proactivechatenabled property value. 
     * @returns a boolean
     */
    public get msdyn_proactivechatenabled() {
        return this._msdyn_proactivechatenabled;
    };
    /**
     * Sets the msdyn_proactivechatenabled property value. 
     * @param value Value to set for the msdyn_proactivechatenabled property.
     */
    public set msdyn_proactivechatenabled(value: boolean | undefined) {
        this._msdyn_proactivechatenabled = value;
    };
    /**
     * Gets the msdyn_redirectionurl property value. 
     * @returns a string
     */
    public get msdyn_redirectionurl() {
        return this._msdyn_redirectionurl;
    };
    /**
     * Sets the msdyn_redirectionurl property value. 
     * @param value Value to set for the msdyn_redirectionurl property.
     */
    public set msdyn_redirectionurl(value: string | undefined) {
        this._msdyn_redirectionurl = value;
    };
    /**
     * Gets the msdyn_requestvisitorlocation property value. 
     * @returns a boolean
     */
    public get msdyn_requestvisitorlocation() {
        return this._msdyn_requestvisitorlocation;
    };
    /**
     * Sets the msdyn_requestvisitorlocation property value. 
     * @param value Value to set for the msdyn_requestvisitorlocation property.
     */
    public set msdyn_requestvisitorlocation(value: boolean | undefined) {
        this._msdyn_requestvisitorlocation = value;
    };
    /**
     * Gets the msdyn_screensharingprovider property value. 
     * @returns a string
     */
    public get msdyn_screensharingprovider() {
        return this._msdyn_screensharingprovider;
    };
    /**
     * Sets the msdyn_screensharingprovider property value. 
     * @param value Value to set for the msdyn_screensharingprovider property.
     */
    public set msdyn_screensharingprovider(value: string | undefined) {
        this._msdyn_screensharingprovider = value;
    };
    /**
     * Gets the msdyn_showagentname property value. 
     * @returns a boolean
     */
    public get msdyn_showagentname() {
        return this._msdyn_showagentname;
    };
    /**
     * Sets the msdyn_showagentname property value. 
     * @param value Value to set for the msdyn_showagentname property.
     */
    public set msdyn_showagentname(value: boolean | undefined) {
        this._msdyn_showagentname = value;
    };
    /**
     * Gets the msdyn_showwidgetduringofflinehours property value. 
     * @returns a boolean
     */
    public get msdyn_showwidgetduringofflinehours() {
        return this._msdyn_showwidgetduringofflinehours;
    };
    /**
     * Sets the msdyn_showwidgetduringofflinehours property value. 
     * @param value Value to set for the msdyn_showwidgetduringofflinehours property.
     */
    public set msdyn_showwidgetduringofflinehours(value: boolean | undefined) {
        this._msdyn_showwidgetduringofflinehours = value;
    };
    /**
     * Gets the msdyn_timetoreconnectwithpreviousagent property value. 
     * @returns a integer
     */
    public get msdyn_timetoreconnectwithpreviousagent() {
        return this._msdyn_timetoreconnectwithpreviousagent;
    };
    /**
     * Sets the msdyn_timetoreconnectwithpreviousagent property value. 
     * @param value Value to set for the msdyn_timetoreconnectwithpreviousagent property.
     */
    public set msdyn_timetoreconnectwithpreviousagent(value: number | undefined) {
        this._msdyn_timetoreconnectwithpreviousagent = value;
    };
    /**
     * Gets the msdyn_widgetappid property value. 
     * @returns a string
     */
    public get msdyn_widgetappid() {
        return this._msdyn_widgetappid;
    };
    /**
     * Sets the msdyn_widgetappid property value. 
     * @param value Value to set for the msdyn_widgetappid property.
     */
    public set msdyn_widgetappid(value: string | undefined) {
        this._msdyn_widgetappid = value;
    };
    /**
     * Gets the msdyn_WidgetLocale property value. 
     * @returns a msdyn_chatwidgetlanguage
     */
    public get msdyn_WidgetLocale() {
        return this._msdyn_WidgetLocale;
    };
    /**
     * Sets the msdyn_WidgetLocale property value. 
     * @param value Value to set for the msdyn_WidgetLocale property.
     */
    public set msdyn_WidgetLocale(value: Msdyn_chatwidgetlanguage | undefined) {
        this._msdyn_WidgetLocale = value;
    };
    /**
     * Gets the msdyn_widgetposition property value. 
     * @returns a integer
     */
    public get msdyn_widgetposition() {
        return this._msdyn_widgetposition;
    };
    /**
     * Sets the msdyn_widgetposition property value. 
     * @param value Value to set for the msdyn_widgetposition property.
     */
    public set msdyn_widgetposition(value: number | undefined) {
        this._msdyn_widgetposition = value;
    };
    /**
     * Gets the msdyn_widgetsnippet property value. 
     * @returns a string
     */
    public get msdyn_widgetsnippet() {
        return this._msdyn_widgetsnippet;
    };
    /**
     * Sets the msdyn_widgetsnippet property value. 
     * @param value Value to set for the msdyn_widgetsnippet property.
     */
    public set msdyn_widgetsnippet(value: string | undefined) {
        this._msdyn_widgetsnippet = value;
    };
    /**
     * Gets the msdyn_widgetsoundnotification property value. 
     * @returns a boolean
     */
    public get msdyn_widgetsoundnotification() {
        return this._msdyn_widgetsoundnotification;
    };
    /**
     * Sets the msdyn_widgetsoundnotification property value. 
     * @param value Value to set for the msdyn_widgetsoundnotification property.
     */
    public set msdyn_widgetsoundnotification(value: boolean | undefined) {
        this._msdyn_widgetsoundnotification = value;
    };
    /**
     * Gets the msdyn_widgetsubtitle property value. 
     * @returns a string
     */
    public get msdyn_widgetsubtitle() {
        return this._msdyn_widgetsubtitle;
    };
    /**
     * Sets the msdyn_widgetsubtitle property value. 
     * @param value Value to set for the msdyn_widgetsubtitle property.
     */
    public set msdyn_widgetsubtitle(value: string | undefined) {
        this._msdyn_widgetsubtitle = value;
    };
    /**
     * Gets the msdyn_widgetthemecolor property value. 
     * @returns a integer
     */
    public get msdyn_widgetthemecolor() {
        return this._msdyn_widgetthemecolor;
    };
    /**
     * Sets the msdyn_widgetthemecolor property value. 
     * @param value Value to set for the msdyn_widgetthemecolor property.
     */
    public set msdyn_widgetthemecolor(value: number | undefined) {
        this._msdyn_widgetthemecolor = value;
    };
    /**
     * Gets the msdyn_widgettitle property value. 
     * @returns a string
     */
    public get msdyn_widgettitle() {
        return this._msdyn_widgettitle;
    };
    /**
     * Sets the msdyn_widgettitle property value. 
     * @param value Value to set for the msdyn_widgettitle property.
     */
    public set msdyn_widgettitle(value: string | undefined) {
        this._msdyn_widgettitle = value;
    };
    /**
     * Gets the msdyn_widgetvisualnotification property value. 
     * @returns a boolean
     */
    public get msdyn_widgetvisualnotification() {
        return this._msdyn_widgetvisualnotification;
    };
    /**
     * Sets the msdyn_widgetvisualnotification property value. 
     * @param value Value to set for the msdyn_widgetvisualnotification property.
     */
    public set msdyn_widgetvisualnotification(value: boolean | undefined) {
        this._msdyn_widgetvisualnotification = value;
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
        writer.writeStringValue("_msdyn_authsettingsid_value", this._msdyn_authsettingsid_value);
        writer.writeStringValue("_msdyn_liveworkstreamid_value", this._msdyn_liveworkstreamid_value);
        writer.writeStringValue("_msdyn_oc_geolocationprovider_value", this._msdyn_oc_geolocationprovider_value);
        writer.writeStringValue("_msdyn_ocwidgetlanguage_value", this._msdyn_ocwidgetlanguage_value);
        writer.writeStringValue("_msdyn_operatinghourid_value", this._msdyn_operatinghourid_value);
        writer.writeStringValue("_msdyn_postconversationsurvey_value", this._msdyn_postconversationsurvey_value);
        writer.writeStringValue("_msdyn_prechatquestionnaireauthenticated_value", this._msdyn_prechatquestionnaireauthenticated_value);
        writer.writeStringValue("_msdyn_prechatquestionnaireunauthenticated_value", this._msdyn_prechatquestionnaireunauthenticated_value);
        writer.writeStringValue("_msdyn_widgetlocale_value", this._msdyn_widgetlocale_value);
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
        writer.writeNumberValue("msdyn_agentdisplayname", this.msdyn_agentdisplayname);
        writer.writeObjectValue<Msdyn_authenticationsettings>("msdyn_AuthsettingsId", this.msdyn_AuthsettingsId);
        writer.writeBooleanValue("msdyn_autodetectlanguage", this.msdyn_autodetectlanguage);
        writer.writeStringValue("msdyn_avatarurl", this.msdyn_avatarurl);
        writer.writeBooleanValue("msdyn_averagewaittime_enabled", this.msdyn_averagewaittime_enabled);
        writer.writeNumberValue("msdyn_callingoptions", this.msdyn_callingoptions);
        writer.writeStringValue("msdyn_cobrowseprovider", this.msdyn_cobrowseprovider);
        writer.writeNumberValue("msdyn_conversationmode", this.msdyn_conversationmode);
        writer.writeStringValue("msdyn_duringnonoperatinghours", this.msdyn_duringnonoperatinghours);
        writer.writeStringValue("msdyn_emailtemplate", this.msdyn_emailtemplate);
        writer.writeBooleanValue("msdyn_enablechatreconnect", this.msdyn_enablechatreconnect);
        writer.writeBooleanValue("msdyn_enablechattranscriptdownload", this.msdyn_enablechattranscriptdownload);
        writer.writeBooleanValue("msdyn_enablechattranscriptemail", this.msdyn_enablechattranscriptemail);
        writer.writeBooleanValue("msdyn_enablecobrowse", this.msdyn_enablecobrowse);
        writer.writeBooleanValue("msdyn_enablefileattachmentsforagents", this.msdyn_enablefileattachmentsforagents);
        writer.writeBooleanValue("msdyn_enablefileattachmentsforcustomers", this.msdyn_enablefileattachmentsforcustomers);
        writer.writeBooleanValue("msdyn_enablescreensharing", this.msdyn_enablescreensharing);
        writer.writeStringValue("msdyn_genericagentdisplayname", this.msdyn_genericagentdisplayname);
        writer.writeStringValue("msdyn_infolabel", this.msdyn_infolabel);
        writer.writeNumberValue("msdyn_language", this.msdyn_language);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_livechatconfig_AsyncOperations", this.msdyn_livechatconfig_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_livechatconfig_BulkDeleteFailures", this.msdyn_livechatconfig_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_livechatconfig_MailboxTrackingFolders", this.msdyn_livechatconfig_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_ocsystemmessage>("msdyn_livechatconfig_msdyn_ocsystemmessage", this.msdyn_livechatconfig_msdyn_ocsystemmessage);
        writer.writeCollectionOfObjectValues<Msdyn_questionsequence>("msdyn_livechatconfig_msdyn_questionsequence", this.msdyn_livechatconfig_msdyn_questionsequence);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_livechatconfig_PrincipalObjectAttributeAccesses", this.msdyn_livechatconfig_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_livechatconfig_ProcessSession", this.msdyn_livechatconfig_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_livechatconfig_SyncErrors", this.msdyn_livechatconfig_SyncErrors);
        writer.writeStringValue("msdyn_livechatconfigid", this.msdyn_livechatconfigid);
        writer.writeObjectValue<Msdyn_liveworkstream>("msdyn_liveworkstreamid", this.msdyn_liveworkstreamid);
        writer.writeStringValue("msdyn_mailbox", this.msdyn_mailbox);
        writer.writeCollectionOfObjectValues<Msdyn_chatquestionnaireresponse>("msdyn_msdyn_livechatconfig_msdyn_chatquestionnaireresponse", this.msdyn_msdyn_livechatconfig_msdyn_chatquestionnaireresponse);
        writer.writeCollectionOfObjectValues<Msdyn_livechatwidgetlocation>("msdyn_msdyn_livechatconfig_msdyn_livechatwidgetlocation_livechatconfigid", this.msdyn_msdyn_livechatconfig_msdyn_livechatwidgetlocation_livechatconfigid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_oc_geolocationprovider>("msdyn_oc_geolocationprovider", this.msdyn_oc_geolocationprovider);
        writer.writeObjectValue<Msdyn_oclanguage>("msdyn_ocWidgetLanguage", this.msdyn_ocWidgetLanguage);
        writer.writeStringValue("msdyn_offlinewidgetsubtitle", this.msdyn_offlinewidgetsubtitle);
        writer.writeNumberValue("msdyn_offlinewidgetthemecolor", this.msdyn_offlinewidgetthemecolor);
        writer.writeStringValue("msdyn_offlinewidgettitle", this.msdyn_offlinewidgettitle);
        writer.writeObjectValue<Msdyn_operatinghour>("msdyn_operatinghourid", this.msdyn_operatinghourid);
        writer.writeStringValue("msdyn_portalurl", this.msdyn_portalurl);
        writer.writeBooleanValue("msdyn_positioninqueue_enabled", this.msdyn_positioninqueue_enabled);
        writer.writeBooleanValue("msdyn_postchatenabled", this.msdyn_postchatenabled);
        writer.writeObjectValue<Msfp_survey>("msdyn_PostConversationSurvey", this.msdyn_PostConversationSurvey);
        writer.writeBooleanValue("msdyn_postconversationsurveybotsurvey", this.msdyn_postconversationsurveybotsurvey);
        writer.writeBooleanValue("msdyn_postconversationsurveyenable", this.msdyn_postconversationsurveyenable);
        writer.writeStringValue("msdyn_postconversationsurveymessagetext", this.msdyn_postconversationsurveymessagetext);
        writer.writeNumberValue("msdyn_postconversationsurveymode", this.msdyn_postconversationsurveymode);
        writer.writeBooleanValue("msdyn_prechatenabled", this.msdyn_prechatenabled);
        writer.writeObjectValue<Msdyn_questionsequence>("msdyn_prechatquestionnaireauthenticated", this.msdyn_prechatquestionnaireauthenticated);
        writer.writeObjectValue<Msdyn_questionsequence>("msdyn_prechatquestionnaireunauthenticated", this.msdyn_prechatquestionnaireunauthenticated);
        writer.writeBooleanValue("msdyn_proactivechatenabled", this.msdyn_proactivechatenabled);
        writer.writeStringValue("msdyn_redirectionurl", this.msdyn_redirectionurl);
        writer.writeBooleanValue("msdyn_requestvisitorlocation", this.msdyn_requestvisitorlocation);
        writer.writeStringValue("msdyn_screensharingprovider", this.msdyn_screensharingprovider);
        writer.writeBooleanValue("msdyn_showagentname", this.msdyn_showagentname);
        writer.writeBooleanValue("msdyn_showwidgetduringofflinehours", this.msdyn_showwidgetduringofflinehours);
        writer.writeNumberValue("msdyn_timetoreconnectwithpreviousagent", this.msdyn_timetoreconnectwithpreviousagent);
        writer.writeStringValue("msdyn_widgetappid", this.msdyn_widgetappid);
        writer.writeObjectValue<Msdyn_chatwidgetlanguage>("msdyn_WidgetLocale", this.msdyn_WidgetLocale);
        writer.writeNumberValue("msdyn_widgetposition", this.msdyn_widgetposition);
        writer.writeStringValue("msdyn_widgetsnippet", this.msdyn_widgetsnippet);
        writer.writeBooleanValue("msdyn_widgetsoundnotification", this.msdyn_widgetsoundnotification);
        writer.writeStringValue("msdyn_widgetsubtitle", this.msdyn_widgetsubtitle);
        writer.writeNumberValue("msdyn_widgetthemecolor", this.msdyn_widgetthemecolor);
        writer.writeStringValue("msdyn_widgettitle", this.msdyn_widgettitle);
        writer.writeBooleanValue("msdyn_widgetvisualnotification", this.msdyn_widgetvisualnotification);
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
