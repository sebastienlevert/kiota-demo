import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_aiodtrainingimageFromDiscriminatorValue} from './createMsdyn_aiodtrainingimageFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_aiodtrainingimage, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_aiodimage extends Crmbaseentity implements Parsable {
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
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_aiodimage_Annotations?: Annotation[] | undefined;
    private _msdyn_aiodimage_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_aiodimage_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_aiodimage_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_aiodimage_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_aiodimage_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_aiodimage_msdyn_aiodtrainingimage?: Msdyn_aiodtrainingimage[] | undefined;
    private _msdyn_aiodimage_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_aiodimage_ProcessSession?: Processsession[] | undefined;
    private _msdyn_aiodimage_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_aiodimageid?: string | undefined;
    private _msdyn_checksum?: string | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_metadata?: string | undefined;
    private _msdyn_name?: string | undefined;
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
     * Instantiates a new msdyn_aiodimage and sets the default values.
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
     * Gets the entityimage property value. 
     * @returns a binary
     */
    public get entityimage() {
        return this._entityimage;
    };
    /**
     * Sets the entityimage property value. 
     * @param value Value to set for the entityimage property.
     */
    public set entityimage(value: string | undefined) {
        this._entityimage = value;
    };
    /**
     * Gets the entityimage_timestamp property value. 
     * @returns a int64
     */
    public get entityimage_timestamp() {
        return this._entityimage_timestamp;
    };
    /**
     * Sets the entityimage_timestamp property value. 
     * @param value Value to set for the entityimage_timestamp property.
     */
    public set entityimage_timestamp(value: number | undefined) {
        this._entityimage_timestamp = value;
    };
    /**
     * Gets the entityimage_url property value. 
     * @returns a string
     */
    public get entityimage_url() {
        return this._entityimage_url;
    };
    /**
     * Sets the entityimage_url property value. 
     * @param value Value to set for the entityimage_url property.
     */
    public set entityimage_url(value: string | undefined) {
        this._entityimage_url = value;
    };
    /**
     * Gets the entityimageid property value. 
     * @returns a string
     */
    public get entityimageid() {
        return this._entityimageid;
    };
    /**
     * Sets the entityimageid property value. 
     * @param value Value to set for the entityimageid property.
     */
    public set entityimageid(value: string | undefined) {
        this._entityimageid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_aiodimage)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_aiodimage)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_aiodimage)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_aiodimage)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_aiodimage)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_aiodimage)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_aiodimage)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_aiodimage)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_aiodimage).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_aiodimage).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_aiodimage).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "entityimage": (o, n) => { (o as unknown as Msdyn_aiodimage).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Msdyn_aiodimage).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Msdyn_aiodimage).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Msdyn_aiodimage).entityimageid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_aiodimage).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_aiodimage).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_aiodimage).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_aiodimage).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_aiodimage_Annotations": (o, n) => { (o as unknown as Msdyn_aiodimage).msdyn_aiodimage_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_aiodimage_AsyncOperations": (o, n) => { (o as unknown as Msdyn_aiodimage).msdyn_aiodimage_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_aiodimage_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_aiodimage).msdyn_aiodimage_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_aiodimage_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_aiodimage).msdyn_aiodimage_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_aiodimage_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_aiodimage).msdyn_aiodimage_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_aiodimage_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_aiodimage).msdyn_aiodimage_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_aiodimage_msdyn_aiodtrainingimage": (o, n) => { (o as unknown as Msdyn_aiodimage).msdyn_aiodimage_msdyn_aiodtrainingimage = n.getCollectionOfObjectValues<Msdyn_aiodtrainingimage>(createMsdyn_aiodtrainingimageFromDiscriminatorValue); },
            "msdyn_aiodimage_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_aiodimage).msdyn_aiodimage_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_aiodimage_ProcessSession": (o, n) => { (o as unknown as Msdyn_aiodimage).msdyn_aiodimage_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_aiodimage_SyncErrors": (o, n) => { (o as unknown as Msdyn_aiodimage).msdyn_aiodimage_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_aiodimageid": (o, n) => { (o as unknown as Msdyn_aiodimage).msdyn_aiodimageid = n.getStringValue(); },
            "msdyn_checksum": (o, n) => { (o as unknown as Msdyn_aiodimage).msdyn_checksum = n.getStringValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_aiodimage).msdyn_description = n.getStringValue(); },
            "msdyn_metadata": (o, n) => { (o as unknown as Msdyn_aiodimage).msdyn_metadata = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_aiodimage).msdyn_name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_aiodimage).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_aiodimage).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_aiodimage).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_aiodimage).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_aiodimage).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_aiodimage).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_aiodimage).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_aiodimage).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_aiodimage).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_aiodimage).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_aiodimage_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_aiodimage_Annotations() {
        return this._msdyn_aiodimage_Annotations;
    };
    /**
     * Sets the msdyn_aiodimage_Annotations property value. 
     * @param value Value to set for the msdyn_aiodimage_Annotations property.
     */
    public set msdyn_aiodimage_Annotations(value: Annotation[] | undefined) {
        this._msdyn_aiodimage_Annotations = value;
    };
    /**
     * Gets the msdyn_aiodimage_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_aiodimage_AsyncOperations() {
        return this._msdyn_aiodimage_AsyncOperations;
    };
    /**
     * Sets the msdyn_aiodimage_AsyncOperations property value. 
     * @param value Value to set for the msdyn_aiodimage_AsyncOperations property.
     */
    public set msdyn_aiodimage_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_aiodimage_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_aiodimage_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_aiodimage_BulkDeleteFailures() {
        return this._msdyn_aiodimage_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_aiodimage_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_aiodimage_BulkDeleteFailures property.
     */
    public set msdyn_aiodimage_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_aiodimage_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_aiodimage_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_aiodimage_DuplicateBaseRecord() {
        return this._msdyn_aiodimage_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_aiodimage_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_aiodimage_DuplicateBaseRecord property.
     */
    public set msdyn_aiodimage_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_aiodimage_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_aiodimage_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_aiodimage_DuplicateMatchingRecord() {
        return this._msdyn_aiodimage_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_aiodimage_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_aiodimage_DuplicateMatchingRecord property.
     */
    public set msdyn_aiodimage_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_aiodimage_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_aiodimage_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_aiodimage_MailboxTrackingFolders() {
        return this._msdyn_aiodimage_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_aiodimage_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_aiodimage_MailboxTrackingFolders property.
     */
    public set msdyn_aiodimage_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_aiodimage_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_aiodimage_msdyn_aiodtrainingimage property value. 
     * @returns a msdyn_aiodtrainingimage
     */
    public get msdyn_aiodimage_msdyn_aiodtrainingimage() {
        return this._msdyn_aiodimage_msdyn_aiodtrainingimage;
    };
    /**
     * Sets the msdyn_aiodimage_msdyn_aiodtrainingimage property value. 
     * @param value Value to set for the msdyn_aiodimage_msdyn_aiodtrainingimage property.
     */
    public set msdyn_aiodimage_msdyn_aiodtrainingimage(value: Msdyn_aiodtrainingimage[] | undefined) {
        this._msdyn_aiodimage_msdyn_aiodtrainingimage = value;
    };
    /**
     * Gets the msdyn_aiodimage_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_aiodimage_PrincipalObjectAttributeAccesses() {
        return this._msdyn_aiodimage_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_aiodimage_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_aiodimage_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_aiodimage_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_aiodimage_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_aiodimage_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_aiodimage_ProcessSession() {
        return this._msdyn_aiodimage_ProcessSession;
    };
    /**
     * Sets the msdyn_aiodimage_ProcessSession property value. 
     * @param value Value to set for the msdyn_aiodimage_ProcessSession property.
     */
    public set msdyn_aiodimage_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_aiodimage_ProcessSession = value;
    };
    /**
     * Gets the msdyn_aiodimage_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_aiodimage_SyncErrors() {
        return this._msdyn_aiodimage_SyncErrors;
    };
    /**
     * Sets the msdyn_aiodimage_SyncErrors property value. 
     * @param value Value to set for the msdyn_aiodimage_SyncErrors property.
     */
    public set msdyn_aiodimage_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_aiodimage_SyncErrors = value;
    };
    /**
     * Gets the msdyn_aiodimageid property value. 
     * @returns a string
     */
    public get msdyn_aiodimageid() {
        return this._msdyn_aiodimageid;
    };
    /**
     * Sets the msdyn_aiodimageid property value. 
     * @param value Value to set for the msdyn_aiodimageid property.
     */
    public set msdyn_aiodimageid(value: string | undefined) {
        this._msdyn_aiodimageid = value;
    };
    /**
     * Gets the msdyn_checksum property value. 
     * @returns a string
     */
    public get msdyn_checksum() {
        return this._msdyn_checksum;
    };
    /**
     * Sets the msdyn_checksum property value. 
     * @param value Value to set for the msdyn_checksum property.
     */
    public set msdyn_checksum(value: string | undefined) {
        this._msdyn_checksum = value;
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
     * Gets the msdyn_metadata property value. 
     * @returns a string
     */
    public get msdyn_metadata() {
        return this._msdyn_metadata;
    };
    /**
     * Sets the msdyn_metadata property value. 
     * @param value Value to set for the msdyn_metadata property.
     */
    public set msdyn_metadata(value: string | undefined) {
        this._msdyn_metadata = value;
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
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_aiodimage_Annotations", this.msdyn_aiodimage_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_aiodimage_AsyncOperations", this.msdyn_aiodimage_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_aiodimage_BulkDeleteFailures", this.msdyn_aiodimage_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_aiodimage_DuplicateBaseRecord", this.msdyn_aiodimage_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_aiodimage_DuplicateMatchingRecord", this.msdyn_aiodimage_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_aiodimage_MailboxTrackingFolders", this.msdyn_aiodimage_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_aiodtrainingimage>("msdyn_aiodimage_msdyn_aiodtrainingimage", this.msdyn_aiodimage_msdyn_aiodtrainingimage);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_aiodimage_PrincipalObjectAttributeAccesses", this.msdyn_aiodimage_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_aiodimage_ProcessSession", this.msdyn_aiodimage_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_aiodimage_SyncErrors", this.msdyn_aiodimage_SyncErrors);
        writer.writeStringValue("msdyn_aiodimageid", this.msdyn_aiodimageid);
        writer.writeStringValue("msdyn_checksum", this.msdyn_checksum);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeStringValue("msdyn_metadata", this.msdyn_metadata);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
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
