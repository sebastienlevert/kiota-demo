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

export class Msdyn_geolocationtracking extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_userid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_date?: Date | undefined;
    private _msdyn_geolocationtracking_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_geolocationtracking_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_geolocationtracking_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_geolocationtracking_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_geolocationtracking_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_geolocationtracking_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_geolocationtracking_ProcessSession?: Processsession[] | undefined;
    private _msdyn_geolocationtracking_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_geolocationtrackingid?: string | undefined;
    private _msdyn_latitude?: number | undefined;
    private _msdyn_longitude?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_UserId?: Systemuser | undefined;
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
     * Gets the _msdyn_userid_value property value. 
     * @returns a string
     */
    public get _msdyn_userid_value() {
        return this.__msdyn_userid_value;
    };
    /**
     * Sets the _msdyn_userid_value property value. 
     * @param value Value to set for the _msdyn_userid_value property.
     */
    public set _msdyn_userid_value(value: string | undefined) {
        this.__msdyn_userid_value = value;
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
     * Instantiates a new msdyn_geolocationtracking and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_geolocationtracking)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_geolocationtracking)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_geolocationtracking)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_geolocationtracking)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_userid_value": (o, n) => { (o as unknown as Msdyn_geolocationtracking)._msdyn_userid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_geolocationtracking)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_geolocationtracking).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_geolocationtracking).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_geolocationtracking).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_geolocationtracking).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_geolocationtracking).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_geolocationtracking).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_geolocationtracking).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_date": (o, n) => { (o as unknown as Msdyn_geolocationtracking).msdyn_date = n.getDateValue(); },
            "msdyn_geolocationtracking_AsyncOperations": (o, n) => { (o as unknown as Msdyn_geolocationtracking).msdyn_geolocationtracking_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_geolocationtracking_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_geolocationtracking).msdyn_geolocationtracking_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_geolocationtracking_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_geolocationtracking).msdyn_geolocationtracking_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_geolocationtracking_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_geolocationtracking).msdyn_geolocationtracking_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_geolocationtracking_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_geolocationtracking).msdyn_geolocationtracking_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_geolocationtracking_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_geolocationtracking).msdyn_geolocationtracking_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_geolocationtracking_ProcessSession": (o, n) => { (o as unknown as Msdyn_geolocationtracking).msdyn_geolocationtracking_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_geolocationtracking_SyncErrors": (o, n) => { (o as unknown as Msdyn_geolocationtracking).msdyn_geolocationtracking_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_geolocationtrackingid": (o, n) => { (o as unknown as Msdyn_geolocationtracking).msdyn_geolocationtrackingid = n.getStringValue(); },
            "msdyn_latitude": (o, n) => { (o as unknown as Msdyn_geolocationtracking).msdyn_latitude = n.getNumberValue(); },
            "msdyn_longitude": (o, n) => { (o as unknown as Msdyn_geolocationtracking).msdyn_longitude = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_geolocationtracking).msdyn_name = n.getStringValue(); },
            "msdyn_UserId": (o, n) => { (o as unknown as Msdyn_geolocationtracking).msdyn_UserId = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_geolocationtracking).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_geolocationtracking).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_geolocationtracking).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_geolocationtracking).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_geolocationtracking).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_geolocationtracking).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_geolocationtracking).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_date property value. 
     * @returns a Date
     */
    public get msdyn_date() {
        return this._msdyn_date;
    };
    /**
     * Sets the msdyn_date property value. 
     * @param value Value to set for the msdyn_date property.
     */
    public set msdyn_date(value: Date | undefined) {
        this._msdyn_date = value;
    };
    /**
     * Gets the msdyn_geolocationtracking_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_geolocationtracking_AsyncOperations() {
        return this._msdyn_geolocationtracking_AsyncOperations;
    };
    /**
     * Sets the msdyn_geolocationtracking_AsyncOperations property value. 
     * @param value Value to set for the msdyn_geolocationtracking_AsyncOperations property.
     */
    public set msdyn_geolocationtracking_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_geolocationtracking_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_geolocationtracking_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_geolocationtracking_BulkDeleteFailures() {
        return this._msdyn_geolocationtracking_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_geolocationtracking_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_geolocationtracking_BulkDeleteFailures property.
     */
    public set msdyn_geolocationtracking_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_geolocationtracking_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_geolocationtracking_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_geolocationtracking_DuplicateBaseRecord() {
        return this._msdyn_geolocationtracking_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_geolocationtracking_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_geolocationtracking_DuplicateBaseRecord property.
     */
    public set msdyn_geolocationtracking_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_geolocationtracking_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_geolocationtracking_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_geolocationtracking_DuplicateMatchingRecord() {
        return this._msdyn_geolocationtracking_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_geolocationtracking_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_geolocationtracking_DuplicateMatchingRecord property.
     */
    public set msdyn_geolocationtracking_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_geolocationtracking_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_geolocationtracking_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_geolocationtracking_MailboxTrackingFolders() {
        return this._msdyn_geolocationtracking_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_geolocationtracking_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_geolocationtracking_MailboxTrackingFolders property.
     */
    public set msdyn_geolocationtracking_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_geolocationtracking_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_geolocationtracking_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_geolocationtracking_PrincipalObjectAttributeAccesses() {
        return this._msdyn_geolocationtracking_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_geolocationtracking_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_geolocationtracking_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_geolocationtracking_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_geolocationtracking_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_geolocationtracking_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_geolocationtracking_ProcessSession() {
        return this._msdyn_geolocationtracking_ProcessSession;
    };
    /**
     * Sets the msdyn_geolocationtracking_ProcessSession property value. 
     * @param value Value to set for the msdyn_geolocationtracking_ProcessSession property.
     */
    public set msdyn_geolocationtracking_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_geolocationtracking_ProcessSession = value;
    };
    /**
     * Gets the msdyn_geolocationtracking_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_geolocationtracking_SyncErrors() {
        return this._msdyn_geolocationtracking_SyncErrors;
    };
    /**
     * Sets the msdyn_geolocationtracking_SyncErrors property value. 
     * @param value Value to set for the msdyn_geolocationtracking_SyncErrors property.
     */
    public set msdyn_geolocationtracking_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_geolocationtracking_SyncErrors = value;
    };
    /**
     * Gets the msdyn_geolocationtrackingid property value. 
     * @returns a string
     */
    public get msdyn_geolocationtrackingid() {
        return this._msdyn_geolocationtrackingid;
    };
    /**
     * Sets the msdyn_geolocationtrackingid property value. 
     * @param value Value to set for the msdyn_geolocationtrackingid property.
     */
    public set msdyn_geolocationtrackingid(value: string | undefined) {
        this._msdyn_geolocationtrackingid = value;
    };
    /**
     * Gets the msdyn_latitude property value. 
     * @returns a int64
     */
    public get msdyn_latitude() {
        return this._msdyn_latitude;
    };
    /**
     * Sets the msdyn_latitude property value. 
     * @param value Value to set for the msdyn_latitude property.
     */
    public set msdyn_latitude(value: number | undefined) {
        this._msdyn_latitude = value;
    };
    /**
     * Gets the msdyn_longitude property value. 
     * @returns a int64
     */
    public get msdyn_longitude() {
        return this._msdyn_longitude;
    };
    /**
     * Sets the msdyn_longitude property value. 
     * @param value Value to set for the msdyn_longitude property.
     */
    public set msdyn_longitude(value: number | undefined) {
        this._msdyn_longitude = value;
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
     * Gets the msdyn_UserId property value. 
     * @returns a systemuser
     */
    public get msdyn_UserId() {
        return this._msdyn_UserId;
    };
    /**
     * Sets the msdyn_UserId property value. 
     * @param value Value to set for the msdyn_UserId property.
     */
    public set msdyn_UserId(value: Systemuser | undefined) {
        this._msdyn_UserId = value;
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
        writer.writeStringValue("_msdyn_userid_value", this._msdyn_userid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("msdyn_date", this.msdyn_date);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_geolocationtracking_AsyncOperations", this.msdyn_geolocationtracking_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_geolocationtracking_BulkDeleteFailures", this.msdyn_geolocationtracking_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_geolocationtracking_DuplicateBaseRecord", this.msdyn_geolocationtracking_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_geolocationtracking_DuplicateMatchingRecord", this.msdyn_geolocationtracking_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_geolocationtracking_MailboxTrackingFolders", this.msdyn_geolocationtracking_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_geolocationtracking_PrincipalObjectAttributeAccesses", this.msdyn_geolocationtracking_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_geolocationtracking_ProcessSession", this.msdyn_geolocationtracking_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_geolocationtracking_SyncErrors", this.msdyn_geolocationtracking_SyncErrors);
        writer.writeStringValue("msdyn_geolocationtrackingid", this.msdyn_geolocationtrackingid);
        writer.writeNumberValue("msdyn_latitude", this.msdyn_latitude);
        writer.writeNumberValue("msdyn_longitude", this.msdyn_longitude);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Systemuser>("msdyn_UserId", this.msdyn_UserId);
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
