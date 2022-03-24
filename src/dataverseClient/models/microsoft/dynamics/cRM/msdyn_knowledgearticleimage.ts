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

export class Msdyn_knowledgearticleimage extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_parententityrecordid_value?: string | undefined;
    private __msdyn_parentknowledgearticleid_value?: string | undefined;
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
    private _msdyn_blobfile?: string | undefined;
    private _msdyn_blobfile_name?: string | undefined;
    private _msdyn_filename?: string | undefined;
    private _msdyn_knowledgearticleimage_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_knowledgearticleimage_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_knowledgearticleimage_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_knowledgearticleimage_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_knowledgearticleimage_FileAttachments?: Fileattachment[] | undefined;
    private _msdyn_knowledgearticleimage_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_knowledgearticleimage_ProcessSession?: Processsession[] | undefined;
    private _msdyn_knowledgearticleimage_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_knowledgearticleimageid?: string | undefined;
    private _msdyn_parentknowledgearticleid?: Knowledgearticle | undefined;
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
     * Gets the _msdyn_parententityrecordid_value property value. 
     * @returns a string
     */
    public get _msdyn_parententityrecordid_value() {
        return this.__msdyn_parententityrecordid_value;
    };
    /**
     * Sets the _msdyn_parententityrecordid_value property value. 
     * @param value Value to set for the _msdyn_parententityrecordid_value property.
     */
    public set _msdyn_parententityrecordid_value(value: string | undefined) {
        this.__msdyn_parententityrecordid_value = value;
    };
    /**
     * Gets the _msdyn_parentknowledgearticleid_value property value. 
     * @returns a string
     */
    public get _msdyn_parentknowledgearticleid_value() {
        return this.__msdyn_parentknowledgearticleid_value;
    };
    /**
     * Sets the _msdyn_parentknowledgearticleid_value property value. 
     * @param value Value to set for the _msdyn_parentknowledgearticleid_value property.
     */
    public set _msdyn_parentknowledgearticleid_value(value: string | undefined) {
        this.__msdyn_parentknowledgearticleid_value = value;
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
     * Instantiates a new msdyn_knowledgearticleimage and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_parententityrecordid_value": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage)._msdyn_parententityrecordid_value = n.getStringValue(); },
            "_msdyn_parentknowledgearticleid_value": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage)._msdyn_parentknowledgearticleid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_blobfile": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).msdyn_blobfile = n.getStringValue(); },
            "msdyn_blobfile_name": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).msdyn_blobfile_name = n.getStringValue(); },
            "msdyn_filename": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).msdyn_filename = n.getStringValue(); },
            "msdyn_knowledgearticleimage_AsyncOperations": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).msdyn_knowledgearticleimage_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_knowledgearticleimage_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).msdyn_knowledgearticleimage_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_knowledgearticleimage_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).msdyn_knowledgearticleimage_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_knowledgearticleimage_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).msdyn_knowledgearticleimage_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_knowledgearticleimage_FileAttachments": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).msdyn_knowledgearticleimage_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "msdyn_knowledgearticleimage_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).msdyn_knowledgearticleimage_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_knowledgearticleimage_ProcessSession": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).msdyn_knowledgearticleimage_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_knowledgearticleimage_SyncErrors": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).msdyn_knowledgearticleimage_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_knowledgearticleimageid": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).msdyn_knowledgearticleimageid = n.getStringValue(); },
            "msdyn_parentknowledgearticleid": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).msdyn_parentknowledgearticleid = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_knowledgearticleimage).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_blobfile property value. 
     * @returns a binary
     */
    public get msdyn_blobfile() {
        return this._msdyn_blobfile;
    };
    /**
     * Sets the msdyn_blobfile property value. 
     * @param value Value to set for the msdyn_blobfile property.
     */
    public set msdyn_blobfile(value: string | undefined) {
        this._msdyn_blobfile = value;
    };
    /**
     * Gets the msdyn_blobfile_name property value. 
     * @returns a string
     */
    public get msdyn_blobfile_name() {
        return this._msdyn_blobfile_name;
    };
    /**
     * Sets the msdyn_blobfile_name property value. 
     * @param value Value to set for the msdyn_blobfile_name property.
     */
    public set msdyn_blobfile_name(value: string | undefined) {
        this._msdyn_blobfile_name = value;
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
     * Gets the msdyn_knowledgearticleimage_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_knowledgearticleimage_AsyncOperations() {
        return this._msdyn_knowledgearticleimage_AsyncOperations;
    };
    /**
     * Sets the msdyn_knowledgearticleimage_AsyncOperations property value. 
     * @param value Value to set for the msdyn_knowledgearticleimage_AsyncOperations property.
     */
    public set msdyn_knowledgearticleimage_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_knowledgearticleimage_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_knowledgearticleimage_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_knowledgearticleimage_BulkDeleteFailures() {
        return this._msdyn_knowledgearticleimage_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_knowledgearticleimage_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_knowledgearticleimage_BulkDeleteFailures property.
     */
    public set msdyn_knowledgearticleimage_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_knowledgearticleimage_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_knowledgearticleimage_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_knowledgearticleimage_DuplicateBaseRecord() {
        return this._msdyn_knowledgearticleimage_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_knowledgearticleimage_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_knowledgearticleimage_DuplicateBaseRecord property.
     */
    public set msdyn_knowledgearticleimage_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_knowledgearticleimage_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_knowledgearticleimage_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_knowledgearticleimage_DuplicateMatchingRecord() {
        return this._msdyn_knowledgearticleimage_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_knowledgearticleimage_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_knowledgearticleimage_DuplicateMatchingRecord property.
     */
    public set msdyn_knowledgearticleimage_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_knowledgearticleimage_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_knowledgearticleimage_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get msdyn_knowledgearticleimage_FileAttachments() {
        return this._msdyn_knowledgearticleimage_FileAttachments;
    };
    /**
     * Sets the msdyn_knowledgearticleimage_FileAttachments property value. 
     * @param value Value to set for the msdyn_knowledgearticleimage_FileAttachments property.
     */
    public set msdyn_knowledgearticleimage_FileAttachments(value: Fileattachment[] | undefined) {
        this._msdyn_knowledgearticleimage_FileAttachments = value;
    };
    /**
     * Gets the msdyn_knowledgearticleimage_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_knowledgearticleimage_MailboxTrackingFolders() {
        return this._msdyn_knowledgearticleimage_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_knowledgearticleimage_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_knowledgearticleimage_MailboxTrackingFolders property.
     */
    public set msdyn_knowledgearticleimage_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_knowledgearticleimage_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses() {
        return this._msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_knowledgearticleimage_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_knowledgearticleimage_ProcessSession() {
        return this._msdyn_knowledgearticleimage_ProcessSession;
    };
    /**
     * Sets the msdyn_knowledgearticleimage_ProcessSession property value. 
     * @param value Value to set for the msdyn_knowledgearticleimage_ProcessSession property.
     */
    public set msdyn_knowledgearticleimage_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_knowledgearticleimage_ProcessSession = value;
    };
    /**
     * Gets the msdyn_knowledgearticleimage_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_knowledgearticleimage_SyncErrors() {
        return this._msdyn_knowledgearticleimage_SyncErrors;
    };
    /**
     * Sets the msdyn_knowledgearticleimage_SyncErrors property value. 
     * @param value Value to set for the msdyn_knowledgearticleimage_SyncErrors property.
     */
    public set msdyn_knowledgearticleimage_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_knowledgearticleimage_SyncErrors = value;
    };
    /**
     * Gets the msdyn_knowledgearticleimageid property value. 
     * @returns a string
     */
    public get msdyn_knowledgearticleimageid() {
        return this._msdyn_knowledgearticleimageid;
    };
    /**
     * Sets the msdyn_knowledgearticleimageid property value. 
     * @param value Value to set for the msdyn_knowledgearticleimageid property.
     */
    public set msdyn_knowledgearticleimageid(value: string | undefined) {
        this._msdyn_knowledgearticleimageid = value;
    };
    /**
     * Gets the msdyn_parentknowledgearticleid property value. 
     * @returns a knowledgearticle
     */
    public get msdyn_parentknowledgearticleid() {
        return this._msdyn_parentknowledgearticleid;
    };
    /**
     * Sets the msdyn_parentknowledgearticleid property value. 
     * @param value Value to set for the msdyn_parentknowledgearticleid property.
     */
    public set msdyn_parentknowledgearticleid(value: Knowledgearticle | undefined) {
        this._msdyn_parentknowledgearticleid = value;
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
        writer.writeStringValue("_msdyn_parententityrecordid_value", this._msdyn_parententityrecordid_value);
        writer.writeStringValue("_msdyn_parentknowledgearticleid_value", this._msdyn_parentknowledgearticleid_value);
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
        writer.writeStringValue("msdyn_blobfile", this.msdyn_blobfile);
        writer.writeStringValue("msdyn_blobfile_name", this.msdyn_blobfile_name);
        writer.writeStringValue("msdyn_filename", this.msdyn_filename);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_knowledgearticleimage_AsyncOperations", this.msdyn_knowledgearticleimage_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_knowledgearticleimage_BulkDeleteFailures", this.msdyn_knowledgearticleimage_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_knowledgearticleimage_DuplicateBaseRecord", this.msdyn_knowledgearticleimage_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_knowledgearticleimage_DuplicateMatchingRecord", this.msdyn_knowledgearticleimage_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Fileattachment>("msdyn_knowledgearticleimage_FileAttachments", this.msdyn_knowledgearticleimage_FileAttachments);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_knowledgearticleimage_MailboxTrackingFolders", this.msdyn_knowledgearticleimage_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses", this.msdyn_knowledgearticleimage_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_knowledgearticleimage_ProcessSession", this.msdyn_knowledgearticleimage_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_knowledgearticleimage_SyncErrors", this.msdyn_knowledgearticleimage_SyncErrors);
        writer.writeStringValue("msdyn_knowledgearticleimageid", this.msdyn_knowledgearticleimageid);
        writer.writeObjectValue<Knowledgearticle>("msdyn_parentknowledgearticleid", this.msdyn_parentknowledgearticleid);
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
