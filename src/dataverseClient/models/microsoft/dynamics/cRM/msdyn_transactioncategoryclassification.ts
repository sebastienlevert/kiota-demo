import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_transactioncategoryFromDiscriminatorValue} from './createMsdyn_transactioncategoryFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_transactioncategory, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_transactioncategoryclassification extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_transactioncategory_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_transactioncategory?: Msdyn_transactioncategory | undefined;
    private _msdyn_transactioncategoryclassification_Annotations?: Annotation[] | undefined;
    private _msdyn_transactioncategoryclassification_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_transactioncategoryclassification_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_transactioncategoryclassification_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_transactioncategoryclassification_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_transactioncategoryclassification_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_transactioncategoryclassification_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_transactioncategoryclassification_ProcessSession?: Processsession[] | undefined;
    private _msdyn_transactioncategoryclassification_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_transactioncategoryclassificationid?: string | undefined;
    private _msdyn_transactionclassification?: number | undefined;
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
     * Gets the _msdyn_transactioncategory_value property value. 
     * @returns a string
     */
    public get _msdyn_transactioncategory_value() {
        return this.__msdyn_transactioncategory_value;
    };
    /**
     * Sets the _msdyn_transactioncategory_value property value. 
     * @param value Value to set for the _msdyn_transactioncategory_value property.
     */
    public set _msdyn_transactioncategory_value(value: string | undefined) {
        this.__msdyn_transactioncategory_value = value;
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
     * Instantiates a new msdyn_transactioncategoryclassification and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_transactioncategory_value": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification)._msdyn_transactioncategory_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).msdyn_name = n.getStringValue(); },
            "msdyn_transactioncategory": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).msdyn_transactioncategory = n.getObjectValue<Msdyn_transactioncategory>(createMsdyn_transactioncategoryFromDiscriminatorValue); },
            "msdyn_transactioncategoryclassification_Annotations": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).msdyn_transactioncategoryclassification_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_transactioncategoryclassification_AsyncOperations": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).msdyn_transactioncategoryclassification_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_transactioncategoryclassification_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).msdyn_transactioncategoryclassification_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_transactioncategoryclassification_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).msdyn_transactioncategoryclassification_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_transactioncategoryclassification_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).msdyn_transactioncategoryclassification_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_transactioncategoryclassification_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).msdyn_transactioncategoryclassification_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_transactioncategoryclassification_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).msdyn_transactioncategoryclassification_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_transactioncategoryclassification_ProcessSession": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).msdyn_transactioncategoryclassification_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_transactioncategoryclassification_SyncErrors": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).msdyn_transactioncategoryclassification_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_transactioncategoryclassificationid": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).msdyn_transactioncategoryclassificationid = n.getStringValue(); },
            "msdyn_transactionclassification": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).msdyn_transactionclassification = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_transactioncategoryclassification).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_transactioncategory property value. 
     * @returns a msdyn_transactioncategory
     */
    public get msdyn_transactioncategory() {
        return this._msdyn_transactioncategory;
    };
    /**
     * Sets the msdyn_transactioncategory property value. 
     * @param value Value to set for the msdyn_transactioncategory property.
     */
    public set msdyn_transactioncategory(value: Msdyn_transactioncategory | undefined) {
        this._msdyn_transactioncategory = value;
    };
    /**
     * Gets the msdyn_transactioncategoryclassification_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_transactioncategoryclassification_Annotations() {
        return this._msdyn_transactioncategoryclassification_Annotations;
    };
    /**
     * Sets the msdyn_transactioncategoryclassification_Annotations property value. 
     * @param value Value to set for the msdyn_transactioncategoryclassification_Annotations property.
     */
    public set msdyn_transactioncategoryclassification_Annotations(value: Annotation[] | undefined) {
        this._msdyn_transactioncategoryclassification_Annotations = value;
    };
    /**
     * Gets the msdyn_transactioncategoryclassification_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_transactioncategoryclassification_AsyncOperations() {
        return this._msdyn_transactioncategoryclassification_AsyncOperations;
    };
    /**
     * Sets the msdyn_transactioncategoryclassification_AsyncOperations property value. 
     * @param value Value to set for the msdyn_transactioncategoryclassification_AsyncOperations property.
     */
    public set msdyn_transactioncategoryclassification_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_transactioncategoryclassification_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_transactioncategoryclassification_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_transactioncategoryclassification_BulkDeleteFailures() {
        return this._msdyn_transactioncategoryclassification_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_transactioncategoryclassification_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_transactioncategoryclassification_BulkDeleteFailures property.
     */
    public set msdyn_transactioncategoryclassification_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_transactioncategoryclassification_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_transactioncategoryclassification_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_transactioncategoryclassification_DuplicateBaseRecord() {
        return this._msdyn_transactioncategoryclassification_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_transactioncategoryclassification_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_transactioncategoryclassification_DuplicateBaseRecord property.
     */
    public set msdyn_transactioncategoryclassification_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_transactioncategoryclassification_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_transactioncategoryclassification_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_transactioncategoryclassification_DuplicateMatchingRecord() {
        return this._msdyn_transactioncategoryclassification_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_transactioncategoryclassification_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_transactioncategoryclassification_DuplicateMatchingRecord property.
     */
    public set msdyn_transactioncategoryclassification_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_transactioncategoryclassification_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_transactioncategoryclassification_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_transactioncategoryclassification_MailboxTrackingFolders() {
        return this._msdyn_transactioncategoryclassification_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_transactioncategoryclassification_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_transactioncategoryclassification_MailboxTrackingFolders property.
     */
    public set msdyn_transactioncategoryclassification_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_transactioncategoryclassification_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_transactioncategoryclassification_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_transactioncategoryclassification_PrincipalObjectAttributeAccesses() {
        return this._msdyn_transactioncategoryclassification_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_transactioncategoryclassification_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_transactioncategoryclassification_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_transactioncategoryclassification_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_transactioncategoryclassification_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_transactioncategoryclassification_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_transactioncategoryclassification_ProcessSession() {
        return this._msdyn_transactioncategoryclassification_ProcessSession;
    };
    /**
     * Sets the msdyn_transactioncategoryclassification_ProcessSession property value. 
     * @param value Value to set for the msdyn_transactioncategoryclassification_ProcessSession property.
     */
    public set msdyn_transactioncategoryclassification_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_transactioncategoryclassification_ProcessSession = value;
    };
    /**
     * Gets the msdyn_transactioncategoryclassification_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_transactioncategoryclassification_SyncErrors() {
        return this._msdyn_transactioncategoryclassification_SyncErrors;
    };
    /**
     * Sets the msdyn_transactioncategoryclassification_SyncErrors property value. 
     * @param value Value to set for the msdyn_transactioncategoryclassification_SyncErrors property.
     */
    public set msdyn_transactioncategoryclassification_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_transactioncategoryclassification_SyncErrors = value;
    };
    /**
     * Gets the msdyn_transactioncategoryclassificationid property value. 
     * @returns a string
     */
    public get msdyn_transactioncategoryclassificationid() {
        return this._msdyn_transactioncategoryclassificationid;
    };
    /**
     * Sets the msdyn_transactioncategoryclassificationid property value. 
     * @param value Value to set for the msdyn_transactioncategoryclassificationid property.
     */
    public set msdyn_transactioncategoryclassificationid(value: string | undefined) {
        this._msdyn_transactioncategoryclassificationid = value;
    };
    /**
     * Gets the msdyn_transactionclassification property value. 
     * @returns a integer
     */
    public get msdyn_transactionclassification() {
        return this._msdyn_transactionclassification;
    };
    /**
     * Sets the msdyn_transactionclassification property value. 
     * @param value Value to set for the msdyn_transactionclassification property.
     */
    public set msdyn_transactionclassification(value: number | undefined) {
        this._msdyn_transactionclassification = value;
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
        writer.writeStringValue("_msdyn_transactioncategory_value", this._msdyn_transactioncategory_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_transactioncategory>("msdyn_transactioncategory", this.msdyn_transactioncategory);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_transactioncategoryclassification_Annotations", this.msdyn_transactioncategoryclassification_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_transactioncategoryclassification_AsyncOperations", this.msdyn_transactioncategoryclassification_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_transactioncategoryclassification_BulkDeleteFailures", this.msdyn_transactioncategoryclassification_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_transactioncategoryclassification_DuplicateBaseRecord", this.msdyn_transactioncategoryclassification_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_transactioncategoryclassification_DuplicateMatchingRecord", this.msdyn_transactioncategoryclassification_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_transactioncategoryclassification_MailboxTrackingFolders", this.msdyn_transactioncategoryclassification_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_transactioncategoryclassification_PrincipalObjectAttributeAccesses", this.msdyn_transactioncategoryclassification_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_transactioncategoryclassification_ProcessSession", this.msdyn_transactioncategoryclassification_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_transactioncategoryclassification_SyncErrors", this.msdyn_transactioncategoryclassification_SyncErrors);
        writer.writeStringValue("msdyn_transactioncategoryclassificationid", this.msdyn_transactioncategoryclassificationid);
        writer.writeNumberValue("msdyn_transactionclassification", this.msdyn_transactionclassification);
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
