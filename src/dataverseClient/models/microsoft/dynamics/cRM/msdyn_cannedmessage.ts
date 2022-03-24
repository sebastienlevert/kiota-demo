import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_liveworkstreamFromDiscriminatorValue} from './createMsdyn_liveworkstreamFromDiscriminatorValue';
import {createMsdyn_octagFromDiscriminatorValue} from './createMsdyn_octagFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_liveworkstream, Msdyn_octag, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_cannedmessage extends Crmbaseentity implements Parsable {
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
    private _msdyn_cannedmessage_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_cannedmessage_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_cannedmessage_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_cannedmessage_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_cannedmessage_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_cannedmessage_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_cannedmessage_ProcessSession?: Processsession[] | undefined;
    private _msdyn_cannedmessage_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_cannedmessageid?: string | undefined;
    private _msdyn_locale_field?: number | undefined;
    private _msdyn_message?: string | undefined;
    private _msdyn_msdyn_cannedmessage_liveworkstream?: Msdyn_liveworkstream[] | undefined;
    private _msdyn_msdyn_cannedmessage_msdyn_octag?: Msdyn_octag[] | undefined;
    private _msdyn_tagscontrolfield?: string | undefined;
    private _msdyn_title?: string | undefined;
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
     * Instantiates a new msdyn_cannedmessage and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_cannedmessage)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_cannedmessage)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_cannedmessage)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_cannedmessage)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_cannedmessage)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_cannedmessage).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_cannedmessage).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_cannedmessage).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_cannedmessage).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_cannedmessage).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_cannedmessage).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_cannedmessage).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_cannedmessage_AsyncOperations": (o, n) => { (o as unknown as Msdyn_cannedmessage).msdyn_cannedmessage_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_cannedmessage_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_cannedmessage).msdyn_cannedmessage_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_cannedmessage_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_cannedmessage).msdyn_cannedmessage_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_cannedmessage_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_cannedmessage).msdyn_cannedmessage_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_cannedmessage_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_cannedmessage).msdyn_cannedmessage_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_cannedmessage_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_cannedmessage).msdyn_cannedmessage_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_cannedmessage_ProcessSession": (o, n) => { (o as unknown as Msdyn_cannedmessage).msdyn_cannedmessage_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_cannedmessage_SyncErrors": (o, n) => { (o as unknown as Msdyn_cannedmessage).msdyn_cannedmessage_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_cannedmessageid": (o, n) => { (o as unknown as Msdyn_cannedmessage).msdyn_cannedmessageid = n.getStringValue(); },
            "msdyn_locale_field": (o, n) => { (o as unknown as Msdyn_cannedmessage).msdyn_locale_field = n.getNumberValue(); },
            "msdyn_message": (o, n) => { (o as unknown as Msdyn_cannedmessage).msdyn_message = n.getStringValue(); },
            "msdyn_msdyn_cannedmessage_liveworkstream": (o, n) => { (o as unknown as Msdyn_cannedmessage).msdyn_msdyn_cannedmessage_liveworkstream = n.getCollectionOfObjectValues<Msdyn_liveworkstream>(createMsdyn_liveworkstreamFromDiscriminatorValue); },
            "msdyn_msdyn_cannedmessage_msdyn_octag": (o, n) => { (o as unknown as Msdyn_cannedmessage).msdyn_msdyn_cannedmessage_msdyn_octag = n.getCollectionOfObjectValues<Msdyn_octag>(createMsdyn_octagFromDiscriminatorValue); },
            "msdyn_tagscontrolfield": (o, n) => { (o as unknown as Msdyn_cannedmessage).msdyn_tagscontrolfield = n.getStringValue(); },
            "msdyn_title": (o, n) => { (o as unknown as Msdyn_cannedmessage).msdyn_title = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_cannedmessage).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_cannedmessage).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_cannedmessage).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_cannedmessage).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_cannedmessage).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_cannedmessage).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_cannedmessage).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_cannedmessage_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_cannedmessage_AsyncOperations() {
        return this._msdyn_cannedmessage_AsyncOperations;
    };
    /**
     * Sets the msdyn_cannedmessage_AsyncOperations property value. 
     * @param value Value to set for the msdyn_cannedmessage_AsyncOperations property.
     */
    public set msdyn_cannedmessage_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_cannedmessage_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_cannedmessage_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_cannedmessage_BulkDeleteFailures() {
        return this._msdyn_cannedmessage_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_cannedmessage_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_cannedmessage_BulkDeleteFailures property.
     */
    public set msdyn_cannedmessage_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_cannedmessage_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_cannedmessage_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_cannedmessage_DuplicateBaseRecord() {
        return this._msdyn_cannedmessage_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_cannedmessage_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_cannedmessage_DuplicateBaseRecord property.
     */
    public set msdyn_cannedmessage_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_cannedmessage_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_cannedmessage_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_cannedmessage_DuplicateMatchingRecord() {
        return this._msdyn_cannedmessage_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_cannedmessage_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_cannedmessage_DuplicateMatchingRecord property.
     */
    public set msdyn_cannedmessage_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_cannedmessage_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_cannedmessage_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_cannedmessage_MailboxTrackingFolders() {
        return this._msdyn_cannedmessage_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_cannedmessage_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_cannedmessage_MailboxTrackingFolders property.
     */
    public set msdyn_cannedmessage_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_cannedmessage_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_cannedmessage_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_cannedmessage_PrincipalObjectAttributeAccesses() {
        return this._msdyn_cannedmessage_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_cannedmessage_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_cannedmessage_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_cannedmessage_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_cannedmessage_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_cannedmessage_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_cannedmessage_ProcessSession() {
        return this._msdyn_cannedmessage_ProcessSession;
    };
    /**
     * Sets the msdyn_cannedmessage_ProcessSession property value. 
     * @param value Value to set for the msdyn_cannedmessage_ProcessSession property.
     */
    public set msdyn_cannedmessage_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_cannedmessage_ProcessSession = value;
    };
    /**
     * Gets the msdyn_cannedmessage_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_cannedmessage_SyncErrors() {
        return this._msdyn_cannedmessage_SyncErrors;
    };
    /**
     * Sets the msdyn_cannedmessage_SyncErrors property value. 
     * @param value Value to set for the msdyn_cannedmessage_SyncErrors property.
     */
    public set msdyn_cannedmessage_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_cannedmessage_SyncErrors = value;
    };
    /**
     * Gets the msdyn_cannedmessageid property value. 
     * @returns a string
     */
    public get msdyn_cannedmessageid() {
        return this._msdyn_cannedmessageid;
    };
    /**
     * Sets the msdyn_cannedmessageid property value. 
     * @param value Value to set for the msdyn_cannedmessageid property.
     */
    public set msdyn_cannedmessageid(value: string | undefined) {
        this._msdyn_cannedmessageid = value;
    };
    /**
     * Gets the msdyn_locale_field property value. 
     * @returns a integer
     */
    public get msdyn_locale_field() {
        return this._msdyn_locale_field;
    };
    /**
     * Sets the msdyn_locale_field property value. 
     * @param value Value to set for the msdyn_locale_field property.
     */
    public set msdyn_locale_field(value: number | undefined) {
        this._msdyn_locale_field = value;
    };
    /**
     * Gets the msdyn_message property value. 
     * @returns a string
     */
    public get msdyn_message() {
        return this._msdyn_message;
    };
    /**
     * Sets the msdyn_message property value. 
     * @param value Value to set for the msdyn_message property.
     */
    public set msdyn_message(value: string | undefined) {
        this._msdyn_message = value;
    };
    /**
     * Gets the msdyn_msdyn_cannedmessage_liveworkstream property value. 
     * @returns a msdyn_liveworkstream
     */
    public get msdyn_msdyn_cannedmessage_liveworkstream() {
        return this._msdyn_msdyn_cannedmessage_liveworkstream;
    };
    /**
     * Sets the msdyn_msdyn_cannedmessage_liveworkstream property value. 
     * @param value Value to set for the msdyn_msdyn_cannedmessage_liveworkstream property.
     */
    public set msdyn_msdyn_cannedmessage_liveworkstream(value: Msdyn_liveworkstream[] | undefined) {
        this._msdyn_msdyn_cannedmessage_liveworkstream = value;
    };
    /**
     * Gets the msdyn_msdyn_cannedmessage_msdyn_octag property value. 
     * @returns a msdyn_octag
     */
    public get msdyn_msdyn_cannedmessage_msdyn_octag() {
        return this._msdyn_msdyn_cannedmessage_msdyn_octag;
    };
    /**
     * Sets the msdyn_msdyn_cannedmessage_msdyn_octag property value. 
     * @param value Value to set for the msdyn_msdyn_cannedmessage_msdyn_octag property.
     */
    public set msdyn_msdyn_cannedmessage_msdyn_octag(value: Msdyn_octag[] | undefined) {
        this._msdyn_msdyn_cannedmessage_msdyn_octag = value;
    };
    /**
     * Gets the msdyn_tagscontrolfield property value. 
     * @returns a string
     */
    public get msdyn_tagscontrolfield() {
        return this._msdyn_tagscontrolfield;
    };
    /**
     * Sets the msdyn_tagscontrolfield property value. 
     * @param value Value to set for the msdyn_tagscontrolfield property.
     */
    public set msdyn_tagscontrolfield(value: string | undefined) {
        this._msdyn_tagscontrolfield = value;
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
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_cannedmessage_AsyncOperations", this.msdyn_cannedmessage_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_cannedmessage_BulkDeleteFailures", this.msdyn_cannedmessage_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_cannedmessage_DuplicateBaseRecord", this.msdyn_cannedmessage_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_cannedmessage_DuplicateMatchingRecord", this.msdyn_cannedmessage_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_cannedmessage_MailboxTrackingFolders", this.msdyn_cannedmessage_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_cannedmessage_PrincipalObjectAttributeAccesses", this.msdyn_cannedmessage_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_cannedmessage_ProcessSession", this.msdyn_cannedmessage_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_cannedmessage_SyncErrors", this.msdyn_cannedmessage_SyncErrors);
        writer.writeStringValue("msdyn_cannedmessageid", this.msdyn_cannedmessageid);
        writer.writeNumberValue("msdyn_locale_field", this.msdyn_locale_field);
        writer.writeStringValue("msdyn_message", this.msdyn_message);
        writer.writeCollectionOfObjectValues<Msdyn_liveworkstream>("msdyn_msdyn_cannedmessage_liveworkstream", this.msdyn_msdyn_cannedmessage_liveworkstream);
        writer.writeCollectionOfObjectValues<Msdyn_octag>("msdyn_msdyn_cannedmessage_msdyn_octag", this.msdyn_msdyn_cannedmessage_msdyn_octag);
        writer.writeStringValue("msdyn_tagscontrolfield", this.msdyn_tagscontrolfield);
        writer.writeStringValue("msdyn_title", this.msdyn_title);
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
