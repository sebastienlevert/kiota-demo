import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createCatalogassignmentFromDiscriminatorValue} from './createCatalogassignmentFromDiscriminatorValue';
import {createCatalogFromDiscriminatorValue} from './createCatalogFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Catalogassignment, Crmbaseentity, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Catalog extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __parentcatalogid_value?: string | undefined;
    private _catalog_AsyncOperations?: Asyncoperation[] | undefined;
    private _catalog_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _catalog_CatalogAssignment?: Catalogassignment[] | undefined;
    private _catalog_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _catalog_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _catalog_ProcessSession?: Processsession[] | undefined;
    private _catalog_SyncErrors?: Syncerror[] | undefined;
    private _catalogid?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _displayname?: string | undefined;
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
    private _parentCatalogId?: Catalog | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _subCatalogs?: Catalog[] | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _uniquename?: string | undefined;
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
     * Gets the _parentcatalogid_value property value. 
     * @returns a string
     */
    public get _parentcatalogid_value() {
        return this.__parentcatalogid_value;
    };
    /**
     * Sets the _parentcatalogid_value property value. 
     * @param value Value to set for the _parentcatalogid_value property.
     */
    public set _parentcatalogid_value(value: string | undefined) {
        this.__parentcatalogid_value = value;
    };
    /**
     * Gets the catalog_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get catalog_AsyncOperations() {
        return this._catalog_AsyncOperations;
    };
    /**
     * Sets the catalog_AsyncOperations property value. 
     * @param value Value to set for the catalog_AsyncOperations property.
     */
    public set catalog_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._catalog_AsyncOperations = value;
    };
    /**
     * Gets the catalog_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get catalog_BulkDeleteFailures() {
        return this._catalog_BulkDeleteFailures;
    };
    /**
     * Sets the catalog_BulkDeleteFailures property value. 
     * @param value Value to set for the catalog_BulkDeleteFailures property.
     */
    public set catalog_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._catalog_BulkDeleteFailures = value;
    };
    /**
     * Gets the catalog_CatalogAssignment property value. 
     * @returns a catalogassignment
     */
    public get catalog_CatalogAssignment() {
        return this._catalog_CatalogAssignment;
    };
    /**
     * Sets the catalog_CatalogAssignment property value. 
     * @param value Value to set for the Catalog_CatalogAssignment property.
     */
    public set catalog_CatalogAssignment(value: Catalogassignment[] | undefined) {
        this._catalog_CatalogAssignment = value;
    };
    /**
     * Gets the catalog_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get catalog_MailboxTrackingFolders() {
        return this._catalog_MailboxTrackingFolders;
    };
    /**
     * Sets the catalog_MailboxTrackingFolders property value. 
     * @param value Value to set for the catalog_MailboxTrackingFolders property.
     */
    public set catalog_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._catalog_MailboxTrackingFolders = value;
    };
    /**
     * Gets the catalog_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get catalog_PrincipalObjectAttributeAccesses() {
        return this._catalog_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the catalog_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the catalog_PrincipalObjectAttributeAccesses property.
     */
    public set catalog_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._catalog_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the catalog_ProcessSession property value. 
     * @returns a processsession
     */
    public get catalog_ProcessSession() {
        return this._catalog_ProcessSession;
    };
    /**
     * Sets the catalog_ProcessSession property value. 
     * @param value Value to set for the catalog_ProcessSession property.
     */
    public set catalog_ProcessSession(value: Processsession[] | undefined) {
        this._catalog_ProcessSession = value;
    };
    /**
     * Gets the catalog_SyncErrors property value. 
     * @returns a syncerror
     */
    public get catalog_SyncErrors() {
        return this._catalog_SyncErrors;
    };
    /**
     * Sets the catalog_SyncErrors property value. 
     * @param value Value to set for the catalog_SyncErrors property.
     */
    public set catalog_SyncErrors(value: Syncerror[] | undefined) {
        this._catalog_SyncErrors = value;
    };
    /**
     * Gets the catalogid property value. 
     * @returns a string
     */
    public get catalogid() {
        return this._catalogid;
    };
    /**
     * Sets the catalogid property value. 
     * @param value Value to set for the catalogid property.
     */
    public set catalogid(value: string | undefined) {
        this._catalogid = value;
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
     * Instantiates a new catalog and sets the default values.
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
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayname property value. 
     * @returns a string
     */
    public get displayname() {
        return this._displayname;
    };
    /**
     * Sets the displayname property value. 
     * @param value Value to set for the displayname property.
     */
    public set displayname(value: string | undefined) {
        this._displayname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Catalog)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Catalog)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Catalog)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Catalog)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Catalog)._organizationid_value = n.getStringValue(); },
            "_parentcatalogid_value": (o, n) => { (o as unknown as Catalog)._parentcatalogid_value = n.getStringValue(); },
            "catalog_AsyncOperations": (o, n) => { (o as unknown as Catalog).catalog_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "catalog_BulkDeleteFailures": (o, n) => { (o as unknown as Catalog).catalog_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "catalog_CatalogAssignment": (o, n) => { (o as unknown as Catalog).catalog_CatalogAssignment = n.getCollectionOfObjectValues<Catalogassignment>(createCatalogassignmentFromDiscriminatorValue); },
            "catalog_MailboxTrackingFolders": (o, n) => { (o as unknown as Catalog).catalog_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "catalog_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Catalog).catalog_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "catalog_ProcessSession": (o, n) => { (o as unknown as Catalog).catalog_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "catalog_SyncErrors": (o, n) => { (o as unknown as Catalog).catalog_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "catalogid": (o, n) => { (o as unknown as Catalog).catalogid = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Catalog).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Catalog).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Catalog).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Catalog).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Catalog).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Catalog).description = n.getStringValue(); },
            "displayname": (o, n) => { (o as unknown as Catalog).displayname = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Catalog).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Catalog).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Catalog).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Catalog).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Catalog).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Catalog).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Catalog).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Catalog).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Catalog).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Catalog).overwritetime = n.getDateValue(); },
            "parentCatalogId": (o, n) => { (o as unknown as Catalog).parentCatalogId = n.getObjectValue<Catalog>(createCatalogFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Catalog).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Catalog).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Catalog).statuscode = n.getNumberValue(); },
            "subCatalogs": (o, n) => { (o as unknown as Catalog).subCatalogs = n.getCollectionOfObjectValues<Catalog>(createCatalogFromDiscriminatorValue); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Catalog).timezoneruleversionnumber = n.getNumberValue(); },
            "uniquename": (o, n) => { (o as unknown as Catalog).uniquename = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Catalog).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Catalog).versionnumber = n.getNumberValue(); },
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
     * Gets the parentCatalogId property value. 
     * @returns a catalog
     */
    public get parentCatalogId() {
        return this._parentCatalogId;
    };
    /**
     * Sets the parentCatalogId property value. 
     * @param value Value to set for the ParentCatalogId property.
     */
    public set parentCatalogId(value: Catalog | undefined) {
        this._parentCatalogId = value;
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
        writer.writeStringValue("_parentcatalogid_value", this._parentcatalogid_value);
        writer.writeCollectionOfObjectValues<Asyncoperation>("catalog_AsyncOperations", this.catalog_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("catalog_BulkDeleteFailures", this.catalog_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Catalogassignment>("catalog_CatalogAssignment", this.catalog_CatalogAssignment);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("catalog_MailboxTrackingFolders", this.catalog_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("catalog_PrincipalObjectAttributeAccesses", this.catalog_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("catalog_ProcessSession", this.catalog_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("catalog_SyncErrors", this.catalog_SyncErrors);
        writer.writeStringValue("catalogid", this.catalogid);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayname", this.displayname);
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
        writer.writeObjectValue<Catalog>("parentCatalogId", this.parentCatalogId);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeCollectionOfObjectValues<Catalog>("subCatalogs", this.subCatalogs);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("uniquename", this.uniquename);
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
     * Gets the subCatalogs property value. 
     * @returns a catalog
     */
    public get subCatalogs() {
        return this._subCatalogs;
    };
    /**
     * Sets the subCatalogs property value. 
     * @param value Value to set for the SubCatalogs property.
     */
    public set subCatalogs(value: Catalog[] | undefined) {
        this._subCatalogs = value;
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
     * Gets the uniquename property value. 
     * @returns a string
     */
    public get uniquename() {
        return this._uniquename;
    };
    /**
     * Sets the uniquename property value. 
     * @param value Value to set for the uniquename property.
     */
    public set uniquename(value: string | undefined) {
        this._uniquename = value;
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
