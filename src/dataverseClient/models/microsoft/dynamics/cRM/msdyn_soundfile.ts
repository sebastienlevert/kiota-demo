import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_personalsoundsettingFromDiscriminatorValue} from './createMsdyn_personalsoundsettingFromDiscriminatorValue';
import {createMsdyn_soundnotificationsettingFromDiscriminatorValue} from './createMsdyn_soundnotificationsettingFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Fileattachment, Mailboxtrackingfolder, Msdyn_personalsoundsetting, Msdyn_soundnotificationsetting, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_soundfile extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_Personalsoundsetting_msdyn_linksoun?: Msdyn_personalsoundsetting[] | undefined;
    private _msdyn_soundfile_Annotations?: Annotation[] | undefined;
    private _msdyn_soundfile_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_soundfile_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_soundfile_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_soundfile_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_soundfile_FileAttachments?: Fileattachment[] | undefined;
    private _msdyn_soundfile_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_soundfile_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_soundfile_ProcessSession?: Processsession[] | undefined;
    private _msdyn_soundfile_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_soundfileid?: string | undefined;
    private _msdyn_soundnotificationsetting_linksoundf?: Msdyn_soundnotificationsetting[] | undefined;
    private _msdyn_uploadsoundfile?: string | undefined;
    private _msdyn_uploadsoundfile_name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
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
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Instantiates a new msdyn_soundfile and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_soundfile)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_soundfile)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_soundfile)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_soundfile)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_soundfile)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_soundfile).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_soundfile).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_soundfile).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_soundfile).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_soundfile).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_soundfile).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_soundfile).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_soundfile).msdyn_name = n.getStringValue(); },
            "msdyn_Personalsoundsetting_msdyn_linksoun": (o, n) => { (o as unknown as Msdyn_soundfile).msdyn_Personalsoundsetting_msdyn_linksoun = n.getCollectionOfObjectValues<Msdyn_personalsoundsetting>(createMsdyn_personalsoundsettingFromDiscriminatorValue); },
            "msdyn_soundfile_Annotations": (o, n) => { (o as unknown as Msdyn_soundfile).msdyn_soundfile_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_soundfile_AsyncOperations": (o, n) => { (o as unknown as Msdyn_soundfile).msdyn_soundfile_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_soundfile_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_soundfile).msdyn_soundfile_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_soundfile_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_soundfile).msdyn_soundfile_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_soundfile_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_soundfile).msdyn_soundfile_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_soundfile_FileAttachments": (o, n) => { (o as unknown as Msdyn_soundfile).msdyn_soundfile_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "msdyn_soundfile_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_soundfile).msdyn_soundfile_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_soundfile_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_soundfile).msdyn_soundfile_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_soundfile_ProcessSession": (o, n) => { (o as unknown as Msdyn_soundfile).msdyn_soundfile_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_soundfile_SyncErrors": (o, n) => { (o as unknown as Msdyn_soundfile).msdyn_soundfile_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_soundfileid": (o, n) => { (o as unknown as Msdyn_soundfile).msdyn_soundfileid = n.getStringValue(); },
            "msdyn_soundnotificationsetting_linksoundf": (o, n) => { (o as unknown as Msdyn_soundfile).msdyn_soundnotificationsetting_linksoundf = n.getCollectionOfObjectValues<Msdyn_soundnotificationsetting>(createMsdyn_soundnotificationsettingFromDiscriminatorValue); },
            "msdyn_uploadsoundfile": (o, n) => { (o as unknown as Msdyn_soundfile).msdyn_uploadsoundfile = n.getStringValue(); },
            "msdyn_uploadsoundfile_name": (o, n) => { (o as unknown as Msdyn_soundfile).msdyn_uploadsoundfile_name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_soundfile).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_soundfile).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_soundfile).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_soundfile).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_soundfile).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_soundfile).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_soundfile).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_Personalsoundsetting_msdyn_linksoun property value. 
     * @returns a msdyn_personalsoundsetting
     */
    public get msdyn_Personalsoundsetting_msdyn_linksoun() {
        return this._msdyn_Personalsoundsetting_msdyn_linksoun;
    };
    /**
     * Sets the msdyn_Personalsoundsetting_msdyn_linksoun property value. 
     * @param value Value to set for the msdyn_Personalsoundsetting_msdyn_linksoun property.
     */
    public set msdyn_Personalsoundsetting_msdyn_linksoun(value: Msdyn_personalsoundsetting[] | undefined) {
        this._msdyn_Personalsoundsetting_msdyn_linksoun = value;
    };
    /**
     * Gets the msdyn_soundfile_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_soundfile_Annotations() {
        return this._msdyn_soundfile_Annotations;
    };
    /**
     * Sets the msdyn_soundfile_Annotations property value. 
     * @param value Value to set for the msdyn_soundfile_Annotations property.
     */
    public set msdyn_soundfile_Annotations(value: Annotation[] | undefined) {
        this._msdyn_soundfile_Annotations = value;
    };
    /**
     * Gets the msdyn_soundfile_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_soundfile_AsyncOperations() {
        return this._msdyn_soundfile_AsyncOperations;
    };
    /**
     * Sets the msdyn_soundfile_AsyncOperations property value. 
     * @param value Value to set for the msdyn_soundfile_AsyncOperations property.
     */
    public set msdyn_soundfile_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_soundfile_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_soundfile_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_soundfile_BulkDeleteFailures() {
        return this._msdyn_soundfile_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_soundfile_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_soundfile_BulkDeleteFailures property.
     */
    public set msdyn_soundfile_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_soundfile_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_soundfile_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_soundfile_DuplicateBaseRecord() {
        return this._msdyn_soundfile_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_soundfile_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_soundfile_DuplicateBaseRecord property.
     */
    public set msdyn_soundfile_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_soundfile_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_soundfile_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_soundfile_DuplicateMatchingRecord() {
        return this._msdyn_soundfile_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_soundfile_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_soundfile_DuplicateMatchingRecord property.
     */
    public set msdyn_soundfile_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_soundfile_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_soundfile_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get msdyn_soundfile_FileAttachments() {
        return this._msdyn_soundfile_FileAttachments;
    };
    /**
     * Sets the msdyn_soundfile_FileAttachments property value. 
     * @param value Value to set for the msdyn_soundfile_FileAttachments property.
     */
    public set msdyn_soundfile_FileAttachments(value: Fileattachment[] | undefined) {
        this._msdyn_soundfile_FileAttachments = value;
    };
    /**
     * Gets the msdyn_soundfile_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_soundfile_MailboxTrackingFolders() {
        return this._msdyn_soundfile_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_soundfile_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_soundfile_MailboxTrackingFolders property.
     */
    public set msdyn_soundfile_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_soundfile_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_soundfile_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_soundfile_PrincipalObjectAttributeAccesses() {
        return this._msdyn_soundfile_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_soundfile_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_soundfile_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_soundfile_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_soundfile_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_soundfile_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_soundfile_ProcessSession() {
        return this._msdyn_soundfile_ProcessSession;
    };
    /**
     * Sets the msdyn_soundfile_ProcessSession property value. 
     * @param value Value to set for the msdyn_soundfile_ProcessSession property.
     */
    public set msdyn_soundfile_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_soundfile_ProcessSession = value;
    };
    /**
     * Gets the msdyn_soundfile_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_soundfile_SyncErrors() {
        return this._msdyn_soundfile_SyncErrors;
    };
    /**
     * Sets the msdyn_soundfile_SyncErrors property value. 
     * @param value Value to set for the msdyn_soundfile_SyncErrors property.
     */
    public set msdyn_soundfile_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_soundfile_SyncErrors = value;
    };
    /**
     * Gets the msdyn_soundfileid property value. 
     * @returns a string
     */
    public get msdyn_soundfileid() {
        return this._msdyn_soundfileid;
    };
    /**
     * Sets the msdyn_soundfileid property value. 
     * @param value Value to set for the msdyn_soundfileid property.
     */
    public set msdyn_soundfileid(value: string | undefined) {
        this._msdyn_soundfileid = value;
    };
    /**
     * Gets the msdyn_soundnotificationsetting_linksoundf property value. 
     * @returns a msdyn_soundnotificationsetting
     */
    public get msdyn_soundnotificationsetting_linksoundf() {
        return this._msdyn_soundnotificationsetting_linksoundf;
    };
    /**
     * Sets the msdyn_soundnotificationsetting_linksoundf property value. 
     * @param value Value to set for the msdyn_soundnotificationsetting_linksoundf property.
     */
    public set msdyn_soundnotificationsetting_linksoundf(value: Msdyn_soundnotificationsetting[] | undefined) {
        this._msdyn_soundnotificationsetting_linksoundf = value;
    };
    /**
     * Gets the msdyn_uploadsoundfile property value. 
     * @returns a binary
     */
    public get msdyn_uploadsoundfile() {
        return this._msdyn_uploadsoundfile;
    };
    /**
     * Sets the msdyn_uploadsoundfile property value. 
     * @param value Value to set for the msdyn_uploadsoundfile property.
     */
    public set msdyn_uploadsoundfile(value: string | undefined) {
        this._msdyn_uploadsoundfile = value;
    };
    /**
     * Gets the msdyn_uploadsoundfile_name property value. 
     * @returns a string
     */
    public get msdyn_uploadsoundfile_name() {
        return this._msdyn_uploadsoundfile_name;
    };
    /**
     * Sets the msdyn_uploadsoundfile_name property value. 
     * @param value Value to set for the msdyn_uploadsoundfile_name property.
     */
    public set msdyn_uploadsoundfile_name(value: string | undefined) {
        this._msdyn_uploadsoundfile_name = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
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
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Msdyn_personalsoundsetting>("msdyn_Personalsoundsetting_msdyn_linksoun", this.msdyn_Personalsoundsetting_msdyn_linksoun);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_soundfile_Annotations", this.msdyn_soundfile_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_soundfile_AsyncOperations", this.msdyn_soundfile_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_soundfile_BulkDeleteFailures", this.msdyn_soundfile_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_soundfile_DuplicateBaseRecord", this.msdyn_soundfile_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_soundfile_DuplicateMatchingRecord", this.msdyn_soundfile_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Fileattachment>("msdyn_soundfile_FileAttachments", this.msdyn_soundfile_FileAttachments);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_soundfile_MailboxTrackingFolders", this.msdyn_soundfile_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_soundfile_PrincipalObjectAttributeAccesses", this.msdyn_soundfile_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_soundfile_ProcessSession", this.msdyn_soundfile_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_soundfile_SyncErrors", this.msdyn_soundfile_SyncErrors);
        writer.writeStringValue("msdyn_soundfileid", this.msdyn_soundfileid);
        writer.writeCollectionOfObjectValues<Msdyn_soundnotificationsetting>("msdyn_soundnotificationsetting_linksoundf", this.msdyn_soundnotificationsetting_linksoundf);
        writer.writeStringValue("msdyn_uploadsoundfile", this.msdyn_uploadsoundfile);
        writer.writeStringValue("msdyn_uploadsoundfile_name", this.msdyn_uploadsoundfile_name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
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
