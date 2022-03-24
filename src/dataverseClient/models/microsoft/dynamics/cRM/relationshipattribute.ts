import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createAttributeFromDiscriminatorValue} from './createAttributeFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createRelationshipFromDiscriminatorValue} from './createRelationshipFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {Asyncoperation, Attribute, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Relationship, Syncerror} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Relationshipattribute extends Crmbaseentity implements Parsable {
    private __organizationid_value?: string | undefined;
    private __referencedattributeid_value?: string | undefined;
    private __referencingattributeid_value?: string | undefined;
    private __relationshipid_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _referencedattributeid_relationshipattribute?: Attribute | undefined;
    private _referencingattributeid_relationshipattribute?: Attribute | undefined;
    private _relationshipattribute_AsyncOperations?: Asyncoperation[] | undefined;
    private _relationshipattribute_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _relationshipattribute_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _relationshipattribute_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _relationshipattribute_SyncErrors?: Syncerror[] | undefined;
    private _relationshipattributeid?: string | undefined;
    private _relationshipid_relationshipattribute?: Relationship | undefined;
    private _solutionid?: string | undefined;
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
     * Gets the _referencedattributeid_value property value. 
     * @returns a string
     */
    public get _referencedattributeid_value() {
        return this.__referencedattributeid_value;
    };
    /**
     * Sets the _referencedattributeid_value property value. 
     * @param value Value to set for the _referencedattributeid_value property.
     */
    public set _referencedattributeid_value(value: string | undefined) {
        this.__referencedattributeid_value = value;
    };
    /**
     * Gets the _referencingattributeid_value property value. 
     * @returns a string
     */
    public get _referencingattributeid_value() {
        return this.__referencingattributeid_value;
    };
    /**
     * Sets the _referencingattributeid_value property value. 
     * @param value Value to set for the _referencingattributeid_value property.
     */
    public set _referencingattributeid_value(value: string | undefined) {
        this.__referencingattributeid_value = value;
    };
    /**
     * Gets the _relationshipid_value property value. 
     * @returns a string
     */
    public get _relationshipid_value() {
        return this.__relationshipid_value;
    };
    /**
     * Sets the _relationshipid_value property value. 
     * @param value Value to set for the _relationshipid_value property.
     */
    public set _relationshipid_value(value: string | undefined) {
        this.__relationshipid_value = value;
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
     * Instantiates a new relationshipattribute and sets the default values.
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
            "_organizationid_value": (o, n) => { (o as unknown as Relationshipattribute)._organizationid_value = n.getStringValue(); },
            "_referencedattributeid_value": (o, n) => { (o as unknown as Relationshipattribute)._referencedattributeid_value = n.getStringValue(); },
            "_referencingattributeid_value": (o, n) => { (o as unknown as Relationshipattribute)._referencingattributeid_value = n.getStringValue(); },
            "_relationshipid_value": (o, n) => { (o as unknown as Relationshipattribute)._relationshipid_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Relationshipattribute).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Relationshipattribute).componentstate = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Relationshipattribute).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Relationshipattribute).ismanaged = n.getBooleanValue(); },
            "name": (o, n) => { (o as unknown as Relationshipattribute).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Relationshipattribute).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Relationshipattribute).overwritetime = n.getDateValue(); },
            "referencedattributeid_relationshipattribute": (o, n) => { (o as unknown as Relationshipattribute).referencedattributeid_relationshipattribute = n.getObjectValue<Attribute>(createAttributeFromDiscriminatorValue); },
            "referencingattributeid_relationshipattribute": (o, n) => { (o as unknown as Relationshipattribute).referencingattributeid_relationshipattribute = n.getObjectValue<Attribute>(createAttributeFromDiscriminatorValue); },
            "relationshipattribute_AsyncOperations": (o, n) => { (o as unknown as Relationshipattribute).relationshipattribute_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "relationshipattribute_BulkDeleteFailures": (o, n) => { (o as unknown as Relationshipattribute).relationshipattribute_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "relationshipattribute_MailboxTrackingFolders": (o, n) => { (o as unknown as Relationshipattribute).relationshipattribute_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "relationshipattribute_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Relationshipattribute).relationshipattribute_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "relationshipattribute_SyncErrors": (o, n) => { (o as unknown as Relationshipattribute).relationshipattribute_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "relationshipattributeid": (o, n) => { (o as unknown as Relationshipattribute).relationshipattributeid = n.getStringValue(); },
            "relationshipid_relationshipattribute": (o, n) => { (o as unknown as Relationshipattribute).relationshipid_relationshipattribute = n.getObjectValue<Relationship>(createRelationshipFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Relationshipattribute).solutionid = n.getStringValue(); },
        };
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
     * Gets the referencedattributeid_relationshipattribute property value. 
     * @returns a attribute
     */
    public get referencedattributeid_relationshipattribute() {
        return this._referencedattributeid_relationshipattribute;
    };
    /**
     * Sets the referencedattributeid_relationshipattribute property value. 
     * @param value Value to set for the referencedattributeid_relationshipattribute property.
     */
    public set referencedattributeid_relationshipattribute(value: Attribute | undefined) {
        this._referencedattributeid_relationshipattribute = value;
    };
    /**
     * Gets the referencingattributeid_relationshipattribute property value. 
     * @returns a attribute
     */
    public get referencingattributeid_relationshipattribute() {
        return this._referencingattributeid_relationshipattribute;
    };
    /**
     * Sets the referencingattributeid_relationshipattribute property value. 
     * @param value Value to set for the referencingattributeid_relationshipattribute property.
     */
    public set referencingattributeid_relationshipattribute(value: Attribute | undefined) {
        this._referencingattributeid_relationshipattribute = value;
    };
    /**
     * Gets the relationshipattribute_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get relationshipattribute_AsyncOperations() {
        return this._relationshipattribute_AsyncOperations;
    };
    /**
     * Sets the relationshipattribute_AsyncOperations property value. 
     * @param value Value to set for the relationshipattribute_AsyncOperations property.
     */
    public set relationshipattribute_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._relationshipattribute_AsyncOperations = value;
    };
    /**
     * Gets the relationshipattribute_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get relationshipattribute_BulkDeleteFailures() {
        return this._relationshipattribute_BulkDeleteFailures;
    };
    /**
     * Sets the relationshipattribute_BulkDeleteFailures property value. 
     * @param value Value to set for the relationshipattribute_BulkDeleteFailures property.
     */
    public set relationshipattribute_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._relationshipattribute_BulkDeleteFailures = value;
    };
    /**
     * Gets the relationshipattribute_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get relationshipattribute_MailboxTrackingFolders() {
        return this._relationshipattribute_MailboxTrackingFolders;
    };
    /**
     * Sets the relationshipattribute_MailboxTrackingFolders property value. 
     * @param value Value to set for the relationshipattribute_MailboxTrackingFolders property.
     */
    public set relationshipattribute_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._relationshipattribute_MailboxTrackingFolders = value;
    };
    /**
     * Gets the relationshipattribute_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get relationshipattribute_PrincipalObjectAttributeAccesses() {
        return this._relationshipattribute_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the relationshipattribute_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the relationshipattribute_PrincipalObjectAttributeAccesses property.
     */
    public set relationshipattribute_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._relationshipattribute_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the relationshipattribute_SyncErrors property value. 
     * @returns a syncerror
     */
    public get relationshipattribute_SyncErrors() {
        return this._relationshipattribute_SyncErrors;
    };
    /**
     * Sets the relationshipattribute_SyncErrors property value. 
     * @param value Value to set for the relationshipattribute_SyncErrors property.
     */
    public set relationshipattribute_SyncErrors(value: Syncerror[] | undefined) {
        this._relationshipattribute_SyncErrors = value;
    };
    /**
     * Gets the relationshipattributeid property value. 
     * @returns a string
     */
    public get relationshipattributeid() {
        return this._relationshipattributeid;
    };
    /**
     * Sets the relationshipattributeid property value. 
     * @param value Value to set for the relationshipattributeid property.
     */
    public set relationshipattributeid(value: string | undefined) {
        this._relationshipattributeid = value;
    };
    /**
     * Gets the relationshipid_relationshipattribute property value. 
     * @returns a relationship
     */
    public get relationshipid_relationshipattribute() {
        return this._relationshipid_relationshipattribute;
    };
    /**
     * Sets the relationshipid_relationshipattribute property value. 
     * @param value Value to set for the relationshipid_relationshipattribute property.
     */
    public set relationshipid_relationshipattribute(value: Relationship | undefined) {
        this._relationshipid_relationshipattribute = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_referencedattributeid_value", this._referencedattributeid_value);
        writer.writeStringValue("_referencingattributeid_value", this._referencingattributeid_value);
        writer.writeStringValue("_relationshipid_value", this._relationshipid_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Attribute>("referencedattributeid_relationshipattribute", this.referencedattributeid_relationshipattribute);
        writer.writeObjectValue<Attribute>("referencingattributeid_relationshipattribute", this.referencingattributeid_relationshipattribute);
        writer.writeCollectionOfObjectValues<Asyncoperation>("relationshipattribute_AsyncOperations", this.relationshipattribute_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("relationshipattribute_BulkDeleteFailures", this.relationshipattribute_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("relationshipattribute_MailboxTrackingFolders", this.relationshipattribute_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("relationshipattribute_PrincipalObjectAttributeAccesses", this.relationshipattribute_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("relationshipattribute_SyncErrors", this.relationshipattribute_SyncErrors);
        writer.writeStringValue("relationshipattributeid", this.relationshipattributeid);
        writer.writeObjectValue<Relationship>("relationshipid_relationshipattribute", this.relationshipid_relationshipattribute);
        writer.writeStringValue("solutionid", this.solutionid);
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
}
