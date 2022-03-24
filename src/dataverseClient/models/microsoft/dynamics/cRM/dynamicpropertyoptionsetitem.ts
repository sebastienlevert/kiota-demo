import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDynamicpropertyFromDiscriminatorValue} from './createDynamicpropertyFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Dynamicproperty, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Dynamicpropertyoptionsetitem extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __dynamicpropertyid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _defaultValueOptionSet_DynamicProperty?: Dynamicproperty[] | undefined;
    private _dmtimportstate?: number | undefined;
    private _dynamicpropertyid?: Dynamicproperty | undefined;
    private _dynamicpropertyoptiondescription?: string | undefined;
    private _dynamicpropertyoptionname?: string | undefined;
    private _dynamicpropertyoptionsetitem_AsyncOperations?: Asyncoperation[] | undefined;
    private _dynamicpropertyoptionsetitem_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _dynamicpropertyoptionsetitem_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _dynamicpropertyoptionsetitem_SyncErrors?: Syncerror[] | undefined;
    private _dynamicpropertyoptionsetvalueid?: string | undefined;
    private _dynamicpropertyoptionsetvaluesequencenumber?: number | undefined;
    private _dynamicpropertyoptionvalue?: number | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _dynamicpropertyid_value property value. 
     * @returns a string
     */
    public get _dynamicpropertyid_value() {
        return this.__dynamicpropertyid_value;
    };
    /**
     * Sets the _dynamicpropertyid_value property value. 
     * @param value Value to set for the _dynamicpropertyid_value property.
     */
    public set _dynamicpropertyid_value(value: string | undefined) {
        this.__dynamicpropertyid_value = value;
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
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Instantiates a new dynamicpropertyoptionsetitem and sets the default values.
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
     * Gets the defaultValueOptionSet_DynamicProperty property value. 
     * @returns a dynamicproperty
     */
    public get defaultValueOptionSet_DynamicProperty() {
        return this._defaultValueOptionSet_DynamicProperty;
    };
    /**
     * Sets the defaultValueOptionSet_DynamicProperty property value. 
     * @param value Value to set for the DefaultValueOptionSet_DynamicProperty property.
     */
    public set defaultValueOptionSet_DynamicProperty(value: Dynamicproperty[] | undefined) {
        this._defaultValueOptionSet_DynamicProperty = value;
    };
    /**
     * Gets the dmtimportstate property value. 
     * @returns a integer
     */
    public get dmtimportstate() {
        return this._dmtimportstate;
    };
    /**
     * Sets the dmtimportstate property value. 
     * @param value Value to set for the dmtimportstate property.
     */
    public set dmtimportstate(value: number | undefined) {
        this._dmtimportstate = value;
    };
    /**
     * Gets the dynamicpropertyid property value. 
     * @returns a dynamicproperty
     */
    public get dynamicpropertyid() {
        return this._dynamicpropertyid;
    };
    /**
     * Sets the dynamicpropertyid property value. 
     * @param value Value to set for the dynamicpropertyid property.
     */
    public set dynamicpropertyid(value: Dynamicproperty | undefined) {
        this._dynamicpropertyid = value;
    };
    /**
     * Gets the dynamicpropertyoptiondescription property value. 
     * @returns a string
     */
    public get dynamicpropertyoptiondescription() {
        return this._dynamicpropertyoptiondescription;
    };
    /**
     * Sets the dynamicpropertyoptiondescription property value. 
     * @param value Value to set for the dynamicpropertyoptiondescription property.
     */
    public set dynamicpropertyoptiondescription(value: string | undefined) {
        this._dynamicpropertyoptiondescription = value;
    };
    /**
     * Gets the dynamicpropertyoptionname property value. 
     * @returns a string
     */
    public get dynamicpropertyoptionname() {
        return this._dynamicpropertyoptionname;
    };
    /**
     * Sets the dynamicpropertyoptionname property value. 
     * @param value Value to set for the dynamicpropertyoptionname property.
     */
    public set dynamicpropertyoptionname(value: string | undefined) {
        this._dynamicpropertyoptionname = value;
    };
    /**
     * Gets the dynamicpropertyoptionsetitem_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get dynamicpropertyoptionsetitem_AsyncOperations() {
        return this._dynamicpropertyoptionsetitem_AsyncOperations;
    };
    /**
     * Sets the dynamicpropertyoptionsetitem_AsyncOperations property value. 
     * @param value Value to set for the dynamicpropertyoptionsetitem_AsyncOperations property.
     */
    public set dynamicpropertyoptionsetitem_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._dynamicpropertyoptionsetitem_AsyncOperations = value;
    };
    /**
     * Gets the dynamicpropertyoptionsetitem_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get dynamicpropertyoptionsetitem_BulkDeleteFailures() {
        return this._dynamicpropertyoptionsetitem_BulkDeleteFailures;
    };
    /**
     * Sets the dynamicpropertyoptionsetitem_BulkDeleteFailures property value. 
     * @param value Value to set for the dynamicpropertyoptionsetitem_BulkDeleteFailures property.
     */
    public set dynamicpropertyoptionsetitem_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._dynamicpropertyoptionsetitem_BulkDeleteFailures = value;
    };
    /**
     * Gets the dynamicpropertyoptionsetitem_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get dynamicpropertyoptionsetitem_MailboxTrackingFolders() {
        return this._dynamicpropertyoptionsetitem_MailboxTrackingFolders;
    };
    /**
     * Sets the dynamicpropertyoptionsetitem_MailboxTrackingFolders property value. 
     * @param value Value to set for the dynamicpropertyoptionsetitem_MailboxTrackingFolders property.
     */
    public set dynamicpropertyoptionsetitem_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._dynamicpropertyoptionsetitem_MailboxTrackingFolders = value;
    };
    /**
     * Gets the dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses() {
        return this._dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses property.
     */
    public set dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the dynamicpropertyoptionsetitem_SyncErrors property value. 
     * @returns a syncerror
     */
    public get dynamicpropertyoptionsetitem_SyncErrors() {
        return this._dynamicpropertyoptionsetitem_SyncErrors;
    };
    /**
     * Sets the dynamicpropertyoptionsetitem_SyncErrors property value. 
     * @param value Value to set for the dynamicpropertyoptionsetitem_SyncErrors property.
     */
    public set dynamicpropertyoptionsetitem_SyncErrors(value: Syncerror[] | undefined) {
        this._dynamicpropertyoptionsetitem_SyncErrors = value;
    };
    /**
     * Gets the dynamicpropertyoptionsetvalueid property value. 
     * @returns a string
     */
    public get dynamicpropertyoptionsetvalueid() {
        return this._dynamicpropertyoptionsetvalueid;
    };
    /**
     * Sets the dynamicpropertyoptionsetvalueid property value. 
     * @param value Value to set for the dynamicpropertyoptionsetvalueid property.
     */
    public set dynamicpropertyoptionsetvalueid(value: string | undefined) {
        this._dynamicpropertyoptionsetvalueid = value;
    };
    /**
     * Gets the dynamicpropertyoptionsetvaluesequencenumber property value. 
     * @returns a integer
     */
    public get dynamicpropertyoptionsetvaluesequencenumber() {
        return this._dynamicpropertyoptionsetvaluesequencenumber;
    };
    /**
     * Sets the dynamicpropertyoptionsetvaluesequencenumber property value. 
     * @param value Value to set for the dynamicpropertyoptionsetvaluesequencenumber property.
     */
    public set dynamicpropertyoptionsetvaluesequencenumber(value: number | undefined) {
        this._dynamicpropertyoptionsetvaluesequencenumber = value;
    };
    /**
     * Gets the dynamicpropertyoptionvalue property value. 
     * @returns a integer
     */
    public get dynamicpropertyoptionvalue() {
        return this._dynamicpropertyoptionvalue;
    };
    /**
     * Sets the dynamicpropertyoptionvalue property value. 
     * @param value Value to set for the dynamicpropertyoptionvalue property.
     */
    public set dynamicpropertyoptionvalue(value: number | undefined) {
        this._dynamicpropertyoptionvalue = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem)._createdonbehalfby_value = n.getStringValue(); },
            "_dynamicpropertyid_value": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem)._dynamicpropertyid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem)._organizationid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "defaultValueOptionSet_DynamicProperty": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).defaultValueOptionSet_DynamicProperty = n.getCollectionOfObjectValues<Dynamicproperty>(createDynamicpropertyFromDiscriminatorValue); },
            "dmtimportstate": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).dmtimportstate = n.getNumberValue(); },
            "dynamicpropertyid": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).dynamicpropertyid = n.getObjectValue<Dynamicproperty>(createDynamicpropertyFromDiscriminatorValue); },
            "dynamicpropertyoptiondescription": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).dynamicpropertyoptiondescription = n.getStringValue(); },
            "dynamicpropertyoptionname": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).dynamicpropertyoptionname = n.getStringValue(); },
            "dynamicpropertyoptionsetitem_AsyncOperations": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).dynamicpropertyoptionsetitem_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "dynamicpropertyoptionsetitem_BulkDeleteFailures": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).dynamicpropertyoptionsetitem_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "dynamicpropertyoptionsetitem_MailboxTrackingFolders": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).dynamicpropertyoptionsetitem_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "dynamicpropertyoptionsetitem_SyncErrors": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).dynamicpropertyoptionsetitem_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "dynamicpropertyoptionsetvalueid": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).dynamicpropertyoptionsetvalueid = n.getStringValue(); },
            "dynamicpropertyoptionsetvaluesequencenumber": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).dynamicpropertyoptionsetvaluesequencenumber = n.getNumberValue(); },
            "dynamicpropertyoptionvalue": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).dynamicpropertyoptionvalue = n.getNumberValue(); },
            "exchangerate": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).overriddencreatedon = n.getDateValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Dynamicpropertyoptionsetitem).versionnumber = n.getNumberValue(); },
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
        writer.writeStringValue("_dynamicpropertyid_value", this._dynamicpropertyid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Dynamicproperty>("defaultValueOptionSet_DynamicProperty", this.defaultValueOptionSet_DynamicProperty);
        writer.writeNumberValue("dmtimportstate", this.dmtimportstate);
        writer.writeObjectValue<Dynamicproperty>("dynamicpropertyid", this.dynamicpropertyid);
        writer.writeStringValue("dynamicpropertyoptiondescription", this.dynamicpropertyoptiondescription);
        writer.writeStringValue("dynamicpropertyoptionname", this.dynamicpropertyoptionname);
        writer.writeCollectionOfObjectValues<Asyncoperation>("dynamicpropertyoptionsetitem_AsyncOperations", this.dynamicpropertyoptionsetitem_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("dynamicpropertyoptionsetitem_BulkDeleteFailures", this.dynamicpropertyoptionsetitem_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("dynamicpropertyoptionsetitem_MailboxTrackingFolders", this.dynamicpropertyoptionsetitem_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses", this.dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("dynamicpropertyoptionsetitem_SyncErrors", this.dynamicpropertyoptionsetitem_SyncErrors);
        writer.writeStringValue("dynamicpropertyoptionsetvalueid", this.dynamicpropertyoptionsetvalueid);
        writer.writeNumberValue("dynamicpropertyoptionsetvaluesequencenumber", this.dynamicpropertyoptionsetvaluesequencenumber);
        writer.writeNumberValue("dynamicpropertyoptionvalue", this.dynamicpropertyoptionvalue);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
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
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
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
