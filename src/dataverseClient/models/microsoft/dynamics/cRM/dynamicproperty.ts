import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDynamicpropertyassociationFromDiscriminatorValue} from './createDynamicpropertyassociationFromDiscriminatorValue';
import {createDynamicpropertyFromDiscriminatorValue} from './createDynamicpropertyFromDiscriminatorValue';
import {createDynamicpropertyinstanceFromDiscriminatorValue} from './createDynamicpropertyinstanceFromDiscriminatorValue';
import {createDynamicpropertyoptionsetitemFromDiscriminatorValue} from './createDynamicpropertyoptionsetitemFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_fieldcomputationFromDiscriminatorValue} from './createMsdyn_fieldcomputationFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProductassociationFromDiscriminatorValue} from './createProductassociationFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Dynamicpropertyassociation, Dynamicpropertyinstance, Dynamicpropertyoptionsetitem, Mailboxtrackingfolder, Msdyn_fieldcomputation, Organization, Principalobjectattributeaccess, Product, Productassociation, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Dynamicproperty extends Crmbaseentity implements Parsable {
    private __basedynamicpropertyid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __defaultvalueoptionset_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private _basedynamicpropertyid?: Dynamicproperty | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _datatype?: number | undefined;
    private _defaultattributevalue?: string | undefined;
    private _defaultvaluedecimal?: number | undefined;
    private _defaultvaluedouble?: number | undefined;
    private _defaultvalueinteger?: number | undefined;
    private _defaultvaluestring?: string | undefined;
    private _description?: string | undefined;
    private _dmtimportstate?: number | undefined;
    private _dynamicproperty_AsyncOperations?: Asyncoperation[] | undefined;
    private _dynamicproperty_base_dynamicproperty?: Dynamicproperty[] | undefined;
    private _dynamicproperty_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _dynamicproperty_DynamicPropertyAssociation?: Dynamicpropertyassociation[] | undefined;
    private _dynamicProperty_DynamicPropertyInstance?: Dynamicpropertyinstance[] | undefined;
    private _dynamicProperty_DynamicPropertyOptionSetItem?: Dynamicpropertyoptionsetitem[] | undefined;
    private _dynamicproperty_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _dynamicproperty_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _dynamicproperty_SyncErrors?: Syncerror[] | undefined;
    private _dynamicpropertyid?: string | undefined;
    private _dynamicpropertyoptionsetvalueid?: Dynamicpropertyoptionsetitem | undefined;
    private _importsequencenumber?: number | undefined;
    private _ishidden?: boolean | undefined;
    private _isreadonly?: boolean | undefined;
    private _isrequired?: boolean | undefined;
    private _maxlengthstring?: number | undefined;
    private _maxvaluedecimal?: number | undefined;
    private _maxvaluedouble?: number | undefined;
    private _maxvalueinteger?: number | undefined;
    private _minvaluedecimal?: number | undefined;
    private _minvaluedouble?: number | undefined;
    private _minvalueinteger?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_dynamicproperty_msdyn_fieldcomputation_PropertyId?: Msdyn_fieldcomputation[] | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwrittendynamicpropertyid?: string | undefined;
    private _precision?: number | undefined;
    private _regardingobjectid_product?: Product | undefined;
    private _regardingobjectid_productassociation?: Productassociation | undefined;
    private _rootdynamicpropertyid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _basedynamicpropertyid_value property value. 
     * @returns a string
     */
    public get _basedynamicpropertyid_value() {
        return this.__basedynamicpropertyid_value;
    };
    /**
     * Sets the _basedynamicpropertyid_value property value. 
     * @param value Value to set for the _basedynamicpropertyid_value property.
     */
    public set _basedynamicpropertyid_value(value: string | undefined) {
        this.__basedynamicpropertyid_value = value;
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
     * Gets the _defaultvalueoptionset_value property value. 
     * @returns a string
     */
    public get _defaultvalueoptionset_value() {
        return this.__defaultvalueoptionset_value;
    };
    /**
     * Sets the _defaultvalueoptionset_value property value. 
     * @param value Value to set for the _defaultvalueoptionset_value property.
     */
    public set _defaultvalueoptionset_value(value: string | undefined) {
        this.__defaultvalueoptionset_value = value;
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
     * Gets the _regardingobjectid_value property value. 
     * @returns a string
     */
    public get _regardingobjectid_value() {
        return this.__regardingobjectid_value;
    };
    /**
     * Sets the _regardingobjectid_value property value. 
     * @param value Value to set for the _regardingobjectid_value property.
     */
    public set _regardingobjectid_value(value: string | undefined) {
        this.__regardingobjectid_value = value;
    };
    /**
     * Gets the basedynamicpropertyid property value. 
     * @returns a dynamicproperty
     */
    public get basedynamicpropertyid() {
        return this._basedynamicpropertyid;
    };
    /**
     * Sets the basedynamicpropertyid property value. 
     * @param value Value to set for the basedynamicpropertyid property.
     */
    public set basedynamicpropertyid(value: Dynamicproperty | undefined) {
        this._basedynamicpropertyid = value;
    };
    /**
     * Instantiates a new dynamicproperty and sets the default values.
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
     * Gets the datatype property value. 
     * @returns a integer
     */
    public get datatype() {
        return this._datatype;
    };
    /**
     * Sets the datatype property value. 
     * @param value Value to set for the datatype property.
     */
    public set datatype(value: number | undefined) {
        this._datatype = value;
    };
    /**
     * Gets the defaultattributevalue property value. 
     * @returns a string
     */
    public get defaultattributevalue() {
        return this._defaultattributevalue;
    };
    /**
     * Sets the defaultattributevalue property value. 
     * @param value Value to set for the defaultattributevalue property.
     */
    public set defaultattributevalue(value: string | undefined) {
        this._defaultattributevalue = value;
    };
    /**
     * Gets the defaultvaluedecimal property value. 
     * @returns a int64
     */
    public get defaultvaluedecimal() {
        return this._defaultvaluedecimal;
    };
    /**
     * Sets the defaultvaluedecimal property value. 
     * @param value Value to set for the defaultvaluedecimal property.
     */
    public set defaultvaluedecimal(value: number | undefined) {
        this._defaultvaluedecimal = value;
    };
    /**
     * Gets the defaultvaluedouble property value. 
     * @returns a double
     */
    public get defaultvaluedouble() {
        return this._defaultvaluedouble;
    };
    /**
     * Sets the defaultvaluedouble property value. 
     * @param value Value to set for the defaultvaluedouble property.
     */
    public set defaultvaluedouble(value: number | undefined) {
        this._defaultvaluedouble = value;
    };
    /**
     * Gets the defaultvalueinteger property value. 
     * @returns a integer
     */
    public get defaultvalueinteger() {
        return this._defaultvalueinteger;
    };
    /**
     * Sets the defaultvalueinteger property value. 
     * @param value Value to set for the defaultvalueinteger property.
     */
    public set defaultvalueinteger(value: number | undefined) {
        this._defaultvalueinteger = value;
    };
    /**
     * Gets the defaultvaluestring property value. 
     * @returns a string
     */
    public get defaultvaluestring() {
        return this._defaultvaluestring;
    };
    /**
     * Sets the defaultvaluestring property value. 
     * @param value Value to set for the defaultvaluestring property.
     */
    public set defaultvaluestring(value: string | undefined) {
        this._defaultvaluestring = value;
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
     * Gets the dynamicproperty_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get dynamicproperty_AsyncOperations() {
        return this._dynamicproperty_AsyncOperations;
    };
    /**
     * Sets the dynamicproperty_AsyncOperations property value. 
     * @param value Value to set for the dynamicproperty_AsyncOperations property.
     */
    public set dynamicproperty_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._dynamicproperty_AsyncOperations = value;
    };
    /**
     * Gets the dynamicproperty_base_dynamicproperty property value. 
     * @returns a dynamicproperty
     */
    public get dynamicproperty_base_dynamicproperty() {
        return this._dynamicproperty_base_dynamicproperty;
    };
    /**
     * Sets the dynamicproperty_base_dynamicproperty property value. 
     * @param value Value to set for the dynamicproperty_base_dynamicproperty property.
     */
    public set dynamicproperty_base_dynamicproperty(value: Dynamicproperty[] | undefined) {
        this._dynamicproperty_base_dynamicproperty = value;
    };
    /**
     * Gets the dynamicproperty_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get dynamicproperty_BulkDeleteFailures() {
        return this._dynamicproperty_BulkDeleteFailures;
    };
    /**
     * Sets the dynamicproperty_BulkDeleteFailures property value. 
     * @param value Value to set for the dynamicproperty_BulkDeleteFailures property.
     */
    public set dynamicproperty_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._dynamicproperty_BulkDeleteFailures = value;
    };
    /**
     * Gets the dynamicproperty_DynamicPropertyAssociation property value. 
     * @returns a dynamicpropertyassociation
     */
    public get dynamicproperty_DynamicPropertyAssociation() {
        return this._dynamicproperty_DynamicPropertyAssociation;
    };
    /**
     * Sets the dynamicproperty_DynamicPropertyAssociation property value. 
     * @param value Value to set for the Dynamicproperty_DynamicPropertyAssociation property.
     */
    public set dynamicproperty_DynamicPropertyAssociation(value: Dynamicpropertyassociation[] | undefined) {
        this._dynamicproperty_DynamicPropertyAssociation = value;
    };
    /**
     * Gets the dynamicProperty_DynamicPropertyInstance property value. 
     * @returns a dynamicpropertyinstance
     */
    public get dynamicProperty_DynamicPropertyInstance() {
        return this._dynamicProperty_DynamicPropertyInstance;
    };
    /**
     * Sets the dynamicProperty_DynamicPropertyInstance property value. 
     * @param value Value to set for the DynamicProperty_DynamicPropertyInstance property.
     */
    public set dynamicProperty_DynamicPropertyInstance(value: Dynamicpropertyinstance[] | undefined) {
        this._dynamicProperty_DynamicPropertyInstance = value;
    };
    /**
     * Gets the dynamicProperty_DynamicPropertyOptionSetItem property value. 
     * @returns a dynamicpropertyoptionsetitem
     */
    public get dynamicProperty_DynamicPropertyOptionSetItem() {
        return this._dynamicProperty_DynamicPropertyOptionSetItem;
    };
    /**
     * Sets the dynamicProperty_DynamicPropertyOptionSetItem property value. 
     * @param value Value to set for the DynamicProperty_DynamicPropertyOptionSetItem property.
     */
    public set dynamicProperty_DynamicPropertyOptionSetItem(value: Dynamicpropertyoptionsetitem[] | undefined) {
        this._dynamicProperty_DynamicPropertyOptionSetItem = value;
    };
    /**
     * Gets the dynamicproperty_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get dynamicproperty_MailboxTrackingFolders() {
        return this._dynamicproperty_MailboxTrackingFolders;
    };
    /**
     * Sets the dynamicproperty_MailboxTrackingFolders property value. 
     * @param value Value to set for the dynamicproperty_MailboxTrackingFolders property.
     */
    public set dynamicproperty_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._dynamicproperty_MailboxTrackingFolders = value;
    };
    /**
     * Gets the dynamicproperty_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get dynamicproperty_PrincipalObjectAttributeAccesses() {
        return this._dynamicproperty_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the dynamicproperty_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the dynamicproperty_PrincipalObjectAttributeAccesses property.
     */
    public set dynamicproperty_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._dynamicproperty_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the dynamicproperty_SyncErrors property value. 
     * @returns a syncerror
     */
    public get dynamicproperty_SyncErrors() {
        return this._dynamicproperty_SyncErrors;
    };
    /**
     * Sets the dynamicproperty_SyncErrors property value. 
     * @param value Value to set for the dynamicproperty_SyncErrors property.
     */
    public set dynamicproperty_SyncErrors(value: Syncerror[] | undefined) {
        this._dynamicproperty_SyncErrors = value;
    };
    /**
     * Gets the dynamicpropertyid property value. 
     * @returns a string
     */
    public get dynamicpropertyid() {
        return this._dynamicpropertyid;
    };
    /**
     * Sets the dynamicpropertyid property value. 
     * @param value Value to set for the dynamicpropertyid property.
     */
    public set dynamicpropertyid(value: string | undefined) {
        this._dynamicpropertyid = value;
    };
    /**
     * Gets the dynamicpropertyoptionsetvalueid property value. 
     * @returns a dynamicpropertyoptionsetitem
     */
    public get dynamicpropertyoptionsetvalueid() {
        return this._dynamicpropertyoptionsetvalueid;
    };
    /**
     * Sets the dynamicpropertyoptionsetvalueid property value. 
     * @param value Value to set for the dynamicpropertyoptionsetvalueid property.
     */
    public set dynamicpropertyoptionsetvalueid(value: Dynamicpropertyoptionsetitem | undefined) {
        this._dynamicpropertyoptionsetvalueid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_basedynamicpropertyid_value": (o, n) => { (o as unknown as Dynamicproperty)._basedynamicpropertyid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Dynamicproperty)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Dynamicproperty)._createdonbehalfby_value = n.getStringValue(); },
            "_defaultvalueoptionset_value": (o, n) => { (o as unknown as Dynamicproperty)._defaultvalueoptionset_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Dynamicproperty)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Dynamicproperty)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Dynamicproperty)._organizationid_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Dynamicproperty)._regardingobjectid_value = n.getStringValue(); },
            "basedynamicpropertyid": (o, n) => { (o as unknown as Dynamicproperty).basedynamicpropertyid = n.getObjectValue<Dynamicproperty>(createDynamicpropertyFromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Dynamicproperty).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Dynamicproperty).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Dynamicproperty).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "datatype": (o, n) => { (o as unknown as Dynamicproperty).datatype = n.getNumberValue(); },
            "defaultattributevalue": (o, n) => { (o as unknown as Dynamicproperty).defaultattributevalue = n.getStringValue(); },
            "defaultvaluedecimal": (o, n) => { (o as unknown as Dynamicproperty).defaultvaluedecimal = n.getNumberValue(); },
            "defaultvaluedouble": (o, n) => { (o as unknown as Dynamicproperty).defaultvaluedouble = n.getNumberValue(); },
            "defaultvalueinteger": (o, n) => { (o as unknown as Dynamicproperty).defaultvalueinteger = n.getNumberValue(); },
            "defaultvaluestring": (o, n) => { (o as unknown as Dynamicproperty).defaultvaluestring = n.getStringValue(); },
            "description": (o, n) => { (o as unknown as Dynamicproperty).description = n.getStringValue(); },
            "dmtimportstate": (o, n) => { (o as unknown as Dynamicproperty).dmtimportstate = n.getNumberValue(); },
            "dynamicproperty_AsyncOperations": (o, n) => { (o as unknown as Dynamicproperty).dynamicproperty_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "dynamicproperty_base_dynamicproperty": (o, n) => { (o as unknown as Dynamicproperty).dynamicproperty_base_dynamicproperty = n.getCollectionOfObjectValues<Dynamicproperty>(createDynamicpropertyFromDiscriminatorValue); },
            "dynamicproperty_BulkDeleteFailures": (o, n) => { (o as unknown as Dynamicproperty).dynamicproperty_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "dynamicproperty_DynamicPropertyAssociation": (o, n) => { (o as unknown as Dynamicproperty).dynamicproperty_DynamicPropertyAssociation = n.getCollectionOfObjectValues<Dynamicpropertyassociation>(createDynamicpropertyassociationFromDiscriminatorValue); },
            "dynamicProperty_DynamicPropertyInstance": (o, n) => { (o as unknown as Dynamicproperty).dynamicProperty_DynamicPropertyInstance = n.getCollectionOfObjectValues<Dynamicpropertyinstance>(createDynamicpropertyinstanceFromDiscriminatorValue); },
            "dynamicProperty_DynamicPropertyOptionSetItem": (o, n) => { (o as unknown as Dynamicproperty).dynamicProperty_DynamicPropertyOptionSetItem = n.getCollectionOfObjectValues<Dynamicpropertyoptionsetitem>(createDynamicpropertyoptionsetitemFromDiscriminatorValue); },
            "dynamicproperty_MailboxTrackingFolders": (o, n) => { (o as unknown as Dynamicproperty).dynamicproperty_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "dynamicproperty_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Dynamicproperty).dynamicproperty_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "dynamicproperty_SyncErrors": (o, n) => { (o as unknown as Dynamicproperty).dynamicproperty_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "dynamicpropertyid": (o, n) => { (o as unknown as Dynamicproperty).dynamicpropertyid = n.getStringValue(); },
            "dynamicpropertyoptionsetvalueid": (o, n) => { (o as unknown as Dynamicproperty).dynamicpropertyoptionsetvalueid = n.getObjectValue<Dynamicpropertyoptionsetitem>(createDynamicpropertyoptionsetitemFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Dynamicproperty).importsequencenumber = n.getNumberValue(); },
            "ishidden": (o, n) => { (o as unknown as Dynamicproperty).ishidden = n.getBooleanValue(); },
            "isreadonly": (o, n) => { (o as unknown as Dynamicproperty).isreadonly = n.getBooleanValue(); },
            "isrequired": (o, n) => { (o as unknown as Dynamicproperty).isrequired = n.getBooleanValue(); },
            "maxlengthstring": (o, n) => { (o as unknown as Dynamicproperty).maxlengthstring = n.getNumberValue(); },
            "maxvaluedecimal": (o, n) => { (o as unknown as Dynamicproperty).maxvaluedecimal = n.getNumberValue(); },
            "maxvaluedouble": (o, n) => { (o as unknown as Dynamicproperty).maxvaluedouble = n.getNumberValue(); },
            "maxvalueinteger": (o, n) => { (o as unknown as Dynamicproperty).maxvalueinteger = n.getNumberValue(); },
            "minvaluedecimal": (o, n) => { (o as unknown as Dynamicproperty).minvaluedecimal = n.getNumberValue(); },
            "minvaluedouble": (o, n) => { (o as unknown as Dynamicproperty).minvaluedouble = n.getNumberValue(); },
            "minvalueinteger": (o, n) => { (o as unknown as Dynamicproperty).minvalueinteger = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Dynamicproperty).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Dynamicproperty).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Dynamicproperty).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_dynamicproperty_msdyn_fieldcomputation_PropertyId": (o, n) => { (o as unknown as Dynamicproperty).msdyn_dynamicproperty_msdyn_fieldcomputation_PropertyId = n.getCollectionOfObjectValues<Msdyn_fieldcomputation>(createMsdyn_fieldcomputationFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Dynamicproperty).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Dynamicproperty).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Dynamicproperty).overriddencreatedon = n.getDateValue(); },
            "overwrittendynamicpropertyid": (o, n) => { (o as unknown as Dynamicproperty).overwrittendynamicpropertyid = n.getStringValue(); },
            "precision": (o, n) => { (o as unknown as Dynamicproperty).precision = n.getNumberValue(); },
            "regardingobjectid_product": (o, n) => { (o as unknown as Dynamicproperty).regardingobjectid_product = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "regardingobjectid_productassociation": (o, n) => { (o as unknown as Dynamicproperty).regardingobjectid_productassociation = n.getObjectValue<Productassociation>(createProductassociationFromDiscriminatorValue); },
            "rootdynamicpropertyid": (o, n) => { (o as unknown as Dynamicproperty).rootdynamicpropertyid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Dynamicproperty).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Dynamicproperty).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Dynamicproperty).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Dynamicproperty).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Dynamicproperty).versionnumber = n.getNumberValue(); },
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
     * Gets the ishidden property value. 
     * @returns a boolean
     */
    public get ishidden() {
        return this._ishidden;
    };
    /**
     * Sets the ishidden property value. 
     * @param value Value to set for the ishidden property.
     */
    public set ishidden(value: boolean | undefined) {
        this._ishidden = value;
    };
    /**
     * Gets the isreadonly property value. 
     * @returns a boolean
     */
    public get isreadonly() {
        return this._isreadonly;
    };
    /**
     * Sets the isreadonly property value. 
     * @param value Value to set for the isreadonly property.
     */
    public set isreadonly(value: boolean | undefined) {
        this._isreadonly = value;
    };
    /**
     * Gets the isrequired property value. 
     * @returns a boolean
     */
    public get isrequired() {
        return this._isrequired;
    };
    /**
     * Sets the isrequired property value. 
     * @param value Value to set for the isrequired property.
     */
    public set isrequired(value: boolean | undefined) {
        this._isrequired = value;
    };
    /**
     * Gets the maxlengthstring property value. 
     * @returns a integer
     */
    public get maxlengthstring() {
        return this._maxlengthstring;
    };
    /**
     * Sets the maxlengthstring property value. 
     * @param value Value to set for the maxlengthstring property.
     */
    public set maxlengthstring(value: number | undefined) {
        this._maxlengthstring = value;
    };
    /**
     * Gets the maxvaluedecimal property value. 
     * @returns a int64
     */
    public get maxvaluedecimal() {
        return this._maxvaluedecimal;
    };
    /**
     * Sets the maxvaluedecimal property value. 
     * @param value Value to set for the maxvaluedecimal property.
     */
    public set maxvaluedecimal(value: number | undefined) {
        this._maxvaluedecimal = value;
    };
    /**
     * Gets the maxvaluedouble property value. 
     * @returns a double
     */
    public get maxvaluedouble() {
        return this._maxvaluedouble;
    };
    /**
     * Sets the maxvaluedouble property value. 
     * @param value Value to set for the maxvaluedouble property.
     */
    public set maxvaluedouble(value: number | undefined) {
        this._maxvaluedouble = value;
    };
    /**
     * Gets the maxvalueinteger property value. 
     * @returns a integer
     */
    public get maxvalueinteger() {
        return this._maxvalueinteger;
    };
    /**
     * Sets the maxvalueinteger property value. 
     * @param value Value to set for the maxvalueinteger property.
     */
    public set maxvalueinteger(value: number | undefined) {
        this._maxvalueinteger = value;
    };
    /**
     * Gets the minvaluedecimal property value. 
     * @returns a int64
     */
    public get minvaluedecimal() {
        return this._minvaluedecimal;
    };
    /**
     * Sets the minvaluedecimal property value. 
     * @param value Value to set for the minvaluedecimal property.
     */
    public set minvaluedecimal(value: number | undefined) {
        this._minvaluedecimal = value;
    };
    /**
     * Gets the minvaluedouble property value. 
     * @returns a double
     */
    public get minvaluedouble() {
        return this._minvaluedouble;
    };
    /**
     * Sets the minvaluedouble property value. 
     * @param value Value to set for the minvaluedouble property.
     */
    public set minvaluedouble(value: number | undefined) {
        this._minvaluedouble = value;
    };
    /**
     * Gets the minvalueinteger property value. 
     * @returns a integer
     */
    public get minvalueinteger() {
        return this._minvalueinteger;
    };
    /**
     * Sets the minvalueinteger property value. 
     * @param value Value to set for the minvalueinteger property.
     */
    public set minvalueinteger(value: number | undefined) {
        this._minvalueinteger = value;
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
     * Gets the msdyn_dynamicproperty_msdyn_fieldcomputation_PropertyId property value. 
     * @returns a msdyn_fieldcomputation
     */
    public get msdyn_dynamicproperty_msdyn_fieldcomputation_PropertyId() {
        return this._msdyn_dynamicproperty_msdyn_fieldcomputation_PropertyId;
    };
    /**
     * Sets the msdyn_dynamicproperty_msdyn_fieldcomputation_PropertyId property value. 
     * @param value Value to set for the msdyn_dynamicproperty_msdyn_fieldcomputation_PropertyId property.
     */
    public set msdyn_dynamicproperty_msdyn_fieldcomputation_PropertyId(value: Msdyn_fieldcomputation[] | undefined) {
        this._msdyn_dynamicproperty_msdyn_fieldcomputation_PropertyId = value;
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
     * Gets the overwrittendynamicpropertyid property value. 
     * @returns a string
     */
    public get overwrittendynamicpropertyid() {
        return this._overwrittendynamicpropertyid;
    };
    /**
     * Sets the overwrittendynamicpropertyid property value. 
     * @param value Value to set for the overwrittendynamicpropertyid property.
     */
    public set overwrittendynamicpropertyid(value: string | undefined) {
        this._overwrittendynamicpropertyid = value;
    };
    /**
     * Gets the precision property value. 
     * @returns a integer
     */
    public get precision() {
        return this._precision;
    };
    /**
     * Sets the precision property value. 
     * @param value Value to set for the precision property.
     */
    public set precision(value: number | undefined) {
        this._precision = value;
    };
    /**
     * Gets the regardingobjectid_product property value. 
     * @returns a product
     */
    public get regardingobjectid_product() {
        return this._regardingobjectid_product;
    };
    /**
     * Sets the regardingobjectid_product property value. 
     * @param value Value to set for the regardingobjectid_product property.
     */
    public set regardingobjectid_product(value: Product | undefined) {
        this._regardingobjectid_product = value;
    };
    /**
     * Gets the regardingobjectid_productassociation property value. 
     * @returns a productassociation
     */
    public get regardingobjectid_productassociation() {
        return this._regardingobjectid_productassociation;
    };
    /**
     * Sets the regardingobjectid_productassociation property value. 
     * @param value Value to set for the regardingobjectid_productassociation property.
     */
    public set regardingobjectid_productassociation(value: Productassociation | undefined) {
        this._regardingobjectid_productassociation = value;
    };
    /**
     * Gets the rootdynamicpropertyid property value. 
     * @returns a string
     */
    public get rootdynamicpropertyid() {
        return this._rootdynamicpropertyid;
    };
    /**
     * Sets the rootdynamicpropertyid property value. 
     * @param value Value to set for the rootdynamicpropertyid property.
     */
    public set rootdynamicpropertyid(value: string | undefined) {
        this._rootdynamicpropertyid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_basedynamicpropertyid_value", this._basedynamicpropertyid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_defaultvalueoptionset_value", this._defaultvalueoptionset_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeObjectValue<Dynamicproperty>("basedynamicpropertyid", this.basedynamicpropertyid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("datatype", this.datatype);
        writer.writeStringValue("defaultattributevalue", this.defaultattributevalue);
        writer.writeNumberValue("defaultvaluedecimal", this.defaultvaluedecimal);
        writer.writeNumberValue("defaultvaluedouble", this.defaultvaluedouble);
        writer.writeNumberValue("defaultvalueinteger", this.defaultvalueinteger);
        writer.writeStringValue("defaultvaluestring", this.defaultvaluestring);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("dmtimportstate", this.dmtimportstate);
        writer.writeCollectionOfObjectValues<Asyncoperation>("dynamicproperty_AsyncOperations", this.dynamicproperty_AsyncOperations);
        writer.writeCollectionOfObjectValues<Dynamicproperty>("dynamicproperty_base_dynamicproperty", this.dynamicproperty_base_dynamicproperty);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("dynamicproperty_BulkDeleteFailures", this.dynamicproperty_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Dynamicpropertyassociation>("dynamicproperty_DynamicPropertyAssociation", this.dynamicproperty_DynamicPropertyAssociation);
        writer.writeCollectionOfObjectValues<Dynamicpropertyinstance>("dynamicProperty_DynamicPropertyInstance", this.dynamicProperty_DynamicPropertyInstance);
        writer.writeCollectionOfObjectValues<Dynamicpropertyoptionsetitem>("dynamicProperty_DynamicPropertyOptionSetItem", this.dynamicProperty_DynamicPropertyOptionSetItem);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("dynamicproperty_MailboxTrackingFolders", this.dynamicproperty_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("dynamicproperty_PrincipalObjectAttributeAccesses", this.dynamicproperty_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("dynamicproperty_SyncErrors", this.dynamicproperty_SyncErrors);
        writer.writeStringValue("dynamicpropertyid", this.dynamicpropertyid);
        writer.writeObjectValue<Dynamicpropertyoptionsetitem>("dynamicpropertyoptionsetvalueid", this.dynamicpropertyoptionsetvalueid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("ishidden", this.ishidden);
        writer.writeBooleanValue("isreadonly", this.isreadonly);
        writer.writeBooleanValue("isrequired", this.isrequired);
        writer.writeNumberValue("maxlengthstring", this.maxlengthstring);
        writer.writeNumberValue("maxvaluedecimal", this.maxvaluedecimal);
        writer.writeNumberValue("maxvaluedouble", this.maxvaluedouble);
        writer.writeNumberValue("maxvalueinteger", this.maxvalueinteger);
        writer.writeNumberValue("minvaluedecimal", this.minvaluedecimal);
        writer.writeNumberValue("minvaluedouble", this.minvaluedouble);
        writer.writeNumberValue("minvalueinteger", this.minvalueinteger);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Msdyn_fieldcomputation>("msdyn_dynamicproperty_msdyn_fieldcomputation_PropertyId", this.msdyn_dynamicproperty_msdyn_fieldcomputation_PropertyId);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("overwrittendynamicpropertyid", this.overwrittendynamicpropertyid);
        writer.writeNumberValue("precision", this.precision);
        writer.writeObjectValue<Product>("regardingobjectid_product", this.regardingobjectid_product);
        writer.writeObjectValue<Productassociation>("regardingobjectid_productassociation", this.regardingobjectid_productassociation);
        writer.writeStringValue("rootdynamicpropertyid", this.rootdynamicpropertyid);
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
