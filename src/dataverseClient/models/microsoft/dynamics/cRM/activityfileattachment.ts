import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPostcommentFromDiscriminatorValue} from './createPostcommentFromDiscriminatorValue';
import {createPostFromDiscriminatorValue} from './createPostFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Fileattachment, Mailboxtrackingfolder, Post, Postcomment, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Activityfileattachment extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentid_value?: string | undefined;
    private _activityfileattachment_AsyncOperations?: Asyncoperation[] | undefined;
    private _activityfileattachment_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _activityfileattachment_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _activityfileattachment_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _activityfileattachment_FileAttachments?: Fileattachment[] | undefined;
    private _activityfileattachment_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _activityfileattachment_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _activityfileattachment_ProcessSession?: Processsession[] | undefined;
    private _activityfileattachment_SyncErrors?: Syncerror[] | undefined;
    private _activityfileattachmentid?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _filecontent?: string | undefined;
    private _filecontent_name?: string | undefined;
    private _filename?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _objecttypecode?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _parentid_post?: Post | undefined;
    private _parentid_postcomment?: Postcomment | undefined;
    private _solutionid?: string | undefined;
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
     * Gets the _parentid_value property value. 
     * @returns a string
     */
    public get _parentid_value() {
        return this.__parentid_value;
    };
    /**
     * Sets the _parentid_value property value. 
     * @param value Value to set for the _parentid_value property.
     */
    public set _parentid_value(value: string | undefined) {
        this.__parentid_value = value;
    };
    /**
     * Gets the activityfileattachment_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get activityfileattachment_AsyncOperations() {
        return this._activityfileattachment_AsyncOperations;
    };
    /**
     * Sets the activityfileattachment_AsyncOperations property value. 
     * @param value Value to set for the activityfileattachment_AsyncOperations property.
     */
    public set activityfileattachment_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._activityfileattachment_AsyncOperations = value;
    };
    /**
     * Gets the activityfileattachment_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get activityfileattachment_BulkDeleteFailures() {
        return this._activityfileattachment_BulkDeleteFailures;
    };
    /**
     * Sets the activityfileattachment_BulkDeleteFailures property value. 
     * @param value Value to set for the activityfileattachment_BulkDeleteFailures property.
     */
    public set activityfileattachment_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._activityfileattachment_BulkDeleteFailures = value;
    };
    /**
     * Gets the activityfileattachment_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get activityfileattachment_DuplicateBaseRecord() {
        return this._activityfileattachment_DuplicateBaseRecord;
    };
    /**
     * Sets the activityfileattachment_DuplicateBaseRecord property value. 
     * @param value Value to set for the activityfileattachment_DuplicateBaseRecord property.
     */
    public set activityfileattachment_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._activityfileattachment_DuplicateBaseRecord = value;
    };
    /**
     * Gets the activityfileattachment_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get activityfileattachment_DuplicateMatchingRecord() {
        return this._activityfileattachment_DuplicateMatchingRecord;
    };
    /**
     * Sets the activityfileattachment_DuplicateMatchingRecord property value. 
     * @param value Value to set for the activityfileattachment_DuplicateMatchingRecord property.
     */
    public set activityfileattachment_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._activityfileattachment_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the activityfileattachment_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get activityfileattachment_FileAttachments() {
        return this._activityfileattachment_FileAttachments;
    };
    /**
     * Sets the activityfileattachment_FileAttachments property value. 
     * @param value Value to set for the activityfileattachment_FileAttachments property.
     */
    public set activityfileattachment_FileAttachments(value: Fileattachment[] | undefined) {
        this._activityfileattachment_FileAttachments = value;
    };
    /**
     * Gets the activityfileattachment_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get activityfileattachment_MailboxTrackingFolders() {
        return this._activityfileattachment_MailboxTrackingFolders;
    };
    /**
     * Sets the activityfileattachment_MailboxTrackingFolders property value. 
     * @param value Value to set for the activityfileattachment_MailboxTrackingFolders property.
     */
    public set activityfileattachment_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._activityfileattachment_MailboxTrackingFolders = value;
    };
    /**
     * Gets the activityfileattachment_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get activityfileattachment_PrincipalObjectAttributeAccesses() {
        return this._activityfileattachment_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the activityfileattachment_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the activityfileattachment_PrincipalObjectAttributeAccesses property.
     */
    public set activityfileattachment_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._activityfileattachment_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the activityfileattachment_ProcessSession property value. 
     * @returns a processsession
     */
    public get activityfileattachment_ProcessSession() {
        return this._activityfileattachment_ProcessSession;
    };
    /**
     * Sets the activityfileattachment_ProcessSession property value. 
     * @param value Value to set for the activityfileattachment_ProcessSession property.
     */
    public set activityfileattachment_ProcessSession(value: Processsession[] | undefined) {
        this._activityfileattachment_ProcessSession = value;
    };
    /**
     * Gets the activityfileattachment_SyncErrors property value. 
     * @returns a syncerror
     */
    public get activityfileattachment_SyncErrors() {
        return this._activityfileattachment_SyncErrors;
    };
    /**
     * Sets the activityfileattachment_SyncErrors property value. 
     * @param value Value to set for the activityfileattachment_SyncErrors property.
     */
    public set activityfileattachment_SyncErrors(value: Syncerror[] | undefined) {
        this._activityfileattachment_SyncErrors = value;
    };
    /**
     * Gets the activityfileattachmentid property value. 
     * @returns a string
     */
    public get activityfileattachmentid() {
        return this._activityfileattachmentid;
    };
    /**
     * Sets the activityfileattachmentid property value. 
     * @param value Value to set for the activityfileattachmentid property.
     */
    public set activityfileattachmentid(value: string | undefined) {
        this._activityfileattachmentid = value;
    };
    /**
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new activityfileattachment and sets the default values.
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
     * Gets the filecontent property value. 
     * @returns a binary
     */
    public get filecontent() {
        return this._filecontent;
    };
    /**
     * Sets the filecontent property value. 
     * @param value Value to set for the filecontent property.
     */
    public set filecontent(value: string | undefined) {
        this._filecontent = value;
    };
    /**
     * Gets the filecontent_name property value. 
     * @returns a string
     */
    public get filecontent_name() {
        return this._filecontent_name;
    };
    /**
     * Sets the filecontent_name property value. 
     * @param value Value to set for the filecontent_name property.
     */
    public set filecontent_name(value: string | undefined) {
        this._filecontent_name = value;
    };
    /**
     * Gets the filename property value. 
     * @returns a string
     */
    public get filename() {
        return this._filename;
    };
    /**
     * Sets the filename property value. 
     * @param value Value to set for the filename property.
     */
    public set filename(value: string | undefined) {
        this._filename = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Activityfileattachment)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Activityfileattachment)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Activityfileattachment)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Activityfileattachment)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Activityfileattachment)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Activityfileattachment)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Activityfileattachment)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Activityfileattachment)._owninguser_value = n.getStringValue(); },
            "_parentid_value": (o, n) => { (o as unknown as Activityfileattachment)._parentid_value = n.getStringValue(); },
            "activityfileattachment_AsyncOperations": (o, n) => { (o as unknown as Activityfileattachment).activityfileattachment_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "activityfileattachment_BulkDeleteFailures": (o, n) => { (o as unknown as Activityfileattachment).activityfileattachment_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "activityfileattachment_DuplicateBaseRecord": (o, n) => { (o as unknown as Activityfileattachment).activityfileattachment_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "activityfileattachment_DuplicateMatchingRecord": (o, n) => { (o as unknown as Activityfileattachment).activityfileattachment_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "activityfileattachment_FileAttachments": (o, n) => { (o as unknown as Activityfileattachment).activityfileattachment_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "activityfileattachment_MailboxTrackingFolders": (o, n) => { (o as unknown as Activityfileattachment).activityfileattachment_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "activityfileattachment_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Activityfileattachment).activityfileattachment_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "activityfileattachment_ProcessSession": (o, n) => { (o as unknown as Activityfileattachment).activityfileattachment_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "activityfileattachment_SyncErrors": (o, n) => { (o as unknown as Activityfileattachment).activityfileattachment_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "activityfileattachmentid": (o, n) => { (o as unknown as Activityfileattachment).activityfileattachmentid = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Activityfileattachment).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Activityfileattachment).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Activityfileattachment).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Activityfileattachment).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Activityfileattachment).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "filecontent": (o, n) => { (o as unknown as Activityfileattachment).filecontent = n.getStringValue(); },
            "filecontent_name": (o, n) => { (o as unknown as Activityfileattachment).filecontent_name = n.getStringValue(); },
            "filename": (o, n) => { (o as unknown as Activityfileattachment).filename = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Activityfileattachment).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Activityfileattachment).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Activityfileattachment).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Activityfileattachment).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Activityfileattachment).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Activityfileattachment).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "objecttypecode": (o, n) => { (o as unknown as Activityfileattachment).objecttypecode = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Activityfileattachment).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Activityfileattachment).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Activityfileattachment).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Activityfileattachment).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Activityfileattachment).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Activityfileattachment).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "parentid_post": (o, n) => { (o as unknown as Activityfileattachment).parentid_post = n.getObjectValue<Post>(createPostFromDiscriminatorValue); },
            "parentid_postcomment": (o, n) => { (o as unknown as Activityfileattachment).parentid_postcomment = n.getObjectValue<Postcomment>(createPostcommentFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Activityfileattachment).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Activityfileattachment).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Activityfileattachment).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Activityfileattachment).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Activityfileattachment).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Activityfileattachment).versionnumber = n.getNumberValue(); },
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
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
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
     * Gets the objecttypecode property value. 
     * @returns a string
     */
    public get objecttypecode() {
        return this._objecttypecode;
    };
    /**
     * Sets the objecttypecode property value. 
     * @param value Value to set for the objecttypecode property.
     */
    public set objecttypecode(value: string | undefined) {
        this._objecttypecode = value;
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
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
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
     * Gets the parentid_post property value. 
     * @returns a post
     */
    public get parentid_post() {
        return this._parentid_post;
    };
    /**
     * Sets the parentid_post property value. 
     * @param value Value to set for the parentid_post property.
     */
    public set parentid_post(value: Post | undefined) {
        this._parentid_post = value;
    };
    /**
     * Gets the parentid_postcomment property value. 
     * @returns a postcomment
     */
    public get parentid_postcomment() {
        return this._parentid_postcomment;
    };
    /**
     * Sets the parentid_postcomment property value. 
     * @param value Value to set for the parentid_postcomment property.
     */
    public set parentid_postcomment(value: Postcomment | undefined) {
        this._parentid_postcomment = value;
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
        writer.writeStringValue("_parentid_value", this._parentid_value);
        writer.writeCollectionOfObjectValues<Asyncoperation>("activityfileattachment_AsyncOperations", this.activityfileattachment_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("activityfileattachment_BulkDeleteFailures", this.activityfileattachment_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("activityfileattachment_DuplicateBaseRecord", this.activityfileattachment_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("activityfileattachment_DuplicateMatchingRecord", this.activityfileattachment_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Fileattachment>("activityfileattachment_FileAttachments", this.activityfileattachment_FileAttachments);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("activityfileattachment_MailboxTrackingFolders", this.activityfileattachment_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("activityfileattachment_PrincipalObjectAttributeAccesses", this.activityfileattachment_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("activityfileattachment_ProcessSession", this.activityfileattachment_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("activityfileattachment_SyncErrors", this.activityfileattachment_SyncErrors);
        writer.writeStringValue("activityfileattachmentid", this.activityfileattachmentid);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("filecontent", this.filecontent);
        writer.writeStringValue("filecontent_name", this.filecontent_name);
        writer.writeStringValue("filename", this.filename);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("objecttypecode", this.objecttypecode);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Post>("parentid_post", this.parentid_post);
        writer.writeObjectValue<Postcomment>("parentid_postcomment", this.parentid_postcomment);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
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
