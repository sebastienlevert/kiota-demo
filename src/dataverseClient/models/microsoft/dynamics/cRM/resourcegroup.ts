import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createConstraintbasedgroupFromDiscriminatorValue} from './createConstraintbasedgroupFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Constraintbasedgroup, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Syncerror, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Resourcegroup extends Crmbaseentity implements Parsable {
    private __businessunitid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _businessunitid?: Businessunit | undefined;
    private _grouptypecode?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _name?: string | undefined;
    private _objecttypecode?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _resourceGroup_AsyncOperations?: Asyncoperation[] | undefined;
    private _resourceGroup_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _resourcegroup_connections1?: Connection[] | undefined;
    private _resourcegroup_connections2?: Connection[] | undefined;
    private _resourceGroup_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _resourceGroup_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _resourcegroup_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _resourcegroup_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _resourceGroup_SyncErrors?: Syncerror[] | undefined;
    private _resourcegroupid?: string | undefined;
    private _resourcegroupid_constraintbasedgroup?: Constraintbasedgroup | undefined;
    private _resourcegroupid_team?: Team | undefined;
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
     * Gets the businessunitid property value. 
     * @returns a businessunit
     */
    public get businessunitid() {
        return this._businessunitid;
    };
    /**
     * Sets the businessunitid property value. 
     * @param value Value to set for the businessunitid property.
     */
    public set businessunitid(value: Businessunit | undefined) {
        this._businessunitid = value;
    };
    /**
     * Instantiates a new resourcegroup and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_businessunitid_value": (o, n) => { (o as unknown as Resourcegroup)._businessunitid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Resourcegroup)._organizationid_value = n.getStringValue(); },
            "businessunitid": (o, n) => { (o as unknown as Resourcegroup).businessunitid = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "grouptypecode": (o, n) => { (o as unknown as Resourcegroup).grouptypecode = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Resourcegroup).importsequencenumber = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Resourcegroup).name = n.getStringValue(); },
            "objecttypecode": (o, n) => { (o as unknown as Resourcegroup).objecttypecode = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Resourcegroup).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Resourcegroup).overriddencreatedon = n.getDateValue(); },
            "resourceGroup_AsyncOperations": (o, n) => { (o as unknown as Resourcegroup).resourceGroup_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "resourceGroup_BulkDeleteFailures": (o, n) => { (o as unknown as Resourcegroup).resourceGroup_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "resourcegroup_connections1": (o, n) => { (o as unknown as Resourcegroup).resourcegroup_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "resourcegroup_connections2": (o, n) => { (o as unknown as Resourcegroup).resourcegroup_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "resourceGroup_DuplicateBaseRecord": (o, n) => { (o as unknown as Resourcegroup).resourceGroup_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "resourceGroup_DuplicateMatchingRecord": (o, n) => { (o as unknown as Resourcegroup).resourceGroup_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "resourcegroup_MailboxTrackingFolders": (o, n) => { (o as unknown as Resourcegroup).resourcegroup_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "resourcegroup_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Resourcegroup).resourcegroup_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "resourceGroup_SyncErrors": (o, n) => { (o as unknown as Resourcegroup).resourceGroup_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "resourcegroupid": (o, n) => { (o as unknown as Resourcegroup).resourcegroupid = n.getStringValue(); },
            "resourcegroupid_constraintbasedgroup": (o, n) => { (o as unknown as Resourcegroup).resourcegroupid_constraintbasedgroup = n.getObjectValue<Constraintbasedgroup>(createConstraintbasedgroupFromDiscriminatorValue); },
            "resourcegroupid_team": (o, n) => { (o as unknown as Resourcegroup).resourcegroupid_team = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Resourcegroup).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Resourcegroup).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Resourcegroup).versionnumber = n.getNumberValue(); },
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
     * Gets the objecttypecode property value. 
     * @returns a string
     */
    public get objecttypecode() {
        return this._objecttypecode;
    };
    /**
     * Sets the objecttypecode property value. 
     * @param value Value to set for the objecttypecode property.
     */
    public set objecttypecode(value: string | undefined) {
        this._objecttypecode = value;
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
     * Gets the resourceGroup_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get resourceGroup_AsyncOperations() {
        return this._resourceGroup_AsyncOperations;
    };
    /**
     * Sets the resourceGroup_AsyncOperations property value. 
     * @param value Value to set for the ResourceGroup_AsyncOperations property.
     */
    public set resourceGroup_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._resourceGroup_AsyncOperations = value;
    };
    /**
     * Gets the resourceGroup_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get resourceGroup_BulkDeleteFailures() {
        return this._resourceGroup_BulkDeleteFailures;
    };
    /**
     * Sets the resourceGroup_BulkDeleteFailures property value. 
     * @param value Value to set for the ResourceGroup_BulkDeleteFailures property.
     */
    public set resourceGroup_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._resourceGroup_BulkDeleteFailures = value;
    };
    /**
     * Gets the resourcegroup_connections1 property value. 
     * @returns a connection
     */
    public get resourcegroup_connections1() {
        return this._resourcegroup_connections1;
    };
    /**
     * Sets the resourcegroup_connections1 property value. 
     * @param value Value to set for the resourcegroup_connections1 property.
     */
    public set resourcegroup_connections1(value: Connection[] | undefined) {
        this._resourcegroup_connections1 = value;
    };
    /**
     * Gets the resourcegroup_connections2 property value. 
     * @returns a connection
     */
    public get resourcegroup_connections2() {
        return this._resourcegroup_connections2;
    };
    /**
     * Sets the resourcegroup_connections2 property value. 
     * @param value Value to set for the resourcegroup_connections2 property.
     */
    public set resourcegroup_connections2(value: Connection[] | undefined) {
        this._resourcegroup_connections2 = value;
    };
    /**
     * Gets the resourceGroup_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get resourceGroup_DuplicateBaseRecord() {
        return this._resourceGroup_DuplicateBaseRecord;
    };
    /**
     * Sets the resourceGroup_DuplicateBaseRecord property value. 
     * @param value Value to set for the ResourceGroup_DuplicateBaseRecord property.
     */
    public set resourceGroup_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._resourceGroup_DuplicateBaseRecord = value;
    };
    /**
     * Gets the resourceGroup_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get resourceGroup_DuplicateMatchingRecord() {
        return this._resourceGroup_DuplicateMatchingRecord;
    };
    /**
     * Sets the resourceGroup_DuplicateMatchingRecord property value. 
     * @param value Value to set for the ResourceGroup_DuplicateMatchingRecord property.
     */
    public set resourceGroup_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._resourceGroup_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the resourcegroup_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get resourcegroup_MailboxTrackingFolders() {
        return this._resourcegroup_MailboxTrackingFolders;
    };
    /**
     * Sets the resourcegroup_MailboxTrackingFolders property value. 
     * @param value Value to set for the resourcegroup_MailboxTrackingFolders property.
     */
    public set resourcegroup_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._resourcegroup_MailboxTrackingFolders = value;
    };
    /**
     * Gets the resourcegroup_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get resourcegroup_PrincipalObjectAttributeAccesses() {
        return this._resourcegroup_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the resourcegroup_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the resourcegroup_PrincipalObjectAttributeAccesses property.
     */
    public set resourcegroup_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._resourcegroup_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the resourceGroup_SyncErrors property value. 
     * @returns a syncerror
     */
    public get resourceGroup_SyncErrors() {
        return this._resourceGroup_SyncErrors;
    };
    /**
     * Sets the resourceGroup_SyncErrors property value. 
     * @param value Value to set for the ResourceGroup_SyncErrors property.
     */
    public set resourceGroup_SyncErrors(value: Syncerror[] | undefined) {
        this._resourceGroup_SyncErrors = value;
    };
    /**
     * Gets the resourcegroupid property value. 
     * @returns a string
     */
    public get resourcegroupid() {
        return this._resourcegroupid;
    };
    /**
     * Sets the resourcegroupid property value. 
     * @param value Value to set for the resourcegroupid property.
     */
    public set resourcegroupid(value: string | undefined) {
        this._resourcegroupid = value;
    };
    /**
     * Gets the resourcegroupid_constraintbasedgroup property value. 
     * @returns a constraintbasedgroup
     */
    public get resourcegroupid_constraintbasedgroup() {
        return this._resourcegroupid_constraintbasedgroup;
    };
    /**
     * Sets the resourcegroupid_constraintbasedgroup property value. 
     * @param value Value to set for the resourcegroupid_constraintbasedgroup property.
     */
    public set resourcegroupid_constraintbasedgroup(value: Constraintbasedgroup | undefined) {
        this._resourcegroupid_constraintbasedgroup = value;
    };
    /**
     * Gets the resourcegroupid_team property value. 
     * @returns a team
     */
    public get resourcegroupid_team() {
        return this._resourcegroupid_team;
    };
    /**
     * Sets the resourcegroupid_team property value. 
     * @param value Value to set for the resourcegroupid_team property.
     */
    public set resourcegroupid_team(value: Team | undefined) {
        this._resourcegroupid_team = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_businessunitid_value", this._businessunitid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Businessunit>("businessunitid", this.businessunitid);
        writer.writeNumberValue("grouptypecode", this.grouptypecode);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("objecttypecode", this.objecttypecode);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeCollectionOfObjectValues<Asyncoperation>("resourceGroup_AsyncOperations", this.resourceGroup_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("resourceGroup_BulkDeleteFailures", this.resourceGroup_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("resourcegroup_connections1", this.resourcegroup_connections1);
        writer.writeCollectionOfObjectValues<Connection>("resourcegroup_connections2", this.resourcegroup_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("resourceGroup_DuplicateBaseRecord", this.resourceGroup_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("resourceGroup_DuplicateMatchingRecord", this.resourceGroup_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("resourcegroup_MailboxTrackingFolders", this.resourcegroup_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("resourcegroup_PrincipalObjectAttributeAccesses", this.resourcegroup_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("resourceGroup_SyncErrors", this.resourceGroup_SyncErrors);
        writer.writeStringValue("resourcegroupid", this.resourcegroupid);
        writer.writeObjectValue<Constraintbasedgroup>("resourcegroupid_constraintbasedgroup", this.resourcegroupid_constraintbasedgroup);
        writer.writeObjectValue<Team>("resourcegroupid_team", this.resourcegroupid_team);
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
