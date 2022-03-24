import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {createUomscheduleFromDiscriminatorValue} from './createUomscheduleFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Uom, Uomschedule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_transactiontype extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_defaultunit_value?: string | undefined;
    private __msdyn_unitgroup_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_DefaultUnit?: Uom | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_transactionclassification?: number | undefined;
    private _msdyn_transactiontype_Annotations?: Annotation[] | undefined;
    private _msdyn_transactiontype_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_transactiontype_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_transactiontype_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_transactiontype_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_transactiontype_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_transactiontype_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_transactiontype_ProcessSession?: Processsession[] | undefined;
    private _msdyn_transactiontype_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_transactiontypecode?: number | undefined;
    private _msdyn_transactiontypeid?: string | undefined;
    private _msdyn_UnitGroup?: Uomschedule | undefined;
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
     * Gets the _msdyn_defaultunit_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultunit_value() {
        return this.__msdyn_defaultunit_value;
    };
    /**
     * Sets the _msdyn_defaultunit_value property value. 
     * @param value Value to set for the _msdyn_defaultunit_value property.
     */
    public set _msdyn_defaultunit_value(value: string | undefined) {
        this.__msdyn_defaultunit_value = value;
    };
    /**
     * Gets the _msdyn_unitgroup_value property value. 
     * @returns a string
     */
    public get _msdyn_unitgroup_value() {
        return this.__msdyn_unitgroup_value;
    };
    /**
     * Sets the _msdyn_unitgroup_value property value. 
     * @param value Value to set for the _msdyn_unitgroup_value property.
     */
    public set _msdyn_unitgroup_value(value: string | undefined) {
        this.__msdyn_unitgroup_value = value;
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
     * Instantiates a new msdyn_transactiontype and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_transactiontype)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_transactiontype)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_transactiontype)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_transactiontype)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_defaultunit_value": (o, n) => { (o as unknown as Msdyn_transactiontype)._msdyn_defaultunit_value = n.getStringValue(); },
            "_msdyn_unitgroup_value": (o, n) => { (o as unknown as Msdyn_transactiontype)._msdyn_unitgroup_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_transactiontype)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_transactiontype).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_transactiontype).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_transactiontype).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_transactiontype).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_transactiontype).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_transactiontype).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_transactiontype).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_DefaultUnit": (o, n) => { (o as unknown as Msdyn_transactiontype).msdyn_DefaultUnit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_transactiontype).msdyn_name = n.getStringValue(); },
            "msdyn_transactionclassification": (o, n) => { (o as unknown as Msdyn_transactiontype).msdyn_transactionclassification = n.getNumberValue(); },
            "msdyn_transactiontype_Annotations": (o, n) => { (o as unknown as Msdyn_transactiontype).msdyn_transactiontype_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_transactiontype_AsyncOperations": (o, n) => { (o as unknown as Msdyn_transactiontype).msdyn_transactiontype_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_transactiontype_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_transactiontype).msdyn_transactiontype_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_transactiontype_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_transactiontype).msdyn_transactiontype_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_transactiontype_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_transactiontype).msdyn_transactiontype_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_transactiontype_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_transactiontype).msdyn_transactiontype_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_transactiontype_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_transactiontype).msdyn_transactiontype_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_transactiontype_ProcessSession": (o, n) => { (o as unknown as Msdyn_transactiontype).msdyn_transactiontype_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_transactiontype_SyncErrors": (o, n) => { (o as unknown as Msdyn_transactiontype).msdyn_transactiontype_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_transactiontypecode": (o, n) => { (o as unknown as Msdyn_transactiontype).msdyn_transactiontypecode = n.getNumberValue(); },
            "msdyn_transactiontypeid": (o, n) => { (o as unknown as Msdyn_transactiontype).msdyn_transactiontypeid = n.getStringValue(); },
            "msdyn_UnitGroup": (o, n) => { (o as unknown as Msdyn_transactiontype).msdyn_UnitGroup = n.getObjectValue<Uomschedule>(createUomscheduleFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_transactiontype).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_transactiontype).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_transactiontype).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_transactiontype).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_transactiontype).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_transactiontype).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_transactiontype).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_DefaultUnit property value. 
     * @returns a uom
     */
    public get msdyn_DefaultUnit() {
        return this._msdyn_DefaultUnit;
    };
    /**
     * Sets the msdyn_DefaultUnit property value. 
     * @param value Value to set for the msdyn_DefaultUnit property.
     */
    public set msdyn_DefaultUnit(value: Uom | undefined) {
        this._msdyn_DefaultUnit = value;
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
     * Gets the msdyn_transactiontype_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_transactiontype_Annotations() {
        return this._msdyn_transactiontype_Annotations;
    };
    /**
     * Sets the msdyn_transactiontype_Annotations property value. 
     * @param value Value to set for the msdyn_transactiontype_Annotations property.
     */
    public set msdyn_transactiontype_Annotations(value: Annotation[] | undefined) {
        this._msdyn_transactiontype_Annotations = value;
    };
    /**
     * Gets the msdyn_transactiontype_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_transactiontype_AsyncOperations() {
        return this._msdyn_transactiontype_AsyncOperations;
    };
    /**
     * Sets the msdyn_transactiontype_AsyncOperations property value. 
     * @param value Value to set for the msdyn_transactiontype_AsyncOperations property.
     */
    public set msdyn_transactiontype_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_transactiontype_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_transactiontype_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_transactiontype_BulkDeleteFailures() {
        return this._msdyn_transactiontype_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_transactiontype_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_transactiontype_BulkDeleteFailures property.
     */
    public set msdyn_transactiontype_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_transactiontype_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_transactiontype_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_transactiontype_DuplicateBaseRecord() {
        return this._msdyn_transactiontype_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_transactiontype_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_transactiontype_DuplicateBaseRecord property.
     */
    public set msdyn_transactiontype_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_transactiontype_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_transactiontype_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_transactiontype_DuplicateMatchingRecord() {
        return this._msdyn_transactiontype_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_transactiontype_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_transactiontype_DuplicateMatchingRecord property.
     */
    public set msdyn_transactiontype_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_transactiontype_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_transactiontype_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_transactiontype_MailboxTrackingFolders() {
        return this._msdyn_transactiontype_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_transactiontype_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_transactiontype_MailboxTrackingFolders property.
     */
    public set msdyn_transactiontype_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_transactiontype_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_transactiontype_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_transactiontype_PrincipalObjectAttributeAccesses() {
        return this._msdyn_transactiontype_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_transactiontype_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_transactiontype_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_transactiontype_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_transactiontype_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_transactiontype_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_transactiontype_ProcessSession() {
        return this._msdyn_transactiontype_ProcessSession;
    };
    /**
     * Sets the msdyn_transactiontype_ProcessSession property value. 
     * @param value Value to set for the msdyn_transactiontype_ProcessSession property.
     */
    public set msdyn_transactiontype_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_transactiontype_ProcessSession = value;
    };
    /**
     * Gets the msdyn_transactiontype_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_transactiontype_SyncErrors() {
        return this._msdyn_transactiontype_SyncErrors;
    };
    /**
     * Sets the msdyn_transactiontype_SyncErrors property value. 
     * @param value Value to set for the msdyn_transactiontype_SyncErrors property.
     */
    public set msdyn_transactiontype_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_transactiontype_SyncErrors = value;
    };
    /**
     * Gets the msdyn_transactiontypecode property value. 
     * @returns a integer
     */
    public get msdyn_transactiontypecode() {
        return this._msdyn_transactiontypecode;
    };
    /**
     * Sets the msdyn_transactiontypecode property value. 
     * @param value Value to set for the msdyn_transactiontypecode property.
     */
    public set msdyn_transactiontypecode(value: number | undefined) {
        this._msdyn_transactiontypecode = value;
    };
    /**
     * Gets the msdyn_transactiontypeid property value. 
     * @returns a string
     */
    public get msdyn_transactiontypeid() {
        return this._msdyn_transactiontypeid;
    };
    /**
     * Sets the msdyn_transactiontypeid property value. 
     * @param value Value to set for the msdyn_transactiontypeid property.
     */
    public set msdyn_transactiontypeid(value: string | undefined) {
        this._msdyn_transactiontypeid = value;
    };
    /**
     * Gets the msdyn_UnitGroup property value. 
     * @returns a uomschedule
     */
    public get msdyn_UnitGroup() {
        return this._msdyn_UnitGroup;
    };
    /**
     * Sets the msdyn_UnitGroup property value. 
     * @param value Value to set for the msdyn_UnitGroup property.
     */
    public set msdyn_UnitGroup(value: Uomschedule | undefined) {
        this._msdyn_UnitGroup = value;
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
        writer.writeStringValue("_msdyn_defaultunit_value", this._msdyn_defaultunit_value);
        writer.writeStringValue("_msdyn_unitgroup_value", this._msdyn_unitgroup_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Uom>("msdyn_DefaultUnit", this.msdyn_DefaultUnit);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_transactionclassification", this.msdyn_transactionclassification);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_transactiontype_Annotations", this.msdyn_transactiontype_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_transactiontype_AsyncOperations", this.msdyn_transactiontype_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_transactiontype_BulkDeleteFailures", this.msdyn_transactiontype_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_transactiontype_DuplicateBaseRecord", this.msdyn_transactiontype_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_transactiontype_DuplicateMatchingRecord", this.msdyn_transactiontype_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_transactiontype_MailboxTrackingFolders", this.msdyn_transactiontype_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_transactiontype_PrincipalObjectAttributeAccesses", this.msdyn_transactiontype_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_transactiontype_ProcessSession", this.msdyn_transactiontype_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_transactiontype_SyncErrors", this.msdyn_transactiontype_SyncErrors);
        writer.writeNumberValue("msdyn_transactiontypecode", this.msdyn_transactiontypecode);
        writer.writeStringValue("msdyn_transactiontypeid", this.msdyn_transactiontypeid);
        writer.writeObjectValue<Uomschedule>("msdyn_UnitGroup", this.msdyn_UnitGroup);
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
