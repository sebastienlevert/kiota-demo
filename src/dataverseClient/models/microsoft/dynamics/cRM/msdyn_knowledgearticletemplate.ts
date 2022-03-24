import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQueueitemFromDiscriminatorValue} from './createQueueitemFromDiscriminatorValue';
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSubjectFromDiscriminatorValue} from './createSubjectFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Queueitem, Sharepointdocumentlocation, Subject, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_knowledgearticletemplate extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_subjectid_value?: string | undefined;
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
    private _msdyn_content?: string | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_isinternal?: boolean | undefined;
    private _msdyn_keywords?: string | undefined;
    private _msdyn_knowledgearticletemplate_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_knowledgearticletemplate_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_knowledgearticletemplate_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_knowledgearticletemplate_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_knowledgearticletemplate_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_knowledgearticletemplate_ProcessSession?: Processsession[] | undefined;
    private _msdyn_knowledgearticletemplate_QueueItems?: Queueitem[] | undefined;
    private _msdyn_knowledgearticletemplate_SharePointDocumentLocations?: Sharepointdocumentlocation[] | undefined;
    private _msdyn_knowledgearticletemplate_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_knowledgearticletemplateid?: string | undefined;
    private _msdyn_languagelocaleid?: string | undefined;
    private _msdyn_LanguageLocaleIdName?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_subjectid?: Subject | undefined;
    private _msdyn_title?: string | undefined;
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
     * Gets the _msdyn_subjectid_value property value. 
     * @returns a string
     */
    public get _msdyn_subjectid_value() {
        return this.__msdyn_subjectid_value;
    };
    /**
     * Sets the _msdyn_subjectid_value property value. 
     * @param value Value to set for the _msdyn_subjectid_value property.
     */
    public set _msdyn_subjectid_value(value: string | undefined) {
        this.__msdyn_subjectid_value = value;
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
     * Instantiates a new msdyn_knowledgearticletemplate and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_subjectid_value": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate)._msdyn_subjectid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_content": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_content = n.getStringValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_description = n.getStringValue(); },
            "msdyn_isinternal": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_isinternal = n.getBooleanValue(); },
            "msdyn_keywords": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_keywords = n.getStringValue(); },
            "msdyn_knowledgearticletemplate_AsyncOperations": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_knowledgearticletemplate_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_knowledgearticletemplate_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_knowledgearticletemplate_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_knowledgearticletemplate_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_knowledgearticletemplate_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_knowledgearticletemplate_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_knowledgearticletemplate_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_knowledgearticletemplate_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_knowledgearticletemplate_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_knowledgearticletemplate_ProcessSession": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_knowledgearticletemplate_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_knowledgearticletemplate_QueueItems": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_knowledgearticletemplate_QueueItems = n.getCollectionOfObjectValues<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "msdyn_knowledgearticletemplate_SharePointDocumentLocations": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_knowledgearticletemplate_SharePointDocumentLocations = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "msdyn_knowledgearticletemplate_SyncErrors": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_knowledgearticletemplate_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_knowledgearticletemplateid": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_knowledgearticletemplateid = n.getStringValue(); },
            "msdyn_languagelocaleid": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_languagelocaleid = n.getStringValue(); },
            "msdyn_LanguageLocaleIdName": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_LanguageLocaleIdName = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_name = n.getStringValue(); },
            "msdyn_subjectid": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_subjectid = n.getObjectValue<Subject>(createSubjectFromDiscriminatorValue); },
            "msdyn_title": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).msdyn_title = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_knowledgearticletemplate).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_content property value. 
     * @returns a string
     */
    public get msdyn_content() {
        return this._msdyn_content;
    };
    /**
     * Sets the msdyn_content property value. 
     * @param value Value to set for the msdyn_content property.
     */
    public set msdyn_content(value: string | undefined) {
        this._msdyn_content = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_isinternal property value. 
     * @returns a boolean
     */
    public get msdyn_isinternal() {
        return this._msdyn_isinternal;
    };
    /**
     * Sets the msdyn_isinternal property value. 
     * @param value Value to set for the msdyn_isinternal property.
     */
    public set msdyn_isinternal(value: boolean | undefined) {
        this._msdyn_isinternal = value;
    };
    /**
     * Gets the msdyn_keywords property value. 
     * @returns a string
     */
    public get msdyn_keywords() {
        return this._msdyn_keywords;
    };
    /**
     * Sets the msdyn_keywords property value. 
     * @param value Value to set for the msdyn_keywords property.
     */
    public set msdyn_keywords(value: string | undefined) {
        this._msdyn_keywords = value;
    };
    /**
     * Gets the msdyn_knowledgearticletemplate_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_knowledgearticletemplate_AsyncOperations() {
        return this._msdyn_knowledgearticletemplate_AsyncOperations;
    };
    /**
     * Sets the msdyn_knowledgearticletemplate_AsyncOperations property value. 
     * @param value Value to set for the msdyn_knowledgearticletemplate_AsyncOperations property.
     */
    public set msdyn_knowledgearticletemplate_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_knowledgearticletemplate_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_knowledgearticletemplate_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_knowledgearticletemplate_BulkDeleteFailures() {
        return this._msdyn_knowledgearticletemplate_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_knowledgearticletemplate_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_knowledgearticletemplate_BulkDeleteFailures property.
     */
    public set msdyn_knowledgearticletemplate_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_knowledgearticletemplate_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_knowledgearticletemplate_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_knowledgearticletemplate_DuplicateBaseRecord() {
        return this._msdyn_knowledgearticletemplate_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_knowledgearticletemplate_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_knowledgearticletemplate_DuplicateBaseRecord property.
     */
    public set msdyn_knowledgearticletemplate_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_knowledgearticletemplate_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_knowledgearticletemplate_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_knowledgearticletemplate_DuplicateMatchingRecord() {
        return this._msdyn_knowledgearticletemplate_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_knowledgearticletemplate_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_knowledgearticletemplate_DuplicateMatchingRecord property.
     */
    public set msdyn_knowledgearticletemplate_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_knowledgearticletemplate_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_knowledgearticletemplate_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_knowledgearticletemplate_MailboxTrackingFolders() {
        return this._msdyn_knowledgearticletemplate_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_knowledgearticletemplate_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_knowledgearticletemplate_MailboxTrackingFolders property.
     */
    public set msdyn_knowledgearticletemplate_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_knowledgearticletemplate_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses() {
        return this._msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_knowledgearticletemplate_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_knowledgearticletemplate_ProcessSession() {
        return this._msdyn_knowledgearticletemplate_ProcessSession;
    };
    /**
     * Sets the msdyn_knowledgearticletemplate_ProcessSession property value. 
     * @param value Value to set for the msdyn_knowledgearticletemplate_ProcessSession property.
     */
    public set msdyn_knowledgearticletemplate_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_knowledgearticletemplate_ProcessSession = value;
    };
    /**
     * Gets the msdyn_knowledgearticletemplate_QueueItems property value. 
     * @returns a queueitem
     */
    public get msdyn_knowledgearticletemplate_QueueItems() {
        return this._msdyn_knowledgearticletemplate_QueueItems;
    };
    /**
     * Sets the msdyn_knowledgearticletemplate_QueueItems property value. 
     * @param value Value to set for the msdyn_knowledgearticletemplate_QueueItems property.
     */
    public set msdyn_knowledgearticletemplate_QueueItems(value: Queueitem[] | undefined) {
        this._msdyn_knowledgearticletemplate_QueueItems = value;
    };
    /**
     * Gets the msdyn_knowledgearticletemplate_SharePointDocumentLocations property value. 
     * @returns a sharepointdocumentlocation
     */
    public get msdyn_knowledgearticletemplate_SharePointDocumentLocations() {
        return this._msdyn_knowledgearticletemplate_SharePointDocumentLocations;
    };
    /**
     * Sets the msdyn_knowledgearticletemplate_SharePointDocumentLocations property value. 
     * @param value Value to set for the msdyn_knowledgearticletemplate_SharePointDocumentLocations property.
     */
    public set msdyn_knowledgearticletemplate_SharePointDocumentLocations(value: Sharepointdocumentlocation[] | undefined) {
        this._msdyn_knowledgearticletemplate_SharePointDocumentLocations = value;
    };
    /**
     * Gets the msdyn_knowledgearticletemplate_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_knowledgearticletemplate_SyncErrors() {
        return this._msdyn_knowledgearticletemplate_SyncErrors;
    };
    /**
     * Sets the msdyn_knowledgearticletemplate_SyncErrors property value. 
     * @param value Value to set for the msdyn_knowledgearticletemplate_SyncErrors property.
     */
    public set msdyn_knowledgearticletemplate_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_knowledgearticletemplate_SyncErrors = value;
    };
    /**
     * Gets the msdyn_knowledgearticletemplateid property value. 
     * @returns a string
     */
    public get msdyn_knowledgearticletemplateid() {
        return this._msdyn_knowledgearticletemplateid;
    };
    /**
     * Sets the msdyn_knowledgearticletemplateid property value. 
     * @param value Value to set for the msdyn_knowledgearticletemplateid property.
     */
    public set msdyn_knowledgearticletemplateid(value: string | undefined) {
        this._msdyn_knowledgearticletemplateid = value;
    };
    /**
     * Gets the msdyn_languagelocaleid property value. 
     * @returns a string
     */
    public get msdyn_languagelocaleid() {
        return this._msdyn_languagelocaleid;
    };
    /**
     * Sets the msdyn_languagelocaleid property value. 
     * @param value Value to set for the msdyn_languagelocaleid property.
     */
    public set msdyn_languagelocaleid(value: string | undefined) {
        this._msdyn_languagelocaleid = value;
    };
    /**
     * Gets the msdyn_LanguageLocaleIdName property value. 
     * @returns a string
     */
    public get msdyn_LanguageLocaleIdName() {
        return this._msdyn_LanguageLocaleIdName;
    };
    /**
     * Sets the msdyn_LanguageLocaleIdName property value. 
     * @param value Value to set for the msdyn_LanguageLocaleIdName property.
     */
    public set msdyn_LanguageLocaleIdName(value: string | undefined) {
        this._msdyn_LanguageLocaleIdName = value;
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
     * Gets the msdyn_subjectid property value. 
     * @returns a subject
     */
    public get msdyn_subjectid() {
        return this._msdyn_subjectid;
    };
    /**
     * Sets the msdyn_subjectid property value. 
     * @param value Value to set for the msdyn_subjectid property.
     */
    public set msdyn_subjectid(value: Subject | undefined) {
        this._msdyn_subjectid = value;
    };
    /**
     * Gets the msdyn_title property value. 
     * @returns a string
     */
    public get msdyn_title() {
        return this._msdyn_title;
    };
    /**
     * Sets the msdyn_title property value. 
     * @param value Value to set for the msdyn_title property.
     */
    public set msdyn_title(value: string | undefined) {
        this._msdyn_title = value;
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
        writer.writeStringValue("_msdyn_subjectid_value", this._msdyn_subjectid_value);
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
        writer.writeStringValue("msdyn_content", this.msdyn_content);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeBooleanValue("msdyn_isinternal", this.msdyn_isinternal);
        writer.writeStringValue("msdyn_keywords", this.msdyn_keywords);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_knowledgearticletemplate_AsyncOperations", this.msdyn_knowledgearticletemplate_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_knowledgearticletemplate_BulkDeleteFailures", this.msdyn_knowledgearticletemplate_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_knowledgearticletemplate_DuplicateBaseRecord", this.msdyn_knowledgearticletemplate_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_knowledgearticletemplate_DuplicateMatchingRecord", this.msdyn_knowledgearticletemplate_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_knowledgearticletemplate_MailboxTrackingFolders", this.msdyn_knowledgearticletemplate_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses", this.msdyn_knowledgearticletemplate_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_knowledgearticletemplate_ProcessSession", this.msdyn_knowledgearticletemplate_ProcessSession);
        writer.writeCollectionOfObjectValues<Queueitem>("msdyn_knowledgearticletemplate_QueueItems", this.msdyn_knowledgearticletemplate_QueueItems);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("msdyn_knowledgearticletemplate_SharePointDocumentLocations", this.msdyn_knowledgearticletemplate_SharePointDocumentLocations);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_knowledgearticletemplate_SyncErrors", this.msdyn_knowledgearticletemplate_SyncErrors);
        writer.writeStringValue("msdyn_knowledgearticletemplateid", this.msdyn_knowledgearticletemplateid);
        writer.writeStringValue("msdyn_languagelocaleid", this.msdyn_languagelocaleid);
        writer.writeStringValue("msdyn_LanguageLocaleIdName", this.msdyn_LanguageLocaleIdName);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Subject>("msdyn_subjectid", this.msdyn_subjectid);
        writer.writeStringValue("msdyn_title", this.msdyn_title);
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
