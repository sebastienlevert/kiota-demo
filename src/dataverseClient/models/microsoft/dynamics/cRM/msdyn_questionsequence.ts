import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_livechatconfigFromDiscriminatorValue} from './createMsdyn_livechatconfigFromDiscriminatorValue';
import {createMsdyn_surveyquestionFromDiscriminatorValue} from './createMsdyn_surveyquestionFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyn_livechatconfig, Msdyn_surveyquestion, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_questionsequence extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_chatengagementtochatsequenceid_value?: string | undefined;
    private __msdyn_surveyquestion_value?: string | undefined;
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
    private _msdyn_ChatEngagementToChatSequenceId?: Msdyn_livechatconfig | undefined;
    private _msdyn_chatquestionnairetype?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_questionrequired?: boolean | undefined;
    private _msdyn_questionseq_msdyn_livechatconf_auth?: Msdyn_livechatconfig[] | undefined;
    private _msdyn_questionseq_msdyn_livechatconf_unauth?: Msdyn_livechatconfig[] | undefined;
    private _msdyn_questionsequence_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_questionsequence_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_questionsequence_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_questionsequence_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_questionsequence_ProcessSession?: Processsession[] | undefined;
    private _msdyn_questionsequence_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_questionsequenceid?: string | undefined;
    private _msdyn_SurveyQuestion?: Msdyn_surveyquestion | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _sequencenumber?: number | undefined;
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
     * Gets the _msdyn_chatengagementtochatsequenceid_value property value. 
     * @returns a string
     */
    public get _msdyn_chatengagementtochatsequenceid_value() {
        return this.__msdyn_chatengagementtochatsequenceid_value;
    };
    /**
     * Sets the _msdyn_chatengagementtochatsequenceid_value property value. 
     * @param value Value to set for the _msdyn_chatengagementtochatsequenceid_value property.
     */
    public set _msdyn_chatengagementtochatsequenceid_value(value: string | undefined) {
        this.__msdyn_chatengagementtochatsequenceid_value = value;
    };
    /**
     * Gets the _msdyn_surveyquestion_value property value. 
     * @returns a string
     */
    public get _msdyn_surveyquestion_value() {
        return this.__msdyn_surveyquestion_value;
    };
    /**
     * Sets the _msdyn_surveyquestion_value property value. 
     * @param value Value to set for the _msdyn_surveyquestion_value property.
     */
    public set _msdyn_surveyquestion_value(value: string | undefined) {
        this.__msdyn_surveyquestion_value = value;
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
     * Instantiates a new msdyn_questionsequence and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_questionsequence)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_questionsequence)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_questionsequence)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_questionsequence)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_chatengagementtochatsequenceid_value": (o, n) => { (o as unknown as Msdyn_questionsequence)._msdyn_chatengagementtochatsequenceid_value = n.getStringValue(); },
            "_msdyn_surveyquestion_value": (o, n) => { (o as unknown as Msdyn_questionsequence)._msdyn_surveyquestion_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_questionsequence)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_questionsequence)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_questionsequence)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_questionsequence)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_questionsequence).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_questionsequence).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_questionsequence).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_questionsequence).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_questionsequence).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_questionsequence).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_questionsequence).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_ChatEngagementToChatSequenceId": (o, n) => { (o as unknown as Msdyn_questionsequence).msdyn_ChatEngagementToChatSequenceId = n.getObjectValue<Msdyn_livechatconfig>(createMsdyn_livechatconfigFromDiscriminatorValue); },
            "msdyn_chatquestionnairetype": (o, n) => { (o as unknown as Msdyn_questionsequence).msdyn_chatquestionnairetype = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_questionsequence).msdyn_name = n.getStringValue(); },
            "msdyn_questionrequired": (o, n) => { (o as unknown as Msdyn_questionsequence).msdyn_questionrequired = n.getBooleanValue(); },
            "msdyn_questionseq_msdyn_livechatconf_auth": (o, n) => { (o as unknown as Msdyn_questionsequence).msdyn_questionseq_msdyn_livechatconf_auth = n.getCollectionOfObjectValues<Msdyn_livechatconfig>(createMsdyn_livechatconfigFromDiscriminatorValue); },
            "msdyn_questionseq_msdyn_livechatconf_unauth": (o, n) => { (o as unknown as Msdyn_questionsequence).msdyn_questionseq_msdyn_livechatconf_unauth = n.getCollectionOfObjectValues<Msdyn_livechatconfig>(createMsdyn_livechatconfigFromDiscriminatorValue); },
            "msdyn_questionsequence_AsyncOperations": (o, n) => { (o as unknown as Msdyn_questionsequence).msdyn_questionsequence_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_questionsequence_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_questionsequence).msdyn_questionsequence_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_questionsequence_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_questionsequence).msdyn_questionsequence_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_questionsequence_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_questionsequence).msdyn_questionsequence_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_questionsequence_ProcessSession": (o, n) => { (o as unknown as Msdyn_questionsequence).msdyn_questionsequence_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_questionsequence_SyncErrors": (o, n) => { (o as unknown as Msdyn_questionsequence).msdyn_questionsequence_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_questionsequenceid": (o, n) => { (o as unknown as Msdyn_questionsequence).msdyn_questionsequenceid = n.getStringValue(); },
            "msdyn_SurveyQuestion": (o, n) => { (o as unknown as Msdyn_questionsequence).msdyn_SurveyQuestion = n.getObjectValue<Msdyn_surveyquestion>(createMsdyn_surveyquestionFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_questionsequence).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_questionsequence).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_questionsequence).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_questionsequence).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_questionsequence).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "sequencenumber": (o, n) => { (o as unknown as Msdyn_questionsequence).sequencenumber = n.getNumberValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_questionsequence).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_questionsequence).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_questionsequence).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_questionsequence).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_questionsequence).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_ChatEngagementToChatSequenceId property value. 
     * @returns a msdyn_livechatconfig
     */
    public get msdyn_ChatEngagementToChatSequenceId() {
        return this._msdyn_ChatEngagementToChatSequenceId;
    };
    /**
     * Sets the msdyn_ChatEngagementToChatSequenceId property value. 
     * @param value Value to set for the msdyn_ChatEngagementToChatSequenceId property.
     */
    public set msdyn_ChatEngagementToChatSequenceId(value: Msdyn_livechatconfig | undefined) {
        this._msdyn_ChatEngagementToChatSequenceId = value;
    };
    /**
     * Gets the msdyn_chatquestionnairetype property value. 
     * @returns a integer
     */
    public get msdyn_chatquestionnairetype() {
        return this._msdyn_chatquestionnairetype;
    };
    /**
     * Sets the msdyn_chatquestionnairetype property value. 
     * @param value Value to set for the msdyn_chatquestionnairetype property.
     */
    public set msdyn_chatquestionnairetype(value: number | undefined) {
        this._msdyn_chatquestionnairetype = value;
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
     * Gets the msdyn_questionrequired property value. 
     * @returns a boolean
     */
    public get msdyn_questionrequired() {
        return this._msdyn_questionrequired;
    };
    /**
     * Sets the msdyn_questionrequired property value. 
     * @param value Value to set for the msdyn_questionrequired property.
     */
    public set msdyn_questionrequired(value: boolean | undefined) {
        this._msdyn_questionrequired = value;
    };
    /**
     * Gets the msdyn_questionseq_msdyn_livechatconf_auth property value. 
     * @returns a msdyn_livechatconfig
     */
    public get msdyn_questionseq_msdyn_livechatconf_auth() {
        return this._msdyn_questionseq_msdyn_livechatconf_auth;
    };
    /**
     * Sets the msdyn_questionseq_msdyn_livechatconf_auth property value. 
     * @param value Value to set for the msdyn_questionseq_msdyn_livechatconf_auth property.
     */
    public set msdyn_questionseq_msdyn_livechatconf_auth(value: Msdyn_livechatconfig[] | undefined) {
        this._msdyn_questionseq_msdyn_livechatconf_auth = value;
    };
    /**
     * Gets the msdyn_questionseq_msdyn_livechatconf_unauth property value. 
     * @returns a msdyn_livechatconfig
     */
    public get msdyn_questionseq_msdyn_livechatconf_unauth() {
        return this._msdyn_questionseq_msdyn_livechatconf_unauth;
    };
    /**
     * Sets the msdyn_questionseq_msdyn_livechatconf_unauth property value. 
     * @param value Value to set for the msdyn_questionseq_msdyn_livechatconf_unauth property.
     */
    public set msdyn_questionseq_msdyn_livechatconf_unauth(value: Msdyn_livechatconfig[] | undefined) {
        this._msdyn_questionseq_msdyn_livechatconf_unauth = value;
    };
    /**
     * Gets the msdyn_questionsequence_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_questionsequence_AsyncOperations() {
        return this._msdyn_questionsequence_AsyncOperations;
    };
    /**
     * Sets the msdyn_questionsequence_AsyncOperations property value. 
     * @param value Value to set for the msdyn_questionsequence_AsyncOperations property.
     */
    public set msdyn_questionsequence_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_questionsequence_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_questionsequence_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_questionsequence_BulkDeleteFailures() {
        return this._msdyn_questionsequence_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_questionsequence_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_questionsequence_BulkDeleteFailures property.
     */
    public set msdyn_questionsequence_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_questionsequence_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_questionsequence_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_questionsequence_MailboxTrackingFolders() {
        return this._msdyn_questionsequence_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_questionsequence_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_questionsequence_MailboxTrackingFolders property.
     */
    public set msdyn_questionsequence_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_questionsequence_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_questionsequence_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_questionsequence_PrincipalObjectAttributeAccesses() {
        return this._msdyn_questionsequence_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_questionsequence_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_questionsequence_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_questionsequence_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_questionsequence_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_questionsequence_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_questionsequence_ProcessSession() {
        return this._msdyn_questionsequence_ProcessSession;
    };
    /**
     * Sets the msdyn_questionsequence_ProcessSession property value. 
     * @param value Value to set for the msdyn_questionsequence_ProcessSession property.
     */
    public set msdyn_questionsequence_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_questionsequence_ProcessSession = value;
    };
    /**
     * Gets the msdyn_questionsequence_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_questionsequence_SyncErrors() {
        return this._msdyn_questionsequence_SyncErrors;
    };
    /**
     * Sets the msdyn_questionsequence_SyncErrors property value. 
     * @param value Value to set for the msdyn_questionsequence_SyncErrors property.
     */
    public set msdyn_questionsequence_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_questionsequence_SyncErrors = value;
    };
    /**
     * Gets the msdyn_questionsequenceid property value. 
     * @returns a string
     */
    public get msdyn_questionsequenceid() {
        return this._msdyn_questionsequenceid;
    };
    /**
     * Sets the msdyn_questionsequenceid property value. 
     * @param value Value to set for the msdyn_questionsequenceid property.
     */
    public set msdyn_questionsequenceid(value: string | undefined) {
        this._msdyn_questionsequenceid = value;
    };
    /**
     * Gets the msdyn_SurveyQuestion property value. 
     * @returns a msdyn_surveyquestion
     */
    public get msdyn_SurveyQuestion() {
        return this._msdyn_SurveyQuestion;
    };
    /**
     * Sets the msdyn_SurveyQuestion property value. 
     * @param value Value to set for the msdyn_SurveyQuestion property.
     */
    public set msdyn_SurveyQuestion(value: Msdyn_surveyquestion | undefined) {
        this._msdyn_SurveyQuestion = value;
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
     * Gets the sequencenumber property value. 
     * @returns a integer
     */
    public get sequencenumber() {
        return this._sequencenumber;
    };
    /**
     * Sets the sequencenumber property value. 
     * @param value Value to set for the sequencenumber property.
     */
    public set sequencenumber(value: number | undefined) {
        this._sequencenumber = value;
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
        writer.writeStringValue("_msdyn_chatengagementtochatsequenceid_value", this._msdyn_chatengagementtochatsequenceid_value);
        writer.writeStringValue("_msdyn_surveyquestion_value", this._msdyn_surveyquestion_value);
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
        writer.writeObjectValue<Msdyn_livechatconfig>("msdyn_ChatEngagementToChatSequenceId", this.msdyn_ChatEngagementToChatSequenceId);
        writer.writeNumberValue("msdyn_chatquestionnairetype", this.msdyn_chatquestionnairetype);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeBooleanValue("msdyn_questionrequired", this.msdyn_questionrequired);
        writer.writeCollectionOfObjectValues<Msdyn_livechatconfig>("msdyn_questionseq_msdyn_livechatconf_auth", this.msdyn_questionseq_msdyn_livechatconf_auth);
        writer.writeCollectionOfObjectValues<Msdyn_livechatconfig>("msdyn_questionseq_msdyn_livechatconf_unauth", this.msdyn_questionseq_msdyn_livechatconf_unauth);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_questionsequence_AsyncOperations", this.msdyn_questionsequence_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_questionsequence_BulkDeleteFailures", this.msdyn_questionsequence_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_questionsequence_MailboxTrackingFolders", this.msdyn_questionsequence_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_questionsequence_PrincipalObjectAttributeAccesses", this.msdyn_questionsequence_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_questionsequence_ProcessSession", this.msdyn_questionsequence_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_questionsequence_SyncErrors", this.msdyn_questionsequence_SyncErrors);
        writer.writeStringValue("msdyn_questionsequenceid", this.msdyn_questionsequenceid);
        writer.writeObjectValue<Msdyn_surveyquestion>("msdyn_SurveyQuestion", this.msdyn_SurveyQuestion);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("sequencenumber", this.sequencenumber);
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
