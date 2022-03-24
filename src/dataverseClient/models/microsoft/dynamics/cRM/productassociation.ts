import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDynamicpropertyassociationFromDiscriminatorValue} from './createDynamicpropertyassociationFromDiscriminatorValue';
import {createDynamicpropertyFromDiscriminatorValue} from './createDynamicpropertyFromDiscriminatorValue';
import {createInvoicedetailFromDiscriminatorValue} from './createInvoicedetailFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOpportunityproductFromDiscriminatorValue} from './createOpportunityproductFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createQuotedetailFromDiscriminatorValue} from './createQuotedetailFromDiscriminatorValue';
import {createSalesorderdetailFromDiscriminatorValue} from './createSalesorderdetailFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Dynamicproperty, Dynamicpropertyassociation, Invoicedetail, Mailboxtrackingfolder, Opportunityproduct, Organization, Principalobjectattributeaccess, Processsession, Product, Quotedetail, Salesorderdetail, Syncerror, Systemuser, Transactioncurrency, Uom} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Productassociation extends Crmbaseentity implements Parsable {
    private __associatedproduct_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __productid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private __uomid_value?: string | undefined;
    private _associatedproduct?: Product | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _dmtimportstate?: number | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _productAssociation_AsyncOperations?: Asyncoperation[] | undefined;
    private _productassociation_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _productAssociation_DynamicProperty?: Dynamicproperty[] | undefined;
    private _productAssociation_DynamicPropertyAssociation?: Dynamicpropertyassociation[] | undefined;
    private _productAssociation_invoice_details?: Invoicedetail[] | undefined;
    private _productassociation_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _productAssociation_opportunity_product?: Opportunityproduct[] | undefined;
    private _productAssociation_PrincipalObjectAttributeAccess?: Principalobjectattributeaccess[] | undefined;
    private _productAssociation_ProcessSessions?: Processsession[] | undefined;
    private _productAssociation_quote_details?: Quotedetail[] | undefined;
    private _productAssociation_salesorder_details?: Salesorderdetail[] | undefined;
    private _productAssociation_SyncErrors?: Syncerror[] | undefined;
    private _productassociationid?: string | undefined;
    private _productid?: Product | undefined;
    private _productisrequired?: number | undefined;
    private _propertycustomizationstatus?: number | undefined;
    private _quantity?: number | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _uomid?: Uom | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _associatedproduct_value property value. 
     * @returns a string
     */
    public get _associatedproduct_value() {
        return this.__associatedproduct_value;
    };
    /**
     * Sets the _associatedproduct_value property value. 
     * @param value Value to set for the _associatedproduct_value property.
     */
    public set _associatedproduct_value(value: string | undefined) {
        this.__associatedproduct_value = value;
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
     * Gets the _productid_value property value. 
     * @returns a string
     */
    public get _productid_value() {
        return this.__productid_value;
    };
    /**
     * Sets the _productid_value property value. 
     * @param value Value to set for the _productid_value property.
     */
    public set _productid_value(value: string | undefined) {
        this.__productid_value = value;
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
     * Gets the _uomid_value property value. 
     * @returns a string
     */
    public get _uomid_value() {
        return this.__uomid_value;
    };
    /**
     * Sets the _uomid_value property value. 
     * @param value Value to set for the _uomid_value property.
     */
    public set _uomid_value(value: string | undefined) {
        this.__uomid_value = value;
    };
    /**
     * Gets the associatedproduct property value. 
     * @returns a product
     */
    public get associatedproduct() {
        return this._associatedproduct;
    };
    /**
     * Sets the associatedproduct property value. 
     * @param value Value to set for the associatedproduct property.
     */
    public set associatedproduct(value: Product | undefined) {
        this._associatedproduct = value;
    };
    /**
     * Instantiates a new productassociation and sets the default values.
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
            "_associatedproduct_value": (o, n) => { (o as unknown as Productassociation)._associatedproduct_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Productassociation)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Productassociation)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Productassociation)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Productassociation)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Productassociation)._organizationid_value = n.getStringValue(); },
            "_productid_value": (o, n) => { (o as unknown as Productassociation)._productid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Productassociation)._transactioncurrencyid_value = n.getStringValue(); },
            "_uomid_value": (o, n) => { (o as unknown as Productassociation)._uomid_value = n.getStringValue(); },
            "associatedproduct": (o, n) => { (o as unknown as Productassociation).associatedproduct = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Productassociation).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Productassociation).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Productassociation).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "dmtimportstate": (o, n) => { (o as unknown as Productassociation).dmtimportstate = n.getNumberValue(); },
            "exchangerate": (o, n) => { (o as unknown as Productassociation).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Productassociation).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Productassociation).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Productassociation).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Productassociation).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Productassociation).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Productassociation).overriddencreatedon = n.getDateValue(); },
            "productAssociation_AsyncOperations": (o, n) => { (o as unknown as Productassociation).productAssociation_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "productassociation_BulkDeleteFailures": (o, n) => { (o as unknown as Productassociation).productassociation_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "productAssociation_DynamicProperty": (o, n) => { (o as unknown as Productassociation).productAssociation_DynamicProperty = n.getCollectionOfObjectValues<Dynamicproperty>(createDynamicpropertyFromDiscriminatorValue); },
            "productAssociation_DynamicPropertyAssociation": (o, n) => { (o as unknown as Productassociation).productAssociation_DynamicPropertyAssociation = n.getCollectionOfObjectValues<Dynamicpropertyassociation>(createDynamicpropertyassociationFromDiscriminatorValue); },
            "productAssociation_invoice_details": (o, n) => { (o as unknown as Productassociation).productAssociation_invoice_details = n.getCollectionOfObjectValues<Invoicedetail>(createInvoicedetailFromDiscriminatorValue); },
            "productassociation_MailboxTrackingFolders": (o, n) => { (o as unknown as Productassociation).productassociation_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "productAssociation_opportunity_product": (o, n) => { (o as unknown as Productassociation).productAssociation_opportunity_product = n.getCollectionOfObjectValues<Opportunityproduct>(createOpportunityproductFromDiscriminatorValue); },
            "productAssociation_PrincipalObjectAttributeAccess": (o, n) => { (o as unknown as Productassociation).productAssociation_PrincipalObjectAttributeAccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "productAssociation_ProcessSessions": (o, n) => { (o as unknown as Productassociation).productAssociation_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "productAssociation_quote_details": (o, n) => { (o as unknown as Productassociation).productAssociation_quote_details = n.getCollectionOfObjectValues<Quotedetail>(createQuotedetailFromDiscriminatorValue); },
            "productAssociation_salesorder_details": (o, n) => { (o as unknown as Productassociation).productAssociation_salesorder_details = n.getCollectionOfObjectValues<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "productAssociation_SyncErrors": (o, n) => { (o as unknown as Productassociation).productAssociation_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "productassociationid": (o, n) => { (o as unknown as Productassociation).productassociationid = n.getStringValue(); },
            "productid": (o, n) => { (o as unknown as Productassociation).productid = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "productisrequired": (o, n) => { (o as unknown as Productassociation).productisrequired = n.getNumberValue(); },
            "propertycustomizationstatus": (o, n) => { (o as unknown as Productassociation).propertycustomizationstatus = n.getNumberValue(); },
            "quantity": (o, n) => { (o as unknown as Productassociation).quantity = n.getNumberValue(); },
            "statecode": (o, n) => { (o as unknown as Productassociation).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Productassociation).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Productassociation).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Productassociation).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "uomid": (o, n) => { (o as unknown as Productassociation).uomid = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Productassociation).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Productassociation).versionnumber = n.getNumberValue(); },
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
     * Gets the productAssociation_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get productAssociation_AsyncOperations() {
        return this._productAssociation_AsyncOperations;
    };
    /**
     * Sets the productAssociation_AsyncOperations property value. 
     * @param value Value to set for the ProductAssociation_AsyncOperations property.
     */
    public set productAssociation_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._productAssociation_AsyncOperations = value;
    };
    /**
     * Gets the productassociation_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get productassociation_BulkDeleteFailures() {
        return this._productassociation_BulkDeleteFailures;
    };
    /**
     * Sets the productassociation_BulkDeleteFailures property value. 
     * @param value Value to set for the productassociation_BulkDeleteFailures property.
     */
    public set productassociation_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._productassociation_BulkDeleteFailures = value;
    };
    /**
     * Gets the productAssociation_DynamicProperty property value. 
     * @returns a dynamicproperty
     */
    public get productAssociation_DynamicProperty() {
        return this._productAssociation_DynamicProperty;
    };
    /**
     * Sets the productAssociation_DynamicProperty property value. 
     * @param value Value to set for the ProductAssociation_DynamicProperty property.
     */
    public set productAssociation_DynamicProperty(value: Dynamicproperty[] | undefined) {
        this._productAssociation_DynamicProperty = value;
    };
    /**
     * Gets the productAssociation_DynamicPropertyAssociation property value. 
     * @returns a dynamicpropertyassociation
     */
    public get productAssociation_DynamicPropertyAssociation() {
        return this._productAssociation_DynamicPropertyAssociation;
    };
    /**
     * Sets the productAssociation_DynamicPropertyAssociation property value. 
     * @param value Value to set for the ProductAssociation_DynamicPropertyAssociation property.
     */
    public set productAssociation_DynamicPropertyAssociation(value: Dynamicpropertyassociation[] | undefined) {
        this._productAssociation_DynamicPropertyAssociation = value;
    };
    /**
     * Gets the productAssociation_invoice_details property value. 
     * @returns a invoicedetail
     */
    public get productAssociation_invoice_details() {
        return this._productAssociation_invoice_details;
    };
    /**
     * Sets the productAssociation_invoice_details property value. 
     * @param value Value to set for the productAssociation_invoice_details property.
     */
    public set productAssociation_invoice_details(value: Invoicedetail[] | undefined) {
        this._productAssociation_invoice_details = value;
    };
    /**
     * Gets the productassociation_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get productassociation_MailboxTrackingFolders() {
        return this._productassociation_MailboxTrackingFolders;
    };
    /**
     * Sets the productassociation_MailboxTrackingFolders property value. 
     * @param value Value to set for the productassociation_MailboxTrackingFolders property.
     */
    public set productassociation_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._productassociation_MailboxTrackingFolders = value;
    };
    /**
     * Gets the productAssociation_opportunity_product property value. 
     * @returns a opportunityproduct
     */
    public get productAssociation_opportunity_product() {
        return this._productAssociation_opportunity_product;
    };
    /**
     * Sets the productAssociation_opportunity_product property value. 
     * @param value Value to set for the productAssociation_opportunity_product property.
     */
    public set productAssociation_opportunity_product(value: Opportunityproduct[] | undefined) {
        this._productAssociation_opportunity_product = value;
    };
    /**
     * Gets the productAssociation_PrincipalObjectAttributeAccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get productAssociation_PrincipalObjectAttributeAccess() {
        return this._productAssociation_PrincipalObjectAttributeAccess;
    };
    /**
     * Sets the productAssociation_PrincipalObjectAttributeAccess property value. 
     * @param value Value to set for the ProductAssociation_PrincipalObjectAttributeAccess property.
     */
    public set productAssociation_PrincipalObjectAttributeAccess(value: Principalobjectattributeaccess[] | undefined) {
        this._productAssociation_PrincipalObjectAttributeAccess = value;
    };
    /**
     * Gets the productAssociation_ProcessSessions property value. 
     * @returns a processsession
     */
    public get productAssociation_ProcessSessions() {
        return this._productAssociation_ProcessSessions;
    };
    /**
     * Sets the productAssociation_ProcessSessions property value. 
     * @param value Value to set for the ProductAssociation_ProcessSessions property.
     */
    public set productAssociation_ProcessSessions(value: Processsession[] | undefined) {
        this._productAssociation_ProcessSessions = value;
    };
    /**
     * Gets the productAssociation_quote_details property value. 
     * @returns a quotedetail
     */
    public get productAssociation_quote_details() {
        return this._productAssociation_quote_details;
    };
    /**
     * Sets the productAssociation_quote_details property value. 
     * @param value Value to set for the productAssociation_quote_details property.
     */
    public set productAssociation_quote_details(value: Quotedetail[] | undefined) {
        this._productAssociation_quote_details = value;
    };
    /**
     * Gets the productAssociation_salesorder_details property value. 
     * @returns a salesorderdetail
     */
    public get productAssociation_salesorder_details() {
        return this._productAssociation_salesorder_details;
    };
    /**
     * Sets the productAssociation_salesorder_details property value. 
     * @param value Value to set for the productAssociation_salesorder_details property.
     */
    public set productAssociation_salesorder_details(value: Salesorderdetail[] | undefined) {
        this._productAssociation_salesorder_details = value;
    };
    /**
     * Gets the productAssociation_SyncErrors property value. 
     * @returns a syncerror
     */
    public get productAssociation_SyncErrors() {
        return this._productAssociation_SyncErrors;
    };
    /**
     * Sets the productAssociation_SyncErrors property value. 
     * @param value Value to set for the ProductAssociation_SyncErrors property.
     */
    public set productAssociation_SyncErrors(value: Syncerror[] | undefined) {
        this._productAssociation_SyncErrors = value;
    };
    /**
     * Gets the productassociationid property value. 
     * @returns a string
     */
    public get productassociationid() {
        return this._productassociationid;
    };
    /**
     * Sets the productassociationid property value. 
     * @param value Value to set for the productassociationid property.
     */
    public set productassociationid(value: string | undefined) {
        this._productassociationid = value;
    };
    /**
     * Gets the productid property value. 
     * @returns a product
     */
    public get productid() {
        return this._productid;
    };
    /**
     * Sets the productid property value. 
     * @param value Value to set for the productid property.
     */
    public set productid(value: Product | undefined) {
        this._productid = value;
    };
    /**
     * Gets the productisrequired property value. 
     * @returns a integer
     */
    public get productisrequired() {
        return this._productisrequired;
    };
    /**
     * Sets the productisrequired property value. 
     * @param value Value to set for the productisrequired property.
     */
    public set productisrequired(value: number | undefined) {
        this._productisrequired = value;
    };
    /**
     * Gets the propertycustomizationstatus property value. 
     * @returns a integer
     */
    public get propertycustomizationstatus() {
        return this._propertycustomizationstatus;
    };
    /**
     * Sets the propertycustomizationstatus property value. 
     * @param value Value to set for the propertycustomizationstatus property.
     */
    public set propertycustomizationstatus(value: number | undefined) {
        this._propertycustomizationstatus = value;
    };
    /**
     * Gets the quantity property value. 
     * @returns a int64
     */
    public get quantity() {
        return this._quantity;
    };
    /**
     * Sets the quantity property value. 
     * @param value Value to set for the quantity property.
     */
    public set quantity(value: number | undefined) {
        this._quantity = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_associatedproduct_value", this._associatedproduct_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_productid_value", this._productid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("_uomid_value", this._uomid_value);
        writer.writeObjectValue<Product>("associatedproduct", this.associatedproduct);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("dmtimportstate", this.dmtimportstate);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeCollectionOfObjectValues<Asyncoperation>("productAssociation_AsyncOperations", this.productAssociation_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("productassociation_BulkDeleteFailures", this.productassociation_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Dynamicproperty>("productAssociation_DynamicProperty", this.productAssociation_DynamicProperty);
        writer.writeCollectionOfObjectValues<Dynamicpropertyassociation>("productAssociation_DynamicPropertyAssociation", this.productAssociation_DynamicPropertyAssociation);
        writer.writeCollectionOfObjectValues<Invoicedetail>("productAssociation_invoice_details", this.productAssociation_invoice_details);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("productassociation_MailboxTrackingFolders", this.productassociation_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Opportunityproduct>("productAssociation_opportunity_product", this.productAssociation_opportunity_product);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("productAssociation_PrincipalObjectAttributeAccess", this.productAssociation_PrincipalObjectAttributeAccess);
        writer.writeCollectionOfObjectValues<Processsession>("productAssociation_ProcessSessions", this.productAssociation_ProcessSessions);
        writer.writeCollectionOfObjectValues<Quotedetail>("productAssociation_quote_details", this.productAssociation_quote_details);
        writer.writeCollectionOfObjectValues<Salesorderdetail>("productAssociation_salesorder_details", this.productAssociation_salesorder_details);
        writer.writeCollectionOfObjectValues<Syncerror>("productAssociation_SyncErrors", this.productAssociation_SyncErrors);
        writer.writeStringValue("productassociationid", this.productassociationid);
        writer.writeObjectValue<Product>("productid", this.productid);
        writer.writeNumberValue("productisrequired", this.productisrequired);
        writer.writeNumberValue("propertycustomizationstatus", this.propertycustomizationstatus);
        writer.writeNumberValue("quantity", this.quantity);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeObjectValue<Uom>("uomid", this.uomid);
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
     * Gets the uomid property value. 
     * @returns a uom
     */
    public get uomid() {
        return this._uomid;
    };
    /**
     * Sets the uomid property value. 
     * @param value Value to set for the uomid property.
     */
    public set uomid(value: Uom | undefined) {
        this._uomid = value;
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
