import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Dataprocessingconfiguration extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _dataprocessingconfiguration_AsyncOperations?: Asyncoperation[] | undefined;
    private _dataprocessingconfiguration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _dataprocessingconfiguration_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _dataprocessingconfiguration_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _dataprocessingconfiguration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _dataprocessingconfiguration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _dataprocessingconfiguration_ProcessSession?: Processsession[] | undefined;
    private _dataprocessingconfiguration_SyncErrors?: Syncerror[] | undefined;
    private _dataprocessingconfigurationid?: string | undefined;
    private _externaldataprocessingconfigurationId?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _moduleconfigurationjson?: string | undefined;
    private _modulename?: string | undefined;
    private _moduletype?: number | undefined;
    private _moduleversion?: string | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _owningappid?: string | undefined;
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
     * Instantiates a new dataprocessingconfiguration and sets the default values.
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
     * Gets the dataprocessingconfiguration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get dataprocessingconfiguration_AsyncOperations() {
        return this._dataprocessingconfiguration_AsyncOperations;
    };
    /**
     * Sets the dataprocessingconfiguration_AsyncOperations property value. 
     * @param value Value to set for the dataprocessingconfiguration_AsyncOperations property.
     */
    public set dataprocessingconfiguration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._dataprocessingconfiguration_AsyncOperations = value;
    };
    /**
     * Gets the dataprocessingconfiguration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get dataprocessingconfiguration_BulkDeleteFailures() {
        return this._dataprocessingconfiguration_BulkDeleteFailures;
    };
    /**
     * Sets the dataprocessingconfiguration_BulkDeleteFailures property value. 
     * @param value Value to set for the dataprocessingconfiguration_BulkDeleteFailures property.
     */
    public set dataprocessingconfiguration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._dataprocessingconfiguration_BulkDeleteFailures = value;
    };
    /**
     * Gets the dataprocessingconfiguration_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get dataprocessingconfiguration_DuplicateBaseRecord() {
        return this._dataprocessingconfiguration_DuplicateBaseRecord;
    };
    /**
     * Sets the dataprocessingconfiguration_DuplicateBaseRecord property value. 
     * @param value Value to set for the dataprocessingconfiguration_DuplicateBaseRecord property.
     */
    public set dataprocessingconfiguration_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._dataprocessingconfiguration_DuplicateBaseRecord = value;
    };
    /**
     * Gets the dataprocessingconfiguration_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get dataprocessingconfiguration_DuplicateMatchingRecord() {
        return this._dataprocessingconfiguration_DuplicateMatchingRecord;
    };
    /**
     * Sets the dataprocessingconfiguration_DuplicateMatchingRecord property value. 
     * @param value Value to set for the dataprocessingconfiguration_DuplicateMatchingRecord property.
     */
    public set dataprocessingconfiguration_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._dataprocessingconfiguration_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the dataprocessingconfiguration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get dataprocessingconfiguration_MailboxTrackingFolders() {
        return this._dataprocessingconfiguration_MailboxTrackingFolders;
    };
    /**
     * Sets the dataprocessingconfiguration_MailboxTrackingFolders property value. 
     * @param value Value to set for the dataprocessingconfiguration_MailboxTrackingFolders property.
     */
    public set dataprocessingconfiguration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._dataprocessingconfiguration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the dataprocessingconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get dataprocessingconfiguration_PrincipalObjectAttributeAccesses() {
        return this._dataprocessingconfiguration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the dataprocessingconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the dataprocessingconfiguration_PrincipalObjectAttributeAccesses property.
     */
    public set dataprocessingconfiguration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._dataprocessingconfiguration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the dataprocessingconfiguration_ProcessSession property value. 
     * @returns a processsession
     */
    public get dataprocessingconfiguration_ProcessSession() {
        return this._dataprocessingconfiguration_ProcessSession;
    };
    /**
     * Sets the dataprocessingconfiguration_ProcessSession property value. 
     * @param value Value to set for the dataprocessingconfiguration_ProcessSession property.
     */
    public set dataprocessingconfiguration_ProcessSession(value: Processsession[] | undefined) {
        this._dataprocessingconfiguration_ProcessSession = value;
    };
    /**
     * Gets the dataprocessingconfiguration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get dataprocessingconfiguration_SyncErrors() {
        return this._dataprocessingconfiguration_SyncErrors;
    };
    /**
     * Sets the dataprocessingconfiguration_SyncErrors property value. 
     * @param value Value to set for the dataprocessingconfiguration_SyncErrors property.
     */
    public set dataprocessingconfiguration_SyncErrors(value: Syncerror[] | undefined) {
        this._dataprocessingconfiguration_SyncErrors = value;
    };
    /**
     * Gets the dataprocessingconfigurationid property value. 
     * @returns a string
     */
    public get dataprocessingconfigurationid() {
        return this._dataprocessingconfigurationid;
    };
    /**
     * Sets the dataprocessingconfigurationid property value. 
     * @param value Value to set for the dataprocessingconfigurationid property.
     */
    public set dataprocessingconfigurationid(value: string | undefined) {
        this._dataprocessingconfigurationid = value;
    };
    /**
     * Gets the externaldataprocessingconfigurationId property value. 
     * @returns a string
     */
    public get externaldataprocessingconfigurationId() {
        return this._externaldataprocessingconfigurationId;
    };
    /**
     * Sets the externaldataprocessingconfigurationId property value. 
     * @param value Value to set for the externaldataprocessingconfigurationId property.
     */
    public set externaldataprocessingconfigurationId(value: string | undefined) {
        this._externaldataprocessingconfigurationId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Dataprocessingconfiguration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Dataprocessingconfiguration)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Dataprocessingconfiguration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Dataprocessingconfiguration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Dataprocessingconfiguration)._organizationid_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Dataprocessingconfiguration).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Dataprocessingconfiguration).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Dataprocessingconfiguration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Dataprocessingconfiguration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Dataprocessingconfiguration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "dataprocessingconfiguration_AsyncOperations": (o, n) => { (o as unknown as Dataprocessingconfiguration).dataprocessingconfiguration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "dataprocessingconfiguration_BulkDeleteFailures": (o, n) => { (o as unknown as Dataprocessingconfiguration).dataprocessingconfiguration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "dataprocessingconfiguration_DuplicateBaseRecord": (o, n) => { (o as unknown as Dataprocessingconfiguration).dataprocessingconfiguration_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "dataprocessingconfiguration_DuplicateMatchingRecord": (o, n) => { (o as unknown as Dataprocessingconfiguration).dataprocessingconfiguration_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "dataprocessingconfiguration_MailboxTrackingFolders": (o, n) => { (o as unknown as Dataprocessingconfiguration).dataprocessingconfiguration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "dataprocessingconfiguration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Dataprocessingconfiguration).dataprocessingconfiguration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "dataprocessingconfiguration_ProcessSession": (o, n) => { (o as unknown as Dataprocessingconfiguration).dataprocessingconfiguration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "dataprocessingconfiguration_SyncErrors": (o, n) => { (o as unknown as Dataprocessingconfiguration).dataprocessingconfiguration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "dataprocessingconfigurationid": (o, n) => { (o as unknown as Dataprocessingconfiguration).dataprocessingconfigurationid = n.getStringValue(); },
            "externaldataprocessingconfigurationId": (o, n) => { (o as unknown as Dataprocessingconfiguration).externaldataprocessingconfigurationId = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Dataprocessingconfiguration).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Dataprocessingconfiguration).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Dataprocessingconfiguration).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Dataprocessingconfiguration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Dataprocessingconfiguration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Dataprocessingconfiguration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "moduleconfigurationjson": (o, n) => { (o as unknown as Dataprocessingconfiguration).moduleconfigurationjson = n.getStringValue(); },
            "modulename": (o, n) => { (o as unknown as Dataprocessingconfiguration).modulename = n.getStringValue(); },
            "moduletype": (o, n) => { (o as unknown as Dataprocessingconfiguration).moduletype = n.getNumberValue(); },
            "moduleversion": (o, n) => { (o as unknown as Dataprocessingconfiguration).moduleversion = n.getStringValue(); },
            "name": (o, n) => { (o as unknown as Dataprocessingconfiguration).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Dataprocessingconfiguration).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Dataprocessingconfiguration).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Dataprocessingconfiguration).overwritetime = n.getDateValue(); },
            "owningappid": (o, n) => { (o as unknown as Dataprocessingconfiguration).owningappid = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Dataprocessingconfiguration).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Dataprocessingconfiguration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Dataprocessingconfiguration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Dataprocessingconfiguration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Dataprocessingconfiguration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Dataprocessingconfiguration).versionnumber = n.getNumberValue(); },
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
     * Gets the moduleconfigurationjson property value. 
     * @returns a string
     */
    public get moduleconfigurationjson() {
        return this._moduleconfigurationjson;
    };
    /**
     * Sets the moduleconfigurationjson property value. 
     * @param value Value to set for the moduleconfigurationjson property.
     */
    public set moduleconfigurationjson(value: string | undefined) {
        this._moduleconfigurationjson = value;
    };
    /**
     * Gets the modulename property value. 
     * @returns a string
     */
    public get modulename() {
        return this._modulename;
    };
    /**
     * Sets the modulename property value. 
     * @param value Value to set for the modulename property.
     */
    public set modulename(value: string | undefined) {
        this._modulename = value;
    };
    /**
     * Gets the moduletype property value. 
     * @returns a integer
     */
    public get moduletype() {
        return this._moduletype;
    };
    /**
     * Sets the moduletype property value. 
     * @param value Value to set for the moduletype property.
     */
    public set moduletype(value: number | undefined) {
        this._moduletype = value;
    };
    /**
     * Gets the moduleversion property value. 
     * @returns a string
     */
    public get moduleversion() {
        return this._moduleversion;
    };
    /**
     * Sets the moduleversion property value. 
     * @param value Value to set for the moduleversion property.
     */
    public set moduleversion(value: string | undefined) {
        this._moduleversion = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
     * Gets the owningappid property value. 
     * @returns a string
     */
    public get owningappid() {
        return this._owningappid;
    };
    /**
     * Sets the owningappid property value. 
     * @param value Value to set for the owningappid property.
     */
    public set owningappid(value: string | undefined) {
        this._owningappid = value;
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
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Asyncoperation>("dataprocessingconfiguration_AsyncOperations", this.dataprocessingconfiguration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("dataprocessingconfiguration_BulkDeleteFailures", this.dataprocessingconfiguration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("dataprocessingconfiguration_DuplicateBaseRecord", this.dataprocessingconfiguration_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("dataprocessingconfiguration_DuplicateMatchingRecord", this.dataprocessingconfiguration_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("dataprocessingconfiguration_MailboxTrackingFolders", this.dataprocessingconfiguration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("dataprocessingconfiguration_PrincipalObjectAttributeAccesses", this.dataprocessingconfiguration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("dataprocessingconfiguration_ProcessSession", this.dataprocessingconfiguration_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("dataprocessingconfiguration_SyncErrors", this.dataprocessingconfiguration_SyncErrors);
        writer.writeStringValue("dataprocessingconfigurationid", this.dataprocessingconfigurationid);
        writer.writeStringValue("externaldataprocessingconfigurationId", this.externaldataprocessingconfigurationId);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("moduleconfigurationjson", this.moduleconfigurationjson);
        writer.writeStringValue("modulename", this.modulename);
        writer.writeNumberValue("moduletype", this.moduletype);
        writer.writeStringValue("moduleversion", this.moduleversion);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("owningappid", this.owningappid);
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
