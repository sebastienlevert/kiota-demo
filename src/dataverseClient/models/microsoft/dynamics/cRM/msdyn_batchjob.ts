import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_batchjob extends Crmbaseentity implements Parsable {
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
    private _msdyn_batchjob_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_batchjob_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_batchjob_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_batchjob_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_batchjob_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_batchjob_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_batchjob_ProcessSession?: Processsession[] | undefined;
    private _msdyn_batchjob_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_batchjobid?: string | undefined;
    private _msdyn_data?: string | undefined;
    private _msdyn_data1?: string | undefined;
    private _msdyn_frequency?: number | undefined;
    private _msdyn_isactive?: boolean | undefined;
    private _msdyn_jobtype?: number | undefined;
    private _msdyn_lastrundate?: Date | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_operationtype?: number | undefined;
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
     * Instantiates a new msdyn_batchjob and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_batchjob)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_batchjob)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_batchjob)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_batchjob)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_batchjob)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_batchjob).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_batchjob).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_batchjob).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_batchjob).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_batchjob).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_batchjob).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_batchjob).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_batchjob_AsyncOperations": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_batchjob_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_batchjob_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_batchjob_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_batchjob_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_batchjob_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_batchjob_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_batchjob_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_batchjob_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_batchjob_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_batchjob_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_batchjob_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_batchjob_ProcessSession": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_batchjob_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_batchjob_SyncErrors": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_batchjob_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_batchjobid": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_batchjobid = n.getStringValue(); },
            "msdyn_data": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_data = n.getStringValue(); },
            "msdyn_data1": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_data1 = n.getStringValue(); },
            "msdyn_frequency": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_frequency = n.getNumberValue(); },
            "msdyn_isactive": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_isactive = n.getBooleanValue(); },
            "msdyn_jobtype": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_jobtype = n.getNumberValue(); },
            "msdyn_lastrundate": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_lastrundate = n.getDateValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_name = n.getStringValue(); },
            "msdyn_operationtype": (o, n) => { (o as unknown as Msdyn_batchjob).msdyn_operationtype = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_batchjob).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_batchjob).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_batchjob).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_batchjob).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_batchjob).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_batchjob).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_batchjob).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_batchjob_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_batchjob_AsyncOperations() {
        return this._msdyn_batchjob_AsyncOperations;
    };
    /**
     * Sets the msdyn_batchjob_AsyncOperations property value. 
     * @param value Value to set for the msdyn_batchjob_AsyncOperations property.
     */
    public set msdyn_batchjob_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_batchjob_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_batchjob_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_batchjob_BulkDeleteFailures() {
        return this._msdyn_batchjob_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_batchjob_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_batchjob_BulkDeleteFailures property.
     */
    public set msdyn_batchjob_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_batchjob_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_batchjob_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_batchjob_DuplicateBaseRecord() {
        return this._msdyn_batchjob_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_batchjob_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_batchjob_DuplicateBaseRecord property.
     */
    public set msdyn_batchjob_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_batchjob_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_batchjob_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_batchjob_DuplicateMatchingRecord() {
        return this._msdyn_batchjob_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_batchjob_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_batchjob_DuplicateMatchingRecord property.
     */
    public set msdyn_batchjob_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_batchjob_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_batchjob_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_batchjob_MailboxTrackingFolders() {
        return this._msdyn_batchjob_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_batchjob_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_batchjob_MailboxTrackingFolders property.
     */
    public set msdyn_batchjob_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_batchjob_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_batchjob_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_batchjob_PrincipalObjectAttributeAccesses() {
        return this._msdyn_batchjob_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_batchjob_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_batchjob_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_batchjob_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_batchjob_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_batchjob_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_batchjob_ProcessSession() {
        return this._msdyn_batchjob_ProcessSession;
    };
    /**
     * Sets the msdyn_batchjob_ProcessSession property value. 
     * @param value Value to set for the msdyn_batchjob_ProcessSession property.
     */
    public set msdyn_batchjob_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_batchjob_ProcessSession = value;
    };
    /**
     * Gets the msdyn_batchjob_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_batchjob_SyncErrors() {
        return this._msdyn_batchjob_SyncErrors;
    };
    /**
     * Sets the msdyn_batchjob_SyncErrors property value. 
     * @param value Value to set for the msdyn_batchjob_SyncErrors property.
     */
    public set msdyn_batchjob_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_batchjob_SyncErrors = value;
    };
    /**
     * Gets the msdyn_batchjobid property value. 
     * @returns a string
     */
    public get msdyn_batchjobid() {
        return this._msdyn_batchjobid;
    };
    /**
     * Sets the msdyn_batchjobid property value. 
     * @param value Value to set for the msdyn_batchjobid property.
     */
    public set msdyn_batchjobid(value: string | undefined) {
        this._msdyn_batchjobid = value;
    };
    /**
     * Gets the msdyn_data property value. 
     * @returns a string
     */
    public get msdyn_data() {
        return this._msdyn_data;
    };
    /**
     * Sets the msdyn_data property value. 
     * @param value Value to set for the msdyn_data property.
     */
    public set msdyn_data(value: string | undefined) {
        this._msdyn_data = value;
    };
    /**
     * Gets the msdyn_data1 property value. 
     * @returns a string
     */
    public get msdyn_data1() {
        return this._msdyn_data1;
    };
    /**
     * Sets the msdyn_data1 property value. 
     * @param value Value to set for the msdyn_data1 property.
     */
    public set msdyn_data1(value: string | undefined) {
        this._msdyn_data1 = value;
    };
    /**
     * Gets the msdyn_frequency property value. 
     * @returns a integer
     */
    public get msdyn_frequency() {
        return this._msdyn_frequency;
    };
    /**
     * Sets the msdyn_frequency property value. 
     * @param value Value to set for the msdyn_frequency property.
     */
    public set msdyn_frequency(value: number | undefined) {
        this._msdyn_frequency = value;
    };
    /**
     * Gets the msdyn_isactive property value. 
     * @returns a boolean
     */
    public get msdyn_isactive() {
        return this._msdyn_isactive;
    };
    /**
     * Sets the msdyn_isactive property value. 
     * @param value Value to set for the msdyn_isactive property.
     */
    public set msdyn_isactive(value: boolean | undefined) {
        this._msdyn_isactive = value;
    };
    /**
     * Gets the msdyn_jobtype property value. 
     * @returns a integer
     */
    public get msdyn_jobtype() {
        return this._msdyn_jobtype;
    };
    /**
     * Sets the msdyn_jobtype property value. 
     * @param value Value to set for the msdyn_jobtype property.
     */
    public set msdyn_jobtype(value: number | undefined) {
        this._msdyn_jobtype = value;
    };
    /**
     * Gets the msdyn_lastrundate property value. 
     * @returns a Date
     */
    public get msdyn_lastrundate() {
        return this._msdyn_lastrundate;
    };
    /**
     * Sets the msdyn_lastrundate property value. 
     * @param value Value to set for the msdyn_lastrundate property.
     */
    public set msdyn_lastrundate(value: Date | undefined) {
        this._msdyn_lastrundate = value;
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
     * Gets the msdyn_operationtype property value. 
     * @returns a integer
     */
    public get msdyn_operationtype() {
        return this._msdyn_operationtype;
    };
    /**
     * Sets the msdyn_operationtype property value. 
     * @param value Value to set for the msdyn_operationtype property.
     */
    public set msdyn_operationtype(value: number | undefined) {
        this._msdyn_operationtype = value;
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
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_batchjob_AsyncOperations", this.msdyn_batchjob_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_batchjob_BulkDeleteFailures", this.msdyn_batchjob_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_batchjob_DuplicateBaseRecord", this.msdyn_batchjob_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_batchjob_DuplicateMatchingRecord", this.msdyn_batchjob_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_batchjob_MailboxTrackingFolders", this.msdyn_batchjob_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_batchjob_PrincipalObjectAttributeAccesses", this.msdyn_batchjob_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_batchjob_ProcessSession", this.msdyn_batchjob_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_batchjob_SyncErrors", this.msdyn_batchjob_SyncErrors);
        writer.writeStringValue("msdyn_batchjobid", this.msdyn_batchjobid);
        writer.writeStringValue("msdyn_data", this.msdyn_data);
        writer.writeStringValue("msdyn_data1", this.msdyn_data1);
        writer.writeNumberValue("msdyn_frequency", this.msdyn_frequency);
        writer.writeBooleanValue("msdyn_isactive", this.msdyn_isactive);
        writer.writeNumberValue("msdyn_jobtype", this.msdyn_jobtype);
        writer.writeDateValue("msdyn_lastrundate", this.msdyn_lastrundate);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_operationtype", this.msdyn_operationtype);
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
