import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_inspectionFromDiscriminatorValue} from './createMsdyn_inspectionFromDiscriminatorValue';
import {createMsdyn_livechatconfigFromDiscriminatorValue} from './createMsdyn_livechatconfigFromDiscriminatorValue';
import {createMsdyn_occustommessagingchannelFromDiscriminatorValue} from './createMsdyn_occustommessagingchannelFromDiscriminatorValue';
import {createMsdyn_ocfbpageFromDiscriminatorValue} from './createMsdyn_ocfbpageFromDiscriminatorValue';
import {createMsdyn_oclinechannelconfigFromDiscriminatorValue} from './createMsdyn_oclinechannelconfigFromDiscriminatorValue';
import {createMsdyn_ocsmschannelsettingFromDiscriminatorValue} from './createMsdyn_ocsmschannelsettingFromDiscriminatorValue';
import {createMsdyn_octeamschannelconfigFromDiscriminatorValue} from './createMsdyn_octeamschannelconfigFromDiscriminatorValue';
import {createMsdyn_octwitterhandleFromDiscriminatorValue} from './createMsdyn_octwitterhandleFromDiscriminatorValue';
import {createMsdyn_ocwechatchannelconfigFromDiscriminatorValue} from './createMsdyn_ocwechatchannelconfigFromDiscriminatorValue';
import {createMsdyn_ocwhatsappchannelnumberFromDiscriminatorValue} from './createMsdyn_ocwhatsappchannelnumberFromDiscriminatorValue';
import {createMsdyn_smsnumberFromDiscriminatorValue} from './createMsdyn_smsnumberFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_emailtemplateFromDiscriminatorValue} from './createMsfp_emailtemplateFromDiscriminatorValue';
import {createMsfp_fileresponseFromDiscriminatorValue} from './createMsfp_fileresponseFromDiscriminatorValue';
import {createMsfp_projectFromDiscriminatorValue} from './createMsfp_projectFromDiscriminatorValue';
import {createMsfp_questionFromDiscriminatorValue} from './createMsfp_questionFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyreminderFromDiscriminatorValue} from './createMsfp_surveyreminderFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_inspection, Msdyn_livechatconfig, Msdyn_occustommessagingchannel, Msdyn_ocfbpage, Msdyn_oclinechannelconfig, Msdyn_ocsmschannelsetting, Msdyn_octeamschannelconfig, Msdyn_octwitterhandle, Msdyn_ocwechatchannelconfig, Msdyn_ocwhatsappchannelnumber, Msdyn_smsnumber, Msfp_alert, Msfp_emailtemplate, Msfp_fileresponse, Msfp_project, Msfp_question, Msfp_surveyinvite, Msfp_surveyreminder, Msfp_surveyresponse, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msfp_survey extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_inspection_value?: string | undefined;
    private __msfp_project_value?: string | undefined;
    private __msfp_publishedby_value?: string | undefined;
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
    private _msdyn_Inspection?: Msdyn_inspection | undefined;
    private _msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey?: Msdyn_livechatconfig[] | undefined;
    private _msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey?: Msdyn_occustommessagingchannel[] | undefined;
    private _msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey?: Msdyn_ocfbpage[] | undefined;
    private _msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey?: Msdyn_oclinechannelconfig[] | undefined;
    private _msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey?: Msdyn_ocsmschannelsetting[] | undefined;
    private _msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey?: Msdyn_octeamschannelconfig[] | undefined;
    private _msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey?: Msdyn_octwitterhandle[] | undefined;
    private _msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey?: Msdyn_ocwechatchannelconfig[] | undefined;
    private _msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey?: Msdyn_ocwhatsappchannelnumber[] | undefined;
    private _msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey?: Msdyn_smsnumber[] | undefined;
    private _msfp_acceptanonymousresponses?: boolean | undefined;
    private _msfp_anonymousurl?: string | undefined;
    private _msfp_description?: string | undefined;
    private _msfp_embedcode?: string | undefined;
    private _msfp_enddate?: Date | undefined;
    private _msfp_friendlyname?: string | undefined;
    private _msfp_msfp_survey_msfp_alert_survey?: Msfp_alert[] | undefined;
    private _msfp_msfp_survey_msfp_emailtemplate_surveyid?: Msfp_emailtemplate[] | undefined;
    private _msfp_msfp_survey_msfp_fileresponse_survey?: Msfp_fileresponse[] | undefined;
    private _msfp_msfp_survey_msfp_question_Survey?: Msfp_question[] | undefined;
    private _msfp_msfp_survey_msfp_surveyinvite_surveyid?: Msfp_surveyinvite[] | undefined;
    private _msfp_msfp_survey_msfp_surveyreminder_survey?: Msfp_surveyreminder[] | undefined;
    private _msfp_msfp_survey_msfp_surveyresponse_surveyid?: Msfp_surveyresponse[] | undefined;
    private _msfp_name?: string | undefined;
    private _msfp_otherproperties?: string | undefined;
    private _msfp_permanentid?: string | undefined;
    private _msfp_project?: Msfp_project | undefined;
    private _msfp_publishedby?: Systemuser | undefined;
    private _msfp_publishedon?: Date | undefined;
    private _msfp_sourcesurveyidentifier?: string | undefined;
    private _msfp_sourcesurveymodifieddate?: Date | undefined;
    private _msfp_sourcesurveyversion?: string | undefined;
    private _msfp_startdate?: Date | undefined;
    private _msfp_survey_AsyncOperations?: Asyncoperation[] | undefined;
    private _msfp_survey_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msfp_survey_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msfp_survey_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msfp_survey_ProcessSession?: Processsession[] | undefined;
    private _msfp_survey_SyncErrors?: Syncerror[] | undefined;
    private _msfp_surveyid?: string | undefined;
    private _msfp_surveysource?: string | undefined;
    private _msfp_surveyurl?: string | undefined;
    private _msfp_variables?: string | undefined;
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
     * Gets the _msdyn_inspection_value property value. 
     * @returns a string
     */
    public get _msdyn_inspection_value() {
        return this.__msdyn_inspection_value;
    };
    /**
     * Sets the _msdyn_inspection_value property value. 
     * @param value Value to set for the _msdyn_inspection_value property.
     */
    public set _msdyn_inspection_value(value: string | undefined) {
        this.__msdyn_inspection_value = value;
    };
    /**
     * Gets the _msfp_project_value property value. 
     * @returns a string
     */
    public get _msfp_project_value() {
        return this.__msfp_project_value;
    };
    /**
     * Sets the _msfp_project_value property value. 
     * @param value Value to set for the _msfp_project_value property.
     */
    public set _msfp_project_value(value: string | undefined) {
        this.__msfp_project_value = value;
    };
    /**
     * Gets the _msfp_publishedby_value property value. 
     * @returns a string
     */
    public get _msfp_publishedby_value() {
        return this.__msfp_publishedby_value;
    };
    /**
     * Sets the _msfp_publishedby_value property value. 
     * @param value Value to set for the _msfp_publishedby_value property.
     */
    public set _msfp_publishedby_value(value: string | undefined) {
        this.__msfp_publishedby_value = value;
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
     * Instantiates a new msfp_survey and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msfp_survey)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msfp_survey)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msfp_survey)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msfp_survey)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_inspection_value": (o, n) => { (o as unknown as Msfp_survey)._msdyn_inspection_value = n.getStringValue(); },
            "_msfp_project_value": (o, n) => { (o as unknown as Msfp_survey)._msfp_project_value = n.getStringValue(); },
            "_msfp_publishedby_value": (o, n) => { (o as unknown as Msfp_survey)._msfp_publishedby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msfp_survey)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msfp_survey)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msfp_survey)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msfp_survey)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msfp_survey).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msfp_survey).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msfp_survey).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msfp_survey).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msfp_survey).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msfp_survey).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msfp_survey).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_Inspection": (o, n) => { (o as unknown as Msfp_survey).msdyn_Inspection = n.getObjectValue<Msdyn_inspection>(createMsdyn_inspectionFromDiscriminatorValue); },
            "msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey": (o, n) => { (o as unknown as Msfp_survey).msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey = n.getCollectionOfObjectValues<Msdyn_livechatconfig>(createMsdyn_livechatconfigFromDiscriminatorValue); },
            "msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey": (o, n) => { (o as unknown as Msfp_survey).msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey = n.getCollectionOfObjectValues<Msdyn_occustommessagingchannel>(createMsdyn_occustommessagingchannelFromDiscriminatorValue); },
            "msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey": (o, n) => { (o as unknown as Msfp_survey).msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey = n.getCollectionOfObjectValues<Msdyn_ocfbpage>(createMsdyn_ocfbpageFromDiscriminatorValue); },
            "msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey": (o, n) => { (o as unknown as Msfp_survey).msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey = n.getCollectionOfObjectValues<Msdyn_oclinechannelconfig>(createMsdyn_oclinechannelconfigFromDiscriminatorValue); },
            "msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey": (o, n) => { (o as unknown as Msfp_survey).msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey = n.getCollectionOfObjectValues<Msdyn_ocsmschannelsetting>(createMsdyn_ocsmschannelsettingFromDiscriminatorValue); },
            "msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey": (o, n) => { (o as unknown as Msfp_survey).msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey = n.getCollectionOfObjectValues<Msdyn_octeamschannelconfig>(createMsdyn_octeamschannelconfigFromDiscriminatorValue); },
            "msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey": (o, n) => { (o as unknown as Msfp_survey).msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey = n.getCollectionOfObjectValues<Msdyn_octwitterhandle>(createMsdyn_octwitterhandleFromDiscriminatorValue); },
            "msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey": (o, n) => { (o as unknown as Msfp_survey).msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey = n.getCollectionOfObjectValues<Msdyn_ocwechatchannelconfig>(createMsdyn_ocwechatchannelconfigFromDiscriminatorValue); },
            "msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey": (o, n) => { (o as unknown as Msfp_survey).msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey = n.getCollectionOfObjectValues<Msdyn_ocwhatsappchannelnumber>(createMsdyn_ocwhatsappchannelnumberFromDiscriminatorValue); },
            "msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey": (o, n) => { (o as unknown as Msfp_survey).msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey = n.getCollectionOfObjectValues<Msdyn_smsnumber>(createMsdyn_smsnumberFromDiscriminatorValue); },
            "msfp_acceptanonymousresponses": (o, n) => { (o as unknown as Msfp_survey).msfp_acceptanonymousresponses = n.getBooleanValue(); },
            "msfp_anonymousurl": (o, n) => { (o as unknown as Msfp_survey).msfp_anonymousurl = n.getStringValue(); },
            "msfp_description": (o, n) => { (o as unknown as Msfp_survey).msfp_description = n.getStringValue(); },
            "msfp_embedcode": (o, n) => { (o as unknown as Msfp_survey).msfp_embedcode = n.getStringValue(); },
            "msfp_enddate": (o, n) => { (o as unknown as Msfp_survey).msfp_enddate = n.getDateValue(); },
            "msfp_friendlyname": (o, n) => { (o as unknown as Msfp_survey).msfp_friendlyname = n.getStringValue(); },
            "msfp_msfp_survey_msfp_alert_survey": (o, n) => { (o as unknown as Msfp_survey).msfp_msfp_survey_msfp_alert_survey = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msfp_msfp_survey_msfp_emailtemplate_surveyid": (o, n) => { (o as unknown as Msfp_survey).msfp_msfp_survey_msfp_emailtemplate_surveyid = n.getCollectionOfObjectValues<Msfp_emailtemplate>(createMsfp_emailtemplateFromDiscriminatorValue); },
            "msfp_msfp_survey_msfp_fileresponse_survey": (o, n) => { (o as unknown as Msfp_survey).msfp_msfp_survey_msfp_fileresponse_survey = n.getCollectionOfObjectValues<Msfp_fileresponse>(createMsfp_fileresponseFromDiscriminatorValue); },
            "msfp_msfp_survey_msfp_question_Survey": (o, n) => { (o as unknown as Msfp_survey).msfp_msfp_survey_msfp_question_Survey = n.getCollectionOfObjectValues<Msfp_question>(createMsfp_questionFromDiscriminatorValue); },
            "msfp_msfp_survey_msfp_surveyinvite_surveyid": (o, n) => { (o as unknown as Msfp_survey).msfp_msfp_survey_msfp_surveyinvite_surveyid = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msfp_msfp_survey_msfp_surveyreminder_survey": (o, n) => { (o as unknown as Msfp_survey).msfp_msfp_survey_msfp_surveyreminder_survey = n.getCollectionOfObjectValues<Msfp_surveyreminder>(createMsfp_surveyreminderFromDiscriminatorValue); },
            "msfp_msfp_survey_msfp_surveyresponse_surveyid": (o, n) => { (o as unknown as Msfp_survey).msfp_msfp_survey_msfp_surveyresponse_surveyid = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msfp_name": (o, n) => { (o as unknown as Msfp_survey).msfp_name = n.getStringValue(); },
            "msfp_otherproperties": (o, n) => { (o as unknown as Msfp_survey).msfp_otherproperties = n.getStringValue(); },
            "msfp_permanentid": (o, n) => { (o as unknown as Msfp_survey).msfp_permanentid = n.getStringValue(); },
            "msfp_project": (o, n) => { (o as unknown as Msfp_survey).msfp_project = n.getObjectValue<Msfp_project>(createMsfp_projectFromDiscriminatorValue); },
            "msfp_publishedby": (o, n) => { (o as unknown as Msfp_survey).msfp_publishedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msfp_publishedon": (o, n) => { (o as unknown as Msfp_survey).msfp_publishedon = n.getDateValue(); },
            "msfp_sourcesurveyidentifier": (o, n) => { (o as unknown as Msfp_survey).msfp_sourcesurveyidentifier = n.getStringValue(); },
            "msfp_sourcesurveymodifieddate": (o, n) => { (o as unknown as Msfp_survey).msfp_sourcesurveymodifieddate = n.getDateValue(); },
            "msfp_sourcesurveyversion": (o, n) => { (o as unknown as Msfp_survey).msfp_sourcesurveyversion = n.getStringValue(); },
            "msfp_startdate": (o, n) => { (o as unknown as Msfp_survey).msfp_startdate = n.getDateValue(); },
            "msfp_survey_AsyncOperations": (o, n) => { (o as unknown as Msfp_survey).msfp_survey_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msfp_survey_BulkDeleteFailures": (o, n) => { (o as unknown as Msfp_survey).msfp_survey_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msfp_survey_MailboxTrackingFolders": (o, n) => { (o as unknown as Msfp_survey).msfp_survey_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msfp_survey_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msfp_survey).msfp_survey_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msfp_survey_ProcessSession": (o, n) => { (o as unknown as Msfp_survey).msfp_survey_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msfp_survey_SyncErrors": (o, n) => { (o as unknown as Msfp_survey).msfp_survey_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msfp_surveyid": (o, n) => { (o as unknown as Msfp_survey).msfp_surveyid = n.getStringValue(); },
            "msfp_surveysource": (o, n) => { (o as unknown as Msfp_survey).msfp_surveysource = n.getStringValue(); },
            "msfp_surveyurl": (o, n) => { (o as unknown as Msfp_survey).msfp_surveyurl = n.getStringValue(); },
            "msfp_variables": (o, n) => { (o as unknown as Msfp_survey).msfp_variables = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msfp_survey).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msfp_survey).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msfp_survey).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msfp_survey).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msfp_survey).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msfp_survey).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msfp_survey).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msfp_survey).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msfp_survey).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msfp_survey).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_Inspection property value. 
     * @returns a msdyn_inspection
     */
    public get msdyn_Inspection() {
        return this._msdyn_Inspection;
    };
    /**
     * Sets the msdyn_Inspection property value. 
     * @param value Value to set for the msdyn_Inspection property.
     */
    public set msdyn_Inspection(value: Msdyn_inspection | undefined) {
        this._msdyn_Inspection = value;
    };
    /**
     * Gets the msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey property value. 
     * @returns a msdyn_livechatconfig
     */
    public get msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey() {
        return this._msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey;
    };
    /**
     * Sets the msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey property value. 
     * @param value Value to set for the msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey property.
     */
    public set msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey(value: Msdyn_livechatconfig[] | undefined) {
        this._msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey = value;
    };
    /**
     * Gets the msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey property value. 
     * @returns a msdyn_occustommessagingchannel
     */
    public get msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey() {
        return this._msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey;
    };
    /**
     * Sets the msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey property value. 
     * @param value Value to set for the msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey property.
     */
    public set msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey(value: Msdyn_occustommessagingchannel[] | undefined) {
        this._msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey = value;
    };
    /**
     * Gets the msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey property value. 
     * @returns a msdyn_ocfbpage
     */
    public get msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey() {
        return this._msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey;
    };
    /**
     * Sets the msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey property value. 
     * @param value Value to set for the msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey property.
     */
    public set msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey(value: Msdyn_ocfbpage[] | undefined) {
        this._msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey = value;
    };
    /**
     * Gets the msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey property value. 
     * @returns a msdyn_oclinechannelconfig
     */
    public get msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey() {
        return this._msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey;
    };
    /**
     * Sets the msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey property value. 
     * @param value Value to set for the msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey property.
     */
    public set msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey(value: Msdyn_oclinechannelconfig[] | undefined) {
        this._msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey = value;
    };
    /**
     * Gets the msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey property value. 
     * @returns a msdyn_ocsmschannelsetting
     */
    public get msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey() {
        return this._msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey;
    };
    /**
     * Sets the msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey property value. 
     * @param value Value to set for the msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey property.
     */
    public set msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey(value: Msdyn_ocsmschannelsetting[] | undefined) {
        this._msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey = value;
    };
    /**
     * Gets the msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey property value. 
     * @returns a msdyn_octeamschannelconfig
     */
    public get msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey() {
        return this._msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey;
    };
    /**
     * Sets the msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey property value. 
     * @param value Value to set for the msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey property.
     */
    public set msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey(value: Msdyn_octeamschannelconfig[] | undefined) {
        this._msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey = value;
    };
    /**
     * Gets the msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey property value. 
     * @returns a msdyn_octwitterhandle
     */
    public get msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey() {
        return this._msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey;
    };
    /**
     * Sets the msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey property value. 
     * @param value Value to set for the msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey property.
     */
    public set msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey(value: Msdyn_octwitterhandle[] | undefined) {
        this._msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey = value;
    };
    /**
     * Gets the msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey property value. 
     * @returns a msdyn_ocwechatchannelconfig
     */
    public get msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey() {
        return this._msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey;
    };
    /**
     * Sets the msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey property value. 
     * @param value Value to set for the msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey property.
     */
    public set msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey(value: Msdyn_ocwechatchannelconfig[] | undefined) {
        this._msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey = value;
    };
    /**
     * Gets the msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey property value. 
     * @returns a msdyn_ocwhatsappchannelnumber
     */
    public get msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey() {
        return this._msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey;
    };
    /**
     * Sets the msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey property value. 
     * @param value Value to set for the msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey property.
     */
    public set msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey(value: Msdyn_ocwhatsappchannelnumber[] | undefined) {
        this._msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey = value;
    };
    /**
     * Gets the msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey property value. 
     * @returns a msdyn_smsnumber
     */
    public get msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey() {
        return this._msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey;
    };
    /**
     * Sets the msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey property value. 
     * @param value Value to set for the msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey property.
     */
    public set msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey(value: Msdyn_smsnumber[] | undefined) {
        this._msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey = value;
    };
    /**
     * Gets the msfp_acceptanonymousresponses property value. 
     * @returns a boolean
     */
    public get msfp_acceptanonymousresponses() {
        return this._msfp_acceptanonymousresponses;
    };
    /**
     * Sets the msfp_acceptanonymousresponses property value. 
     * @param value Value to set for the msfp_acceptanonymousresponses property.
     */
    public set msfp_acceptanonymousresponses(value: boolean | undefined) {
        this._msfp_acceptanonymousresponses = value;
    };
    /**
     * Gets the msfp_anonymousurl property value. 
     * @returns a string
     */
    public get msfp_anonymousurl() {
        return this._msfp_anonymousurl;
    };
    /**
     * Sets the msfp_anonymousurl property value. 
     * @param value Value to set for the msfp_anonymousurl property.
     */
    public set msfp_anonymousurl(value: string | undefined) {
        this._msfp_anonymousurl = value;
    };
    /**
     * Gets the msfp_description property value. 
     * @returns a string
     */
    public get msfp_description() {
        return this._msfp_description;
    };
    /**
     * Sets the msfp_description property value. 
     * @param value Value to set for the msfp_description property.
     */
    public set msfp_description(value: string | undefined) {
        this._msfp_description = value;
    };
    /**
     * Gets the msfp_embedcode property value. 
     * @returns a string
     */
    public get msfp_embedcode() {
        return this._msfp_embedcode;
    };
    /**
     * Sets the msfp_embedcode property value. 
     * @param value Value to set for the msfp_embedcode property.
     */
    public set msfp_embedcode(value: string | undefined) {
        this._msfp_embedcode = value;
    };
    /**
     * Gets the msfp_enddate property value. 
     * @returns a Date
     */
    public get msfp_enddate() {
        return this._msfp_enddate;
    };
    /**
     * Sets the msfp_enddate property value. 
     * @param value Value to set for the msfp_enddate property.
     */
    public set msfp_enddate(value: Date | undefined) {
        this._msfp_enddate = value;
    };
    /**
     * Gets the msfp_friendlyname property value. 
     * @returns a string
     */
    public get msfp_friendlyname() {
        return this._msfp_friendlyname;
    };
    /**
     * Sets the msfp_friendlyname property value. 
     * @param value Value to set for the msfp_friendlyname property.
     */
    public set msfp_friendlyname(value: string | undefined) {
        this._msfp_friendlyname = value;
    };
    /**
     * Gets the msfp_msfp_survey_msfp_alert_survey property value. 
     * @returns a msfp_alert
     */
    public get msfp_msfp_survey_msfp_alert_survey() {
        return this._msfp_msfp_survey_msfp_alert_survey;
    };
    /**
     * Sets the msfp_msfp_survey_msfp_alert_survey property value. 
     * @param value Value to set for the msfp_msfp_survey_msfp_alert_survey property.
     */
    public set msfp_msfp_survey_msfp_alert_survey(value: Msfp_alert[] | undefined) {
        this._msfp_msfp_survey_msfp_alert_survey = value;
    };
    /**
     * Gets the msfp_msfp_survey_msfp_emailtemplate_surveyid property value. 
     * @returns a msfp_emailtemplate
     */
    public get msfp_msfp_survey_msfp_emailtemplate_surveyid() {
        return this._msfp_msfp_survey_msfp_emailtemplate_surveyid;
    };
    /**
     * Sets the msfp_msfp_survey_msfp_emailtemplate_surveyid property value. 
     * @param value Value to set for the msfp_msfp_survey_msfp_emailtemplate_surveyid property.
     */
    public set msfp_msfp_survey_msfp_emailtemplate_surveyid(value: Msfp_emailtemplate[] | undefined) {
        this._msfp_msfp_survey_msfp_emailtemplate_surveyid = value;
    };
    /**
     * Gets the msfp_msfp_survey_msfp_fileresponse_survey property value. 
     * @returns a msfp_fileresponse
     */
    public get msfp_msfp_survey_msfp_fileresponse_survey() {
        return this._msfp_msfp_survey_msfp_fileresponse_survey;
    };
    /**
     * Sets the msfp_msfp_survey_msfp_fileresponse_survey property value. 
     * @param value Value to set for the msfp_msfp_survey_msfp_fileresponse_survey property.
     */
    public set msfp_msfp_survey_msfp_fileresponse_survey(value: Msfp_fileresponse[] | undefined) {
        this._msfp_msfp_survey_msfp_fileresponse_survey = value;
    };
    /**
     * Gets the msfp_msfp_survey_msfp_question_Survey property value. 
     * @returns a msfp_question
     */
    public get msfp_msfp_survey_msfp_question_Survey() {
        return this._msfp_msfp_survey_msfp_question_Survey;
    };
    /**
     * Sets the msfp_msfp_survey_msfp_question_Survey property value. 
     * @param value Value to set for the msfp_msfp_survey_msfp_question_Survey property.
     */
    public set msfp_msfp_survey_msfp_question_Survey(value: Msfp_question[] | undefined) {
        this._msfp_msfp_survey_msfp_question_Survey = value;
    };
    /**
     * Gets the msfp_msfp_survey_msfp_surveyinvite_surveyid property value. 
     * @returns a msfp_surveyinvite
     */
    public get msfp_msfp_survey_msfp_surveyinvite_surveyid() {
        return this._msfp_msfp_survey_msfp_surveyinvite_surveyid;
    };
    /**
     * Sets the msfp_msfp_survey_msfp_surveyinvite_surveyid property value. 
     * @param value Value to set for the msfp_msfp_survey_msfp_surveyinvite_surveyid property.
     */
    public set msfp_msfp_survey_msfp_surveyinvite_surveyid(value: Msfp_surveyinvite[] | undefined) {
        this._msfp_msfp_survey_msfp_surveyinvite_surveyid = value;
    };
    /**
     * Gets the msfp_msfp_survey_msfp_surveyreminder_survey property value. 
     * @returns a msfp_surveyreminder
     */
    public get msfp_msfp_survey_msfp_surveyreminder_survey() {
        return this._msfp_msfp_survey_msfp_surveyreminder_survey;
    };
    /**
     * Sets the msfp_msfp_survey_msfp_surveyreminder_survey property value. 
     * @param value Value to set for the msfp_msfp_survey_msfp_surveyreminder_survey property.
     */
    public set msfp_msfp_survey_msfp_surveyreminder_survey(value: Msfp_surveyreminder[] | undefined) {
        this._msfp_msfp_survey_msfp_surveyreminder_survey = value;
    };
    /**
     * Gets the msfp_msfp_survey_msfp_surveyresponse_surveyid property value. 
     * @returns a msfp_surveyresponse
     */
    public get msfp_msfp_survey_msfp_surveyresponse_surveyid() {
        return this._msfp_msfp_survey_msfp_surveyresponse_surveyid;
    };
    /**
     * Sets the msfp_msfp_survey_msfp_surveyresponse_surveyid property value. 
     * @param value Value to set for the msfp_msfp_survey_msfp_surveyresponse_surveyid property.
     */
    public set msfp_msfp_survey_msfp_surveyresponse_surveyid(value: Msfp_surveyresponse[] | undefined) {
        this._msfp_msfp_survey_msfp_surveyresponse_surveyid = value;
    };
    /**
     * Gets the msfp_name property value. 
     * @returns a string
     */
    public get msfp_name() {
        return this._msfp_name;
    };
    /**
     * Sets the msfp_name property value. 
     * @param value Value to set for the msfp_name property.
     */
    public set msfp_name(value: string | undefined) {
        this._msfp_name = value;
    };
    /**
     * Gets the msfp_otherproperties property value. 
     * @returns a string
     */
    public get msfp_otherproperties() {
        return this._msfp_otherproperties;
    };
    /**
     * Sets the msfp_otherproperties property value. 
     * @param value Value to set for the msfp_otherproperties property.
     */
    public set msfp_otherproperties(value: string | undefined) {
        this._msfp_otherproperties = value;
    };
    /**
     * Gets the msfp_permanentid property value. 
     * @returns a string
     */
    public get msfp_permanentid() {
        return this._msfp_permanentid;
    };
    /**
     * Sets the msfp_permanentid property value. 
     * @param value Value to set for the msfp_permanentid property.
     */
    public set msfp_permanentid(value: string | undefined) {
        this._msfp_permanentid = value;
    };
    /**
     * Gets the msfp_project property value. 
     * @returns a msfp_project
     */
    public get msfp_project() {
        return this._msfp_project;
    };
    /**
     * Sets the msfp_project property value. 
     * @param value Value to set for the msfp_project property.
     */
    public set msfp_project(value: Msfp_project | undefined) {
        this._msfp_project = value;
    };
    /**
     * Gets the msfp_publishedby property value. 
     * @returns a systemuser
     */
    public get msfp_publishedby() {
        return this._msfp_publishedby;
    };
    /**
     * Sets the msfp_publishedby property value. 
     * @param value Value to set for the msfp_publishedby property.
     */
    public set msfp_publishedby(value: Systemuser | undefined) {
        this._msfp_publishedby = value;
    };
    /**
     * Gets the msfp_publishedon property value. 
     * @returns a Date
     */
    public get msfp_publishedon() {
        return this._msfp_publishedon;
    };
    /**
     * Sets the msfp_publishedon property value. 
     * @param value Value to set for the msfp_publishedon property.
     */
    public set msfp_publishedon(value: Date | undefined) {
        this._msfp_publishedon = value;
    };
    /**
     * Gets the msfp_sourcesurveyidentifier property value. 
     * @returns a string
     */
    public get msfp_sourcesurveyidentifier() {
        return this._msfp_sourcesurveyidentifier;
    };
    /**
     * Sets the msfp_sourcesurveyidentifier property value. 
     * @param value Value to set for the msfp_sourcesurveyidentifier property.
     */
    public set msfp_sourcesurveyidentifier(value: string | undefined) {
        this._msfp_sourcesurveyidentifier = value;
    };
    /**
     * Gets the msfp_sourcesurveymodifieddate property value. 
     * @returns a Date
     */
    public get msfp_sourcesurveymodifieddate() {
        return this._msfp_sourcesurveymodifieddate;
    };
    /**
     * Sets the msfp_sourcesurveymodifieddate property value. 
     * @param value Value to set for the msfp_sourcesurveymodifieddate property.
     */
    public set msfp_sourcesurveymodifieddate(value: Date | undefined) {
        this._msfp_sourcesurveymodifieddate = value;
    };
    /**
     * Gets the msfp_sourcesurveyversion property value. 
     * @returns a string
     */
    public get msfp_sourcesurveyversion() {
        return this._msfp_sourcesurveyversion;
    };
    /**
     * Sets the msfp_sourcesurveyversion property value. 
     * @param value Value to set for the msfp_sourcesurveyversion property.
     */
    public set msfp_sourcesurveyversion(value: string | undefined) {
        this._msfp_sourcesurveyversion = value;
    };
    /**
     * Gets the msfp_startdate property value. 
     * @returns a Date
     */
    public get msfp_startdate() {
        return this._msfp_startdate;
    };
    /**
     * Sets the msfp_startdate property value. 
     * @param value Value to set for the msfp_startdate property.
     */
    public set msfp_startdate(value: Date | undefined) {
        this._msfp_startdate = value;
    };
    /**
     * Gets the msfp_survey_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msfp_survey_AsyncOperations() {
        return this._msfp_survey_AsyncOperations;
    };
    /**
     * Sets the msfp_survey_AsyncOperations property value. 
     * @param value Value to set for the msfp_survey_AsyncOperations property.
     */
    public set msfp_survey_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msfp_survey_AsyncOperations = value;
    };
    /**
     * Gets the msfp_survey_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msfp_survey_BulkDeleteFailures() {
        return this._msfp_survey_BulkDeleteFailures;
    };
    /**
     * Sets the msfp_survey_BulkDeleteFailures property value. 
     * @param value Value to set for the msfp_survey_BulkDeleteFailures property.
     */
    public set msfp_survey_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msfp_survey_BulkDeleteFailures = value;
    };
    /**
     * Gets the msfp_survey_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msfp_survey_MailboxTrackingFolders() {
        return this._msfp_survey_MailboxTrackingFolders;
    };
    /**
     * Sets the msfp_survey_MailboxTrackingFolders property value. 
     * @param value Value to set for the msfp_survey_MailboxTrackingFolders property.
     */
    public set msfp_survey_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msfp_survey_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msfp_survey_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msfp_survey_PrincipalObjectAttributeAccesses() {
        return this._msfp_survey_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msfp_survey_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msfp_survey_PrincipalObjectAttributeAccesses property.
     */
    public set msfp_survey_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msfp_survey_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msfp_survey_ProcessSession property value. 
     * @returns a processsession
     */
    public get msfp_survey_ProcessSession() {
        return this._msfp_survey_ProcessSession;
    };
    /**
     * Sets the msfp_survey_ProcessSession property value. 
     * @param value Value to set for the msfp_survey_ProcessSession property.
     */
    public set msfp_survey_ProcessSession(value: Processsession[] | undefined) {
        this._msfp_survey_ProcessSession = value;
    };
    /**
     * Gets the msfp_survey_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msfp_survey_SyncErrors() {
        return this._msfp_survey_SyncErrors;
    };
    /**
     * Sets the msfp_survey_SyncErrors property value. 
     * @param value Value to set for the msfp_survey_SyncErrors property.
     */
    public set msfp_survey_SyncErrors(value: Syncerror[] | undefined) {
        this._msfp_survey_SyncErrors = value;
    };
    /**
     * Gets the msfp_surveyid property value. 
     * @returns a string
     */
    public get msfp_surveyid() {
        return this._msfp_surveyid;
    };
    /**
     * Sets the msfp_surveyid property value. 
     * @param value Value to set for the msfp_surveyid property.
     */
    public set msfp_surveyid(value: string | undefined) {
        this._msfp_surveyid = value;
    };
    /**
     * Gets the msfp_surveysource property value. 
     * @returns a string
     */
    public get msfp_surveysource() {
        return this._msfp_surveysource;
    };
    /**
     * Sets the msfp_surveysource property value. 
     * @param value Value to set for the msfp_surveysource property.
     */
    public set msfp_surveysource(value: string | undefined) {
        this._msfp_surveysource = value;
    };
    /**
     * Gets the msfp_surveyurl property value. 
     * @returns a string
     */
    public get msfp_surveyurl() {
        return this._msfp_surveyurl;
    };
    /**
     * Sets the msfp_surveyurl property value. 
     * @param value Value to set for the msfp_surveyurl property.
     */
    public set msfp_surveyurl(value: string | undefined) {
        this._msfp_surveyurl = value;
    };
    /**
     * Gets the msfp_variables property value. 
     * @returns a string
     */
    public get msfp_variables() {
        return this._msfp_variables;
    };
    /**
     * Sets the msfp_variables property value. 
     * @param value Value to set for the msfp_variables property.
     */
    public set msfp_variables(value: string | undefined) {
        this._msfp_variables = value;
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
        writer.writeStringValue("_msdyn_inspection_value", this._msdyn_inspection_value);
        writer.writeStringValue("_msfp_project_value", this._msfp_project_value);
        writer.writeStringValue("_msfp_publishedby_value", this._msfp_publishedby_value);
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
        writer.writeObjectValue<Msdyn_inspection>("msdyn_Inspection", this.msdyn_Inspection);
        writer.writeCollectionOfObjectValues<Msdyn_livechatconfig>("msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey", this.msdyn_msfp_survey_msdyn_livechatconfig_PostConversationSurvey);
        writer.writeCollectionOfObjectValues<Msdyn_occustommessagingchannel>("msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey", this.msdyn_msfp_survey_msdyn_occustommessagingchannel_PostConversationSurvey);
        writer.writeCollectionOfObjectValues<Msdyn_ocfbpage>("msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey", this.msdyn_msfp_survey_msdyn_ocfbpage_PostConversationSurvey);
        writer.writeCollectionOfObjectValues<Msdyn_oclinechannelconfig>("msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey", this.msdyn_msfp_survey_msdyn_oclinechannelconfig_PostConversationSurvey);
        writer.writeCollectionOfObjectValues<Msdyn_ocsmschannelsetting>("msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey", this.msdyn_msfp_survey_msdyn_ocsmschannelsetting_PostConversationSurvey);
        writer.writeCollectionOfObjectValues<Msdyn_octeamschannelconfig>("msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey", this.msdyn_msfp_survey_msdyn_octeamschannelconfig_PostConversationSurvey);
        writer.writeCollectionOfObjectValues<Msdyn_octwitterhandle>("msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey", this.msdyn_msfp_survey_msdyn_octwitterhandle_PostConversationSurvey);
        writer.writeCollectionOfObjectValues<Msdyn_ocwechatchannelconfig>("msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey", this.msdyn_msfp_survey_msdyn_ocwechatchannelconfig_PostConversationSurvey);
        writer.writeCollectionOfObjectValues<Msdyn_ocwhatsappchannelnumber>("msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey", this.msdyn_msfp_survey_msdyn_ocwhatsappchannelnumber_PostConversationSurvey);
        writer.writeCollectionOfObjectValues<Msdyn_smsnumber>("msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey", this.msdyn_msfp_survey_msdyn_smsnumber_PostConversationSurvey);
        writer.writeBooleanValue("msfp_acceptanonymousresponses", this.msfp_acceptanonymousresponses);
        writer.writeStringValue("msfp_anonymousurl", this.msfp_anonymousurl);
        writer.writeStringValue("msfp_description", this.msfp_description);
        writer.writeStringValue("msfp_embedcode", this.msfp_embedcode);
        writer.writeDateValue("msfp_enddate", this.msfp_enddate);
        writer.writeStringValue("msfp_friendlyname", this.msfp_friendlyname);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msfp_msfp_survey_msfp_alert_survey", this.msfp_msfp_survey_msfp_alert_survey);
        writer.writeCollectionOfObjectValues<Msfp_emailtemplate>("msfp_msfp_survey_msfp_emailtemplate_surveyid", this.msfp_msfp_survey_msfp_emailtemplate_surveyid);
        writer.writeCollectionOfObjectValues<Msfp_fileresponse>("msfp_msfp_survey_msfp_fileresponse_survey", this.msfp_msfp_survey_msfp_fileresponse_survey);
        writer.writeCollectionOfObjectValues<Msfp_question>("msfp_msfp_survey_msfp_question_Survey", this.msfp_msfp_survey_msfp_question_Survey);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msfp_msfp_survey_msfp_surveyinvite_surveyid", this.msfp_msfp_survey_msfp_surveyinvite_surveyid);
        writer.writeCollectionOfObjectValues<Msfp_surveyreminder>("msfp_msfp_survey_msfp_surveyreminder_survey", this.msfp_msfp_survey_msfp_surveyreminder_survey);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msfp_msfp_survey_msfp_surveyresponse_surveyid", this.msfp_msfp_survey_msfp_surveyresponse_surveyid);
        writer.writeStringValue("msfp_name", this.msfp_name);
        writer.writeStringValue("msfp_otherproperties", this.msfp_otherproperties);
        writer.writeStringValue("msfp_permanentid", this.msfp_permanentid);
        writer.writeObjectValue<Msfp_project>("msfp_project", this.msfp_project);
        writer.writeObjectValue<Systemuser>("msfp_publishedby", this.msfp_publishedby);
        writer.writeDateValue("msfp_publishedon", this.msfp_publishedon);
        writer.writeStringValue("msfp_sourcesurveyidentifier", this.msfp_sourcesurveyidentifier);
        writer.writeDateValue("msfp_sourcesurveymodifieddate", this.msfp_sourcesurveymodifieddate);
        writer.writeStringValue("msfp_sourcesurveyversion", this.msfp_sourcesurveyversion);
        writer.writeDateValue("msfp_startdate", this.msfp_startdate);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msfp_survey_AsyncOperations", this.msfp_survey_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msfp_survey_BulkDeleteFailures", this.msfp_survey_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msfp_survey_MailboxTrackingFolders", this.msfp_survey_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msfp_survey_PrincipalObjectAttributeAccesses", this.msfp_survey_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msfp_survey_ProcessSession", this.msfp_survey_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msfp_survey_SyncErrors", this.msfp_survey_SyncErrors);
        writer.writeStringValue("msfp_surveyid", this.msfp_surveyid);
        writer.writeStringValue("msfp_surveysource", this.msfp_surveysource);
        writer.writeStringValue("msfp_surveyurl", this.msfp_surveyurl);
        writer.writeStringValue("msfp_variables", this.msfp_variables);
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
