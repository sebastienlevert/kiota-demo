import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsfp_questionFromDiscriminatorValue} from './createMsfp_questionFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msfp_question, Msfp_surveyresponse, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msfp_questionresponse extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msfp_questionid_value?: string | undefined;
    private __msfp_surveyresponseid_value?: string | undefined;
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
    private _msfp_keyphrases?: string | undefined;
    private _msfp_name?: string | undefined;
    private _msfp_otherproperties?: string | undefined;
    private _msfp_questionid?: Msfp_question | undefined;
    private _msfp_questionresponse_AsyncOperations?: Asyncoperation[] | undefined;
    private _msfp_questionresponse_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msfp_questionresponse_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msfp_questionresponse_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msfp_questionresponse_ProcessSession?: Processsession[] | undefined;
    private _msfp_questionresponse_SyncErrors?: Syncerror[] | undefined;
    private _msfp_questionresponseid?: string | undefined;
    private _msfp_response?: string | undefined;
    private _msfp_sentimentvalue?: number | undefined;
    private _msfp_sourcequestionidentifier?: string | undefined;
    private _msfp_sourceresponseidentifier?: string | undefined;
    private _msfp_sourcesurveyidentifier?: string | undefined;
    private _msfp_surveyresponseid?: Msfp_surveyresponse | undefined;
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
     * Gets the _msfp_questionid_value property value. 
     * @returns a string
     */
    public get _msfp_questionid_value() {
        return this.__msfp_questionid_value;
    };
    /**
     * Sets the _msfp_questionid_value property value. 
     * @param value Value to set for the _msfp_questionid_value property.
     */
    public set _msfp_questionid_value(value: string | undefined) {
        this.__msfp_questionid_value = value;
    };
    /**
     * Gets the _msfp_surveyresponseid_value property value. 
     * @returns a string
     */
    public get _msfp_surveyresponseid_value() {
        return this.__msfp_surveyresponseid_value;
    };
    /**
     * Sets the _msfp_surveyresponseid_value property value. 
     * @param value Value to set for the _msfp_surveyresponseid_value property.
     */
    public set _msfp_surveyresponseid_value(value: string | undefined) {
        this.__msfp_surveyresponseid_value = value;
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
     * Instantiates a new msfp_questionresponse and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msfp_questionresponse)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msfp_questionresponse)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msfp_questionresponse)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msfp_questionresponse)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msfp_questionid_value": (o, n) => { (o as unknown as Msfp_questionresponse)._msfp_questionid_value = n.getStringValue(); },
            "_msfp_surveyresponseid_value": (o, n) => { (o as unknown as Msfp_questionresponse)._msfp_surveyresponseid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msfp_questionresponse)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msfp_questionresponse)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msfp_questionresponse)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msfp_questionresponse)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msfp_questionresponse).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msfp_questionresponse).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msfp_questionresponse).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msfp_questionresponse).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msfp_questionresponse).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msfp_questionresponse).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msfp_questionresponse).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msfp_keyphrases": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_keyphrases = n.getStringValue(); },
            "msfp_name": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_name = n.getStringValue(); },
            "msfp_otherproperties": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_otherproperties = n.getStringValue(); },
            "msfp_questionid": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_questionid = n.getObjectValue<Msfp_question>(createMsfp_questionFromDiscriminatorValue); },
            "msfp_questionresponse_AsyncOperations": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_questionresponse_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msfp_questionresponse_BulkDeleteFailures": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_questionresponse_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msfp_questionresponse_MailboxTrackingFolders": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_questionresponse_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msfp_questionresponse_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_questionresponse_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msfp_questionresponse_ProcessSession": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_questionresponse_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msfp_questionresponse_SyncErrors": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_questionresponse_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msfp_questionresponseid": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_questionresponseid = n.getStringValue(); },
            "msfp_response": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_response = n.getStringValue(); },
            "msfp_sentimentvalue": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_sentimentvalue = n.getNumberValue(); },
            "msfp_sourcequestionidentifier": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_sourcequestionidentifier = n.getStringValue(); },
            "msfp_sourceresponseidentifier": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_sourceresponseidentifier = n.getStringValue(); },
            "msfp_sourcesurveyidentifier": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_sourcesurveyidentifier = n.getStringValue(); },
            "msfp_surveyresponseid": (o, n) => { (o as unknown as Msfp_questionresponse).msfp_surveyresponseid = n.getObjectValue<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msfp_questionresponse).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msfp_questionresponse).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msfp_questionresponse).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msfp_questionresponse).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msfp_questionresponse).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msfp_questionresponse).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msfp_questionresponse).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msfp_questionresponse).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msfp_questionresponse).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msfp_questionresponse).versionnumber = n.getNumberValue(); },
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
     * Gets the msfp_keyphrases property value. 
     * @returns a string
     */
    public get msfp_keyphrases() {
        return this._msfp_keyphrases;
    };
    /**
     * Sets the msfp_keyphrases property value. 
     * @param value Value to set for the msfp_keyphrases property.
     */
    public set msfp_keyphrases(value: string | undefined) {
        this._msfp_keyphrases = value;
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
     * Gets the msfp_questionid property value. 
     * @returns a msfp_question
     */
    public get msfp_questionid() {
        return this._msfp_questionid;
    };
    /**
     * Sets the msfp_questionid property value. 
     * @param value Value to set for the msfp_questionid property.
     */
    public set msfp_questionid(value: Msfp_question | undefined) {
        this._msfp_questionid = value;
    };
    /**
     * Gets the msfp_questionresponse_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msfp_questionresponse_AsyncOperations() {
        return this._msfp_questionresponse_AsyncOperations;
    };
    /**
     * Sets the msfp_questionresponse_AsyncOperations property value. 
     * @param value Value to set for the msfp_questionresponse_AsyncOperations property.
     */
    public set msfp_questionresponse_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msfp_questionresponse_AsyncOperations = value;
    };
    /**
     * Gets the msfp_questionresponse_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msfp_questionresponse_BulkDeleteFailures() {
        return this._msfp_questionresponse_BulkDeleteFailures;
    };
    /**
     * Sets the msfp_questionresponse_BulkDeleteFailures property value. 
     * @param value Value to set for the msfp_questionresponse_BulkDeleteFailures property.
     */
    public set msfp_questionresponse_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msfp_questionresponse_BulkDeleteFailures = value;
    };
    /**
     * Gets the msfp_questionresponse_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msfp_questionresponse_MailboxTrackingFolders() {
        return this._msfp_questionresponse_MailboxTrackingFolders;
    };
    /**
     * Sets the msfp_questionresponse_MailboxTrackingFolders property value. 
     * @param value Value to set for the msfp_questionresponse_MailboxTrackingFolders property.
     */
    public set msfp_questionresponse_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msfp_questionresponse_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msfp_questionresponse_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msfp_questionresponse_PrincipalObjectAttributeAccesses() {
        return this._msfp_questionresponse_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msfp_questionresponse_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msfp_questionresponse_PrincipalObjectAttributeAccesses property.
     */
    public set msfp_questionresponse_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msfp_questionresponse_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msfp_questionresponse_ProcessSession property value. 
     * @returns a processsession
     */
    public get msfp_questionresponse_ProcessSession() {
        return this._msfp_questionresponse_ProcessSession;
    };
    /**
     * Sets the msfp_questionresponse_ProcessSession property value. 
     * @param value Value to set for the msfp_questionresponse_ProcessSession property.
     */
    public set msfp_questionresponse_ProcessSession(value: Processsession[] | undefined) {
        this._msfp_questionresponse_ProcessSession = value;
    };
    /**
     * Gets the msfp_questionresponse_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msfp_questionresponse_SyncErrors() {
        return this._msfp_questionresponse_SyncErrors;
    };
    /**
     * Sets the msfp_questionresponse_SyncErrors property value. 
     * @param value Value to set for the msfp_questionresponse_SyncErrors property.
     */
    public set msfp_questionresponse_SyncErrors(value: Syncerror[] | undefined) {
        this._msfp_questionresponse_SyncErrors = value;
    };
    /**
     * Gets the msfp_questionresponseid property value. 
     * @returns a string
     */
    public get msfp_questionresponseid() {
        return this._msfp_questionresponseid;
    };
    /**
     * Sets the msfp_questionresponseid property value. 
     * @param value Value to set for the msfp_questionresponseid property.
     */
    public set msfp_questionresponseid(value: string | undefined) {
        this._msfp_questionresponseid = value;
    };
    /**
     * Gets the msfp_response property value. 
     * @returns a string
     */
    public get msfp_response() {
        return this._msfp_response;
    };
    /**
     * Sets the msfp_response property value. 
     * @param value Value to set for the msfp_response property.
     */
    public set msfp_response(value: string | undefined) {
        this._msfp_response = value;
    };
    /**
     * Gets the msfp_sentimentvalue property value. 
     * @returns a int64
     */
    public get msfp_sentimentvalue() {
        return this._msfp_sentimentvalue;
    };
    /**
     * Sets the msfp_sentimentvalue property value. 
     * @param value Value to set for the msfp_sentimentvalue property.
     */
    public set msfp_sentimentvalue(value: number | undefined) {
        this._msfp_sentimentvalue = value;
    };
    /**
     * Gets the msfp_sourcequestionidentifier property value. 
     * @returns a string
     */
    public get msfp_sourcequestionidentifier() {
        return this._msfp_sourcequestionidentifier;
    };
    /**
     * Sets the msfp_sourcequestionidentifier property value. 
     * @param value Value to set for the msfp_sourcequestionidentifier property.
     */
    public set msfp_sourcequestionidentifier(value: string | undefined) {
        this._msfp_sourcequestionidentifier = value;
    };
    /**
     * Gets the msfp_sourceresponseidentifier property value. 
     * @returns a string
     */
    public get msfp_sourceresponseidentifier() {
        return this._msfp_sourceresponseidentifier;
    };
    /**
     * Sets the msfp_sourceresponseidentifier property value. 
     * @param value Value to set for the msfp_sourceresponseidentifier property.
     */
    public set msfp_sourceresponseidentifier(value: string | undefined) {
        this._msfp_sourceresponseidentifier = value;
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
     * Gets the msfp_surveyresponseid property value. 
     * @returns a msfp_surveyresponse
     */
    public get msfp_surveyresponseid() {
        return this._msfp_surveyresponseid;
    };
    /**
     * Sets the msfp_surveyresponseid property value. 
     * @param value Value to set for the msfp_surveyresponseid property.
     */
    public set msfp_surveyresponseid(value: Msfp_surveyresponse | undefined) {
        this._msfp_surveyresponseid = value;
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
        writer.writeStringValue("_msfp_questionid_value", this._msfp_questionid_value);
        writer.writeStringValue("_msfp_surveyresponseid_value", this._msfp_surveyresponseid_value);
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
        writer.writeStringValue("msfp_keyphrases", this.msfp_keyphrases);
        writer.writeStringValue("msfp_name", this.msfp_name);
        writer.writeStringValue("msfp_otherproperties", this.msfp_otherproperties);
        writer.writeObjectValue<Msfp_question>("msfp_questionid", this.msfp_questionid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msfp_questionresponse_AsyncOperations", this.msfp_questionresponse_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msfp_questionresponse_BulkDeleteFailures", this.msfp_questionresponse_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msfp_questionresponse_MailboxTrackingFolders", this.msfp_questionresponse_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msfp_questionresponse_PrincipalObjectAttributeAccesses", this.msfp_questionresponse_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msfp_questionresponse_ProcessSession", this.msfp_questionresponse_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msfp_questionresponse_SyncErrors", this.msfp_questionresponse_SyncErrors);
        writer.writeStringValue("msfp_questionresponseid", this.msfp_questionresponseid);
        writer.writeStringValue("msfp_response", this.msfp_response);
        writer.writeNumberValue("msfp_sentimentvalue", this.msfp_sentimentvalue);
        writer.writeStringValue("msfp_sourcequestionidentifier", this.msfp_sourcequestionidentifier);
        writer.writeStringValue("msfp_sourceresponseidentifier", this.msfp_sourceresponseidentifier);
        writer.writeStringValue("msfp_sourcesurveyidentifier", this.msfp_sourcesurveyidentifier);
        writer.writeObjectValue<Msfp_surveyresponse>("msfp_surveyresponseid", this.msfp_surveyresponseid);
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
