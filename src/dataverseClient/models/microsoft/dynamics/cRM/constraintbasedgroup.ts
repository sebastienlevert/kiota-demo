import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createResourcegroupFromDiscriminatorValue} from './createResourcegroupFromDiscriminatorValue';
import {createResourcespecFromDiscriminatorValue} from './createResourcespecFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createVirtualresourcegroupresourceFromDiscriminatorValue} from './createVirtualresourcegroupresourceFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Resourcegroup, Resourcespec, Syncerror, Systemuser, Virtualresourcegroupresource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Constraintbasedgroup extends Crmbaseentity implements Parsable {
    private __businessunitid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _businessunitid_businessunit?: Businessunit | undefined;
    private _businessunitid_systemuser?: Systemuser | undefined;
    private _constraint_based_group_resource_specs?: Resourcespec[] | undefined;
    private _constraintBasedGroup_AsyncOperations?: Asyncoperation[] | undefined;
    private _constraintBasedGroup_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _constraintbasedgroup_connections1?: Connection[] | undefined;
    private _constraintbasedgroup_connections2?: Connection[] | undefined;
    private _constraintbasedgroup_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _constraintbasedgroup_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _constraintBasedGroup_ProcessSessions?: Processsession[] | undefined;
    private _constraintbasedgroup_resource_groups?: Resourcegroup[] | undefined;
    private _constraintbasedgroup_SyncErrors?: Syncerror[] | undefined;
    private _constraintbasedgroup_virtualresourceg?: Virtualresourcegroupresource[] | undefined;
    private _constraintbasedgroupid?: string | undefined;
    private _constraints?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _grouptypecode?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _businessunitid_value property value. 
     * @returns a string
     */
    public get _businessunitid_value() {
        return this.__businessunitid_value;
    };
    /**
     * Sets the _businessunitid_value property value. 
     * @param value Value to set for the _businessunitid_value property.
     */
    public set _businessunitid_value(value: string | undefined) {
        this.__businessunitid_value = value;
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
     * Gets the businessunitid_businessunit property value. 
     * @returns a businessunit
     */
    public get businessunitid_businessunit() {
        return this._businessunitid_businessunit;
    };
    /**
     * Sets the businessunitid_businessunit property value. 
     * @param value Value to set for the businessunitid_businessunit property.
     */
    public set businessunitid_businessunit(value: Businessunit | undefined) {
        this._businessunitid_businessunit = value;
    };
    /**
     * Gets the businessunitid_systemuser property value. 
     * @returns a systemuser
     */
    public get businessunitid_systemuser() {
        return this._businessunitid_systemuser;
    };
    /**
     * Sets the businessunitid_systemuser property value. 
     * @param value Value to set for the businessunitid_systemuser property.
     */
    public set businessunitid_systemuser(value: Systemuser | undefined) {
        this._businessunitid_systemuser = value;
    };
    /**
     * Gets the constraint_based_group_resource_specs property value. 
     * @returns a resourcespec
     */
    public get constraint_based_group_resource_specs() {
        return this._constraint_based_group_resource_specs;
    };
    /**
     * Sets the constraint_based_group_resource_specs property value. 
     * @param value Value to set for the constraint_based_group_resource_specs property.
     */
    public set constraint_based_group_resource_specs(value: Resourcespec[] | undefined) {
        this._constraint_based_group_resource_specs = value;
    };
    /**
     * Gets the constraintBasedGroup_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get constraintBasedGroup_AsyncOperations() {
        return this._constraintBasedGroup_AsyncOperations;
    };
    /**
     * Sets the constraintBasedGroup_AsyncOperations property value. 
     * @param value Value to set for the ConstraintBasedGroup_AsyncOperations property.
     */
    public set constraintBasedGroup_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._constraintBasedGroup_AsyncOperations = value;
    };
    /**
     * Gets the constraintBasedGroup_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get constraintBasedGroup_BulkDeleteFailures() {
        return this._constraintBasedGroup_BulkDeleteFailures;
    };
    /**
     * Sets the constraintBasedGroup_BulkDeleteFailures property value. 
     * @param value Value to set for the ConstraintBasedGroup_BulkDeleteFailures property.
     */
    public set constraintBasedGroup_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._constraintBasedGroup_BulkDeleteFailures = value;
    };
    /**
     * Gets the constraintbasedgroup_connections1 property value. 
     * @returns a connection
     */
    public get constraintbasedgroup_connections1() {
        return this._constraintbasedgroup_connections1;
    };
    /**
     * Sets the constraintbasedgroup_connections1 property value. 
     * @param value Value to set for the constraintbasedgroup_connections1 property.
     */
    public set constraintbasedgroup_connections1(value: Connection[] | undefined) {
        this._constraintbasedgroup_connections1 = value;
    };
    /**
     * Gets the constraintbasedgroup_connections2 property value. 
     * @returns a connection
     */
    public get constraintbasedgroup_connections2() {
        return this._constraintbasedgroup_connections2;
    };
    /**
     * Sets the constraintbasedgroup_connections2 property value. 
     * @param value Value to set for the constraintbasedgroup_connections2 property.
     */
    public set constraintbasedgroup_connections2(value: Connection[] | undefined) {
        this._constraintbasedgroup_connections2 = value;
    };
    /**
     * Gets the constraintbasedgroup_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get constraintbasedgroup_MailboxTrackingFolders() {
        return this._constraintbasedgroup_MailboxTrackingFolders;
    };
    /**
     * Sets the constraintbasedgroup_MailboxTrackingFolders property value. 
     * @param value Value to set for the constraintbasedgroup_MailboxTrackingFolders property.
     */
    public set constraintbasedgroup_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._constraintbasedgroup_MailboxTrackingFolders = value;
    };
    /**
     * Gets the constraintbasedgroup_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get constraintbasedgroup_PrincipalObjectAttributeAccesses() {
        return this._constraintbasedgroup_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the constraintbasedgroup_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the constraintbasedgroup_PrincipalObjectAttributeAccesses property.
     */
    public set constraintbasedgroup_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._constraintbasedgroup_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the constraintBasedGroup_ProcessSessions property value. 
     * @returns a processsession
     */
    public get constraintBasedGroup_ProcessSessions() {
        return this._constraintBasedGroup_ProcessSessions;
    };
    /**
     * Sets the constraintBasedGroup_ProcessSessions property value. 
     * @param value Value to set for the ConstraintBasedGroup_ProcessSessions property.
     */
    public set constraintBasedGroup_ProcessSessions(value: Processsession[] | undefined) {
        this._constraintBasedGroup_ProcessSessions = value;
    };
    /**
     * Gets the constraintbasedgroup_resource_groups property value. 
     * @returns a resourcegroup
     */
    public get constraintbasedgroup_resource_groups() {
        return this._constraintbasedgroup_resource_groups;
    };
    /**
     * Sets the constraintbasedgroup_resource_groups property value. 
     * @param value Value to set for the constraintbasedgroup_resource_groups property.
     */
    public set constraintbasedgroup_resource_groups(value: Resourcegroup[] | undefined) {
        this._constraintbasedgroup_resource_groups = value;
    };
    /**
     * Gets the constraintbasedgroup_SyncErrors property value. 
     * @returns a syncerror
     */
    public get constraintbasedgroup_SyncErrors() {
        return this._constraintbasedgroup_SyncErrors;
    };
    /**
     * Sets the constraintbasedgroup_SyncErrors property value. 
     * @param value Value to set for the constraintbasedgroup_SyncErrors property.
     */
    public set constraintbasedgroup_SyncErrors(value: Syncerror[] | undefined) {
        this._constraintbasedgroup_SyncErrors = value;
    };
    /**
     * Gets the constraintbasedgroup_virtualresourceg property value. 
     * @returns a virtualresourcegroupresource
     */
    public get constraintbasedgroup_virtualresourceg() {
        return this._constraintbasedgroup_virtualresourceg;
    };
    /**
     * Sets the constraintbasedgroup_virtualresourceg property value. 
     * @param value Value to set for the constraintbasedgroup_virtualresourceg property.
     */
    public set constraintbasedgroup_virtualresourceg(value: Virtualresourcegroupresource[] | undefined) {
        this._constraintbasedgroup_virtualresourceg = value;
    };
    /**
     * Gets the constraintbasedgroupid property value. 
     * @returns a string
     */
    public get constraintbasedgroupid() {
        return this._constraintbasedgroupid;
    };
    /**
     * Sets the constraintbasedgroupid property value. 
     * @param value Value to set for the constraintbasedgroupid property.
     */
    public set constraintbasedgroupid(value: string | undefined) {
        this._constraintbasedgroupid = value;
    };
    /**
     * Gets the constraints property value. 
     * @returns a string
     */
    public get constraints() {
        return this._constraints;
    };
    /**
     * Sets the constraints property value. 
     * @param value Value to set for the constraints property.
     */
    public set constraints(value: string | undefined) {
        this._constraints = value;
    };
    /**
     * Instantiates a new constraintbasedgroup and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_businessunitid_value": (o, n) => { (o as unknown as Constraintbasedgroup)._businessunitid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Constraintbasedgroup)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Constraintbasedgroup)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Constraintbasedgroup)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Constraintbasedgroup)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Constraintbasedgroup)._organizationid_value = n.getStringValue(); },
            "businessunitid_businessunit": (o, n) => { (o as unknown as Constraintbasedgroup).businessunitid_businessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "businessunitid_systemuser": (o, n) => { (o as unknown as Constraintbasedgroup).businessunitid_systemuser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "constraint_based_group_resource_specs": (o, n) => { (o as unknown as Constraintbasedgroup).constraint_based_group_resource_specs = n.getCollectionOfObjectValues<Resourcespec>(createResourcespecFromDiscriminatorValue); },
            "constraintBasedGroup_AsyncOperations": (o, n) => { (o as unknown as Constraintbasedgroup).constraintBasedGroup_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "constraintBasedGroup_BulkDeleteFailures": (o, n) => { (o as unknown as Constraintbasedgroup).constraintBasedGroup_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "constraintbasedgroup_connections1": (o, n) => { (o as unknown as Constraintbasedgroup).constraintbasedgroup_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "constraintbasedgroup_connections2": (o, n) => { (o as unknown as Constraintbasedgroup).constraintbasedgroup_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "constraintbasedgroup_MailboxTrackingFolders": (o, n) => { (o as unknown as Constraintbasedgroup).constraintbasedgroup_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "constraintbasedgroup_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Constraintbasedgroup).constraintbasedgroup_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "constraintBasedGroup_ProcessSessions": (o, n) => { (o as unknown as Constraintbasedgroup).constraintBasedGroup_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "constraintbasedgroup_resource_groups": (o, n) => { (o as unknown as Constraintbasedgroup).constraintbasedgroup_resource_groups = n.getCollectionOfObjectValues<Resourcegroup>(createResourcegroupFromDiscriminatorValue); },
            "constraintbasedgroup_SyncErrors": (o, n) => { (o as unknown as Constraintbasedgroup).constraintbasedgroup_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "constraintbasedgroup_virtualresourceg": (o, n) => { (o as unknown as Constraintbasedgroup).constraintbasedgroup_virtualresourceg = n.getCollectionOfObjectValues<Virtualresourcegroupresource>(createVirtualresourcegroupresourceFromDiscriminatorValue); },
            "constraintbasedgroupid": (o, n) => { (o as unknown as Constraintbasedgroup).constraintbasedgroupid = n.getStringValue(); },
            "constraints": (o, n) => { (o as unknown as Constraintbasedgroup).constraints = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Constraintbasedgroup).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Constraintbasedgroup).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Constraintbasedgroup).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Constraintbasedgroup).description = n.getStringValue(); },
            "grouptypecode": (o, n) => { (o as unknown as Constraintbasedgroup).grouptypecode = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Constraintbasedgroup).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Constraintbasedgroup).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Constraintbasedgroup).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Constraintbasedgroup).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Constraintbasedgroup).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Constraintbasedgroup).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Constraintbasedgroup).overriddencreatedon = n.getDateValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Constraintbasedgroup).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Constraintbasedgroup).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Constraintbasedgroup).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the grouptypecode property value. 
     * @returns a integer
     */
    public get grouptypecode() {
        return this._grouptypecode;
    };
    /**
     * Sets the grouptypecode property value. 
     * @param value Value to set for the grouptypecode property.
     */
    public set grouptypecode(value: number | undefined) {
        this._grouptypecode = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_businessunitid_value", this._businessunitid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Businessunit>("businessunitid_businessunit", this.businessunitid_businessunit);
        writer.writeObjectValue<Systemuser>("businessunitid_systemuser", this.businessunitid_systemuser);
        writer.writeCollectionOfObjectValues<Resourcespec>("constraint_based_group_resource_specs", this.constraint_based_group_resource_specs);
        writer.writeCollectionOfObjectValues<Asyncoperation>("constraintBasedGroup_AsyncOperations", this.constraintBasedGroup_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("constraintBasedGroup_BulkDeleteFailures", this.constraintBasedGroup_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("constraintbasedgroup_connections1", this.constraintbasedgroup_connections1);
        writer.writeCollectionOfObjectValues<Connection>("constraintbasedgroup_connections2", this.constraintbasedgroup_connections2);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("constraintbasedgroup_MailboxTrackingFolders", this.constraintbasedgroup_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("constraintbasedgroup_PrincipalObjectAttributeAccesses", this.constraintbasedgroup_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("constraintBasedGroup_ProcessSessions", this.constraintBasedGroup_ProcessSessions);
        writer.writeCollectionOfObjectValues<Resourcegroup>("constraintbasedgroup_resource_groups", this.constraintbasedgroup_resource_groups);
        writer.writeCollectionOfObjectValues<Syncerror>("constraintbasedgroup_SyncErrors", this.constraintbasedgroup_SyncErrors);
        writer.writeCollectionOfObjectValues<Virtualresourcegroupresource>("constraintbasedgroup_virtualresourceg", this.constraintbasedgroup_virtualresourceg);
        writer.writeStringValue("constraintbasedgroupid", this.constraintbasedgroupid);
        writer.writeStringValue("constraints", this.constraints);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("grouptypecode", this.grouptypecode);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
