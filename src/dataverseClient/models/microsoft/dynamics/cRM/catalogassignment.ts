import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createCatalogFromDiscriminatorValue} from './createCatalogFromDiscriminatorValue';
import {createCustomapiFromDiscriminatorValue} from './createCustomapiFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Catalog, Crmbaseentity, Customapi, Duplicaterecord, Entity, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Workflow} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Catalogassignment extends Crmbaseentity implements Parsable {
    private __catalogid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __object_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _catalogassignment_AsyncOperations?: Asyncoperation[] | undefined;
    private _catalogassignment_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _catalogassignment_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _catalogassignment_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _catalogassignment_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _catalogassignment_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _catalogassignment_ProcessSession?: Processsession[] | undefined;
    private _catalogassignment_SyncErrors?: Syncerror[] | undefined;
    private _catalogassignmentid?: string | undefined;
    private _catalogId?: Catalog | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customAPIId?: Customapi | undefined;
    private _entityId?: Entity | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    private _workflowId?: Workflow | undefined;
    /**
     * Gets the _catalogid_value property value. 
     * @returns a string
     */
    public get _catalogid_value() {
        return this.__catalogid_value;
    };
    /**
     * Sets the _catalogid_value property value. 
     * @param value Value to set for the _catalogid_value property.
     */
    public set _catalogid_value(value: string | undefined) {
        this.__catalogid_value = value;
    };
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
     * Gets the _object_value property value. 
     * @returns a string
     */
    public get _object_value() {
        return this.__object_value;
    };
    /**
     * Sets the _object_value property value. 
     * @param value Value to set for the _object_value property.
     */
    public set _object_value(value: string | undefined) {
        this.__object_value = value;
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
     * Gets the catalogassignment_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get catalogassignment_AsyncOperations() {
        return this._catalogassignment_AsyncOperations;
    };
    /**
     * Sets the catalogassignment_AsyncOperations property value. 
     * @param value Value to set for the catalogassignment_AsyncOperations property.
     */
    public set catalogassignment_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._catalogassignment_AsyncOperations = value;
    };
    /**
     * Gets the catalogassignment_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get catalogassignment_BulkDeleteFailures() {
        return this._catalogassignment_BulkDeleteFailures;
    };
    /**
     * Sets the catalogassignment_BulkDeleteFailures property value. 
     * @param value Value to set for the catalogassignment_BulkDeleteFailures property.
     */
    public set catalogassignment_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._catalogassignment_BulkDeleteFailures = value;
    };
    /**
     * Gets the catalogassignment_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get catalogassignment_DuplicateBaseRecord() {
        return this._catalogassignment_DuplicateBaseRecord;
    };
    /**
     * Sets the catalogassignment_DuplicateBaseRecord property value. 
     * @param value Value to set for the catalogassignment_DuplicateBaseRecord property.
     */
    public set catalogassignment_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._catalogassignment_DuplicateBaseRecord = value;
    };
    /**
     * Gets the catalogassignment_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get catalogassignment_DuplicateMatchingRecord() {
        return this._catalogassignment_DuplicateMatchingRecord;
    };
    /**
     * Sets the catalogassignment_DuplicateMatchingRecord property value. 
     * @param value Value to set for the catalogassignment_DuplicateMatchingRecord property.
     */
    public set catalogassignment_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._catalogassignment_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the catalogassignment_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get catalogassignment_MailboxTrackingFolders() {
        return this._catalogassignment_MailboxTrackingFolders;
    };
    /**
     * Sets the catalogassignment_MailboxTrackingFolders property value. 
     * @param value Value to set for the catalogassignment_MailboxTrackingFolders property.
     */
    public set catalogassignment_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._catalogassignment_MailboxTrackingFolders = value;
    };
    /**
     * Gets the catalogassignment_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get catalogassignment_PrincipalObjectAttributeAccesses() {
        return this._catalogassignment_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the catalogassignment_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the catalogassignment_PrincipalObjectAttributeAccesses property.
     */
    public set catalogassignment_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._catalogassignment_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the catalogassignment_ProcessSession property value. 
     * @returns a processsession
     */
    public get catalogassignment_ProcessSession() {
        return this._catalogassignment_ProcessSession;
    };
    /**
     * Sets the catalogassignment_ProcessSession property value. 
     * @param value Value to set for the catalogassignment_ProcessSession property.
     */
    public set catalogassignment_ProcessSession(value: Processsession[] | undefined) {
        this._catalogassignment_ProcessSession = value;
    };
    /**
     * Gets the catalogassignment_SyncErrors property value. 
     * @returns a syncerror
     */
    public get catalogassignment_SyncErrors() {
        return this._catalogassignment_SyncErrors;
    };
    /**
     * Sets the catalogassignment_SyncErrors property value. 
     * @param value Value to set for the catalogassignment_SyncErrors property.
     */
    public set catalogassignment_SyncErrors(value: Syncerror[] | undefined) {
        this._catalogassignment_SyncErrors = value;
    };
    /**
     * Gets the catalogassignmentid property value. 
     * @returns a string
     */
    public get catalogassignmentid() {
        return this._catalogassignmentid;
    };
    /**
     * Sets the catalogassignmentid property value. 
     * @param value Value to set for the catalogassignmentid property.
     */
    public set catalogassignmentid(value: string | undefined) {
        this._catalogassignmentid = value;
    };
    /**
     * Gets the catalogId property value. 
     * @returns a catalog
     */
    public get catalogId() {
        return this._catalogId;
    };
    /**
     * Sets the catalogId property value. 
     * @param value Value to set for the CatalogId property.
     */
    public set catalogId(value: Catalog | undefined) {
        this._catalogId = value;
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
     * Instantiates a new catalogassignment and sets the default values.
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
     * Gets the customAPIId property value. 
     * @returns a customapi
     */
    public get customAPIId() {
        return this._customAPIId;
    };
    /**
     * Sets the customAPIId property value. 
     * @param value Value to set for the CustomAPIId property.
     */
    public set customAPIId(value: Customapi | undefined) {
        this._customAPIId = value;
    };
    /**
     * Gets the entityId property value. 
     * @returns a entity
     */
    public get entityId() {
        return this._entityId;
    };
    /**
     * Sets the entityId property value. 
     * @param value Value to set for the EntityId property.
     */
    public set entityId(value: Entity | undefined) {
        this._entityId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_catalogid_value": (o, n) => { (o as unknown as Catalogassignment)._catalogid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Catalogassignment)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Catalogassignment)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Catalogassignment)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Catalogassignment)._modifiedonbehalfby_value = n.getStringValue(); },
            "_object_value": (o, n) => { (o as unknown as Catalogassignment)._object_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Catalogassignment)._organizationid_value = n.getStringValue(); },
            "catalogassignment_AsyncOperations": (o, n) => { (o as unknown as Catalogassignment).catalogassignment_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "catalogassignment_BulkDeleteFailures": (o, n) => { (o as unknown as Catalogassignment).catalogassignment_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "catalogassignment_DuplicateBaseRecord": (o, n) => { (o as unknown as Catalogassignment).catalogassignment_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "catalogassignment_DuplicateMatchingRecord": (o, n) => { (o as unknown as Catalogassignment).catalogassignment_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "catalogassignment_MailboxTrackingFolders": (o, n) => { (o as unknown as Catalogassignment).catalogassignment_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "catalogassignment_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Catalogassignment).catalogassignment_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "catalogassignment_ProcessSession": (o, n) => { (o as unknown as Catalogassignment).catalogassignment_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "catalogassignment_SyncErrors": (o, n) => { (o as unknown as Catalogassignment).catalogassignment_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "catalogassignmentid": (o, n) => { (o as unknown as Catalogassignment).catalogassignmentid = n.getStringValue(); },
            "catalogId": (o, n) => { (o as unknown as Catalogassignment).catalogId = n.getObjectValue<Catalog>(createCatalogFromDiscriminatorValue); },
            "componentidunique": (o, n) => { (o as unknown as Catalogassignment).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Catalogassignment).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Catalogassignment).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Catalogassignment).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Catalogassignment).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customAPIId": (o, n) => { (o as unknown as Catalogassignment).customAPIId = n.getObjectValue<Customapi>(createCustomapiFromDiscriminatorValue); },
            "entityId": (o, n) => { (o as unknown as Catalogassignment).entityId = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Catalogassignment).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Catalogassignment).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Catalogassignment).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Catalogassignment).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Catalogassignment).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Catalogassignment).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Catalogassignment).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Catalogassignment).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Catalogassignment).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Catalogassignment).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Catalogassignment).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Catalogassignment).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Catalogassignment).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Catalogassignment).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Catalogassignment).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Catalogassignment).versionnumber = n.getNumberValue(); },
            "workflowId": (o, n) => { (o as unknown as Catalogassignment).workflowId = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_catalogid_value", this._catalogid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_object_value", this._object_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeCollectionOfObjectValues<Asyncoperation>("catalogassignment_AsyncOperations", this.catalogassignment_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("catalogassignment_BulkDeleteFailures", this.catalogassignment_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("catalogassignment_DuplicateBaseRecord", this.catalogassignment_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("catalogassignment_DuplicateMatchingRecord", this.catalogassignment_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("catalogassignment_MailboxTrackingFolders", this.catalogassignment_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("catalogassignment_PrincipalObjectAttributeAccesses", this.catalogassignment_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("catalogassignment_ProcessSession", this.catalogassignment_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("catalogassignment_SyncErrors", this.catalogassignment_SyncErrors);
        writer.writeStringValue("catalogassignmentid", this.catalogassignmentid);
        writer.writeObjectValue<Catalog>("catalogId", this.catalogId);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Customapi>("customAPIId", this.customAPIId);
        writer.writeObjectValue<Entity>("entityId", this.entityId);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeObjectValue<Workflow>("workflowId", this.workflowId);
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
    /**
     * Gets the workflowId property value. 
     * @returns a workflow
     */
    public get workflowId() {
        return this._workflowId;
    };
    /**
     * Sets the workflowId property value. 
     * @param value Value to set for the WorkflowId property.
     */
    public set workflowId(value: Workflow | undefined) {
        this._workflowId = value;
    };
}
