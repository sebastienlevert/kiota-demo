import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Fileattachment, Knowledgearticle, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_kbattachment extends Crmbaseentity implements Parsable {
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
    private _msdyn_fileattachment?: string | undefined;
    private _msdyn_fileattachment_name?: string | undefined;
    private _msdyn_fileicon?: string | undefined;
    private _msdyn_fileicon_timestamp?: number | undefined;
    private _msdyn_fileicon_url?: string | undefined;
    private _msdyn_fileiconid?: string | undefined;
    private _msdyn_filename?: string | undefined;
    private _msdyn_filesize?: number | undefined;
    private _msdyn_filetype?: string | undefined;
    private _msdyn_kbattachment_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_kbattachment_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_kbattachment_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_kbattachment_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_kbattachment_FileAttachments?: Fileattachment[] | undefined;
    private _msdyn_kbattachment_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_kbattachment_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_kbattachment_ProcessSession?: Processsession[] | undefined;
    private _msdyn_kbattachment_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_kbattachmentid?: string | undefined;
    private _msdyn_msdyn_kbattachment_knowledgearticle?: Knowledgearticle[] | undefined;
    private _msdyn_relatedannotations?: string | undefined;
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
     * Instantiates a new msdyn_kbattachment and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_kbattachment)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_kbattachment)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_kbattachment)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_kbattachment)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_kbattachment)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_kbattachment)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_kbattachment)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_kbattachment)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_kbattachment).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_kbattachment).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_kbattachment).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_kbattachment).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_kbattachment).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_kbattachment).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_kbattachment).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_fileattachment": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_fileattachment = n.getStringValue(); },
            "msdyn_fileattachment_name": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_fileattachment_name = n.getStringValue(); },
            "msdyn_fileicon": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_fileicon = n.getStringValue(); },
            "msdyn_fileicon_timestamp": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_fileicon_timestamp = n.getNumberValue(); },
            "msdyn_fileicon_url": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_fileicon_url = n.getStringValue(); },
            "msdyn_fileiconid": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_fileiconid = n.getStringValue(); },
            "msdyn_filename": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_filename = n.getStringValue(); },
            "msdyn_filesize": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_filesize = n.getNumberValue(); },
            "msdyn_filetype": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_filetype = n.getStringValue(); },
            "msdyn_kbattachment_AsyncOperations": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_kbattachment_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_kbattachment_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_kbattachment_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_kbattachment_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_kbattachment_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_kbattachment_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_kbattachment_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_kbattachment_FileAttachments": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_kbattachment_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "msdyn_kbattachment_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_kbattachment_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_kbattachment_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_kbattachment_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_kbattachment_ProcessSession": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_kbattachment_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_kbattachment_SyncErrors": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_kbattachment_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_kbattachmentid": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_kbattachmentid = n.getStringValue(); },
            "msdyn_msdyn_kbattachment_knowledgearticle": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_msdyn_kbattachment_knowledgearticle = n.getCollectionOfObjectValues<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "msdyn_relatedannotations": (o, n) => { (o as unknown as Msdyn_kbattachment).msdyn_relatedannotations = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_kbattachment).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_kbattachment).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_kbattachment).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_kbattachment).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_kbattachment).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_kbattachment).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_kbattachment).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_kbattachment).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_kbattachment).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_kbattachment).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_fileattachment property value. 
     * @returns a binary
     */
    public get msdyn_fileattachment() {
        return this._msdyn_fileattachment;
    };
    /**
     * Sets the msdyn_fileattachment property value. 
     * @param value Value to set for the msdyn_fileattachment property.
     */
    public set msdyn_fileattachment(value: string | undefined) {
        this._msdyn_fileattachment = value;
    };
    /**
     * Gets the msdyn_fileattachment_name property value. 
     * @returns a string
     */
    public get msdyn_fileattachment_name() {
        return this._msdyn_fileattachment_name;
    };
    /**
     * Sets the msdyn_fileattachment_name property value. 
     * @param value Value to set for the msdyn_fileattachment_name property.
     */
    public set msdyn_fileattachment_name(value: string | undefined) {
        this._msdyn_fileattachment_name = value;
    };
    /**
     * Gets the msdyn_fileicon property value. 
     * @returns a binary
     */
    public get msdyn_fileicon() {
        return this._msdyn_fileicon;
    };
    /**
     * Sets the msdyn_fileicon property value. 
     * @param value Value to set for the msdyn_fileicon property.
     */
    public set msdyn_fileicon(value: string | undefined) {
        this._msdyn_fileicon = value;
    };
    /**
     * Gets the msdyn_fileicon_timestamp property value. 
     * @returns a int64
     */
    public get msdyn_fileicon_timestamp() {
        return this._msdyn_fileicon_timestamp;
    };
    /**
     * Sets the msdyn_fileicon_timestamp property value. 
     * @param value Value to set for the msdyn_fileicon_timestamp property.
     */
    public set msdyn_fileicon_timestamp(value: number | undefined) {
        this._msdyn_fileicon_timestamp = value;
    };
    /**
     * Gets the msdyn_fileicon_url property value. 
     * @returns a string
     */
    public get msdyn_fileicon_url() {
        return this._msdyn_fileicon_url;
    };
    /**
     * Sets the msdyn_fileicon_url property value. 
     * @param value Value to set for the msdyn_fileicon_url property.
     */
    public set msdyn_fileicon_url(value: string | undefined) {
        this._msdyn_fileicon_url = value;
    };
    /**
     * Gets the msdyn_fileiconid property value. 
     * @returns a string
     */
    public get msdyn_fileiconid() {
        return this._msdyn_fileiconid;
    };
    /**
     * Sets the msdyn_fileiconid property value. 
     * @param value Value to set for the msdyn_fileiconid property.
     */
    public set msdyn_fileiconid(value: string | undefined) {
        this._msdyn_fileiconid = value;
    };
    /**
     * Gets the msdyn_filename property value. 
     * @returns a string
     */
    public get msdyn_filename() {
        return this._msdyn_filename;
    };
    /**
     * Sets the msdyn_filename property value. 
     * @param value Value to set for the msdyn_filename property.
     */
    public set msdyn_filename(value: string | undefined) {
        this._msdyn_filename = value;
    };
    /**
     * Gets the msdyn_filesize property value. 
     * @returns a integer
     */
    public get msdyn_filesize() {
        return this._msdyn_filesize;
    };
    /**
     * Sets the msdyn_filesize property value. 
     * @param value Value to set for the msdyn_filesize property.
     */
    public set msdyn_filesize(value: number | undefined) {
        this._msdyn_filesize = value;
    };
    /**
     * Gets the msdyn_filetype property value. 
     * @returns a string
     */
    public get msdyn_filetype() {
        return this._msdyn_filetype;
    };
    /**
     * Sets the msdyn_filetype property value. 
     * @param value Value to set for the msdyn_filetype property.
     */
    public set msdyn_filetype(value: string | undefined) {
        this._msdyn_filetype = value;
    };
    /**
     * Gets the msdyn_kbattachment_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_kbattachment_AsyncOperations() {
        return this._msdyn_kbattachment_AsyncOperations;
    };
    /**
     * Sets the msdyn_kbattachment_AsyncOperations property value. 
     * @param value Value to set for the msdyn_kbattachment_AsyncOperations property.
     */
    public set msdyn_kbattachment_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_kbattachment_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_kbattachment_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_kbattachment_BulkDeleteFailures() {
        return this._msdyn_kbattachment_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_kbattachment_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_kbattachment_BulkDeleteFailures property.
     */
    public set msdyn_kbattachment_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_kbattachment_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_kbattachment_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_kbattachment_DuplicateBaseRecord() {
        return this._msdyn_kbattachment_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_kbattachment_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_kbattachment_DuplicateBaseRecord property.
     */
    public set msdyn_kbattachment_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_kbattachment_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_kbattachment_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_kbattachment_DuplicateMatchingRecord() {
        return this._msdyn_kbattachment_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_kbattachment_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_kbattachment_DuplicateMatchingRecord property.
     */
    public set msdyn_kbattachment_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_kbattachment_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_kbattachment_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get msdyn_kbattachment_FileAttachments() {
        return this._msdyn_kbattachment_FileAttachments;
    };
    /**
     * Sets the msdyn_kbattachment_FileAttachments property value. 
     * @param value Value to set for the msdyn_kbattachment_FileAttachments property.
     */
    public set msdyn_kbattachment_FileAttachments(value: Fileattachment[] | undefined) {
        this._msdyn_kbattachment_FileAttachments = value;
    };
    /**
     * Gets the msdyn_kbattachment_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_kbattachment_MailboxTrackingFolders() {
        return this._msdyn_kbattachment_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_kbattachment_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_kbattachment_MailboxTrackingFolders property.
     */
    public set msdyn_kbattachment_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_kbattachment_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_kbattachment_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_kbattachment_PrincipalObjectAttributeAccesses() {
        return this._msdyn_kbattachment_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_kbattachment_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_kbattachment_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_kbattachment_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_kbattachment_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_kbattachment_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_kbattachment_ProcessSession() {
        return this._msdyn_kbattachment_ProcessSession;
    };
    /**
     * Sets the msdyn_kbattachment_ProcessSession property value. 
     * @param value Value to set for the msdyn_kbattachment_ProcessSession property.
     */
    public set msdyn_kbattachment_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_kbattachment_ProcessSession = value;
    };
    /**
     * Gets the msdyn_kbattachment_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_kbattachment_SyncErrors() {
        return this._msdyn_kbattachment_SyncErrors;
    };
    /**
     * Sets the msdyn_kbattachment_SyncErrors property value. 
     * @param value Value to set for the msdyn_kbattachment_SyncErrors property.
     */
    public set msdyn_kbattachment_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_kbattachment_SyncErrors = value;
    };
    /**
     * Gets the msdyn_kbattachmentid property value. 
     * @returns a string
     */
    public get msdyn_kbattachmentid() {
        return this._msdyn_kbattachmentid;
    };
    /**
     * Sets the msdyn_kbattachmentid property value. 
     * @param value Value to set for the msdyn_kbattachmentid property.
     */
    public set msdyn_kbattachmentid(value: string | undefined) {
        this._msdyn_kbattachmentid = value;
    };
    /**
     * Gets the msdyn_msdyn_kbattachment_knowledgearticle property value. 
     * @returns a knowledgearticle
     */
    public get msdyn_msdyn_kbattachment_knowledgearticle() {
        return this._msdyn_msdyn_kbattachment_knowledgearticle;
    };
    /**
     * Sets the msdyn_msdyn_kbattachment_knowledgearticle property value. 
     * @param value Value to set for the msdyn_msdyn_kbattachment_knowledgearticle property.
     */
    public set msdyn_msdyn_kbattachment_knowledgearticle(value: Knowledgearticle[] | undefined) {
        this._msdyn_msdyn_kbattachment_knowledgearticle = value;
    };
    /**
     * Gets the msdyn_relatedannotations property value. 
     * @returns a string
     */
    public get msdyn_relatedannotations() {
        return this._msdyn_relatedannotations;
    };
    /**
     * Sets the msdyn_relatedannotations property value. 
     * @param value Value to set for the msdyn_relatedannotations property.
     */
    public set msdyn_relatedannotations(value: string | undefined) {
        this._msdyn_relatedannotations = value;
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
        writer.writeStringValue("msdyn_fileattachment", this.msdyn_fileattachment);
        writer.writeStringValue("msdyn_fileattachment_name", this.msdyn_fileattachment_name);
        writer.writeStringValue("msdyn_fileicon", this.msdyn_fileicon);
        writer.writeNumberValue("msdyn_fileicon_timestamp", this.msdyn_fileicon_timestamp);
        writer.writeStringValue("msdyn_fileicon_url", this.msdyn_fileicon_url);
        writer.writeStringValue("msdyn_fileiconid", this.msdyn_fileiconid);
        writer.writeStringValue("msdyn_filename", this.msdyn_filename);
        writer.writeNumberValue("msdyn_filesize", this.msdyn_filesize);
        writer.writeStringValue("msdyn_filetype", this.msdyn_filetype);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_kbattachment_AsyncOperations", this.msdyn_kbattachment_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_kbattachment_BulkDeleteFailures", this.msdyn_kbattachment_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_kbattachment_DuplicateBaseRecord", this.msdyn_kbattachment_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_kbattachment_DuplicateMatchingRecord", this.msdyn_kbattachment_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Fileattachment>("msdyn_kbattachment_FileAttachments", this.msdyn_kbattachment_FileAttachments);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_kbattachment_MailboxTrackingFolders", this.msdyn_kbattachment_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_kbattachment_PrincipalObjectAttributeAccesses", this.msdyn_kbattachment_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_kbattachment_ProcessSession", this.msdyn_kbattachment_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_kbattachment_SyncErrors", this.msdyn_kbattachment_SyncErrors);
        writer.writeStringValue("msdyn_kbattachmentid", this.msdyn_kbattachmentid);
        writer.writeCollectionOfObjectValues<Knowledgearticle>("msdyn_msdyn_kbattachment_knowledgearticle", this.msdyn_msdyn_kbattachment_knowledgearticle);
        writer.writeStringValue("msdyn_relatedannotations", this.msdyn_relatedannotations);
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
